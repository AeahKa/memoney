<template>
  <div>
    <Layout>
      <Tabs
        :dataSource="typeList"
        classPrefix="types"
        class="types"
        :value.sync="type"
      />
      <ol class="statement">
        <li class="date" v-for="(group, index) in groupedList" :key="index">
          <h3 class="title">
            {{ dateBeautify(group.title) }}<span>￥{{ group.total }}</span>
          </h3>
          <ol class="billList">
            <li class="bill" v-for="item in group.items" :key="item.id">
              <span class="tags">{{ tagName(item.tags) }}</span>
              <span class="remark">{{ item.remark }}</span>
              <span class="amount">￥{{ item.amount }}</span>
            </li>
          </ol>
        </li>
      </ol>
    </Layout>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import dayjs from "dayjs";
import copy from "@/lib/copy";
import { Component } from "vue-property-decorator";
import Tabs from "../components/Tabs.vue";
import typeList from "../constants/typeList";

@Component({
  components: { Tabs },
})
export default class Statement extends Vue {
  tagName(tags: Tag[]) {
    const names = [];
    for (let i = 0; i < tags.length; i++) {
      if (tags[i]) {
        names.push(tags[i].name);
      }
    }
    return names.toString().replace(",", "| ");
  }
  dateBeautify(string: string) {
    const date = dayjs(string);
    const now = dayjs();
    if (date.isSame(now, "day")) {
      return "今天";
    } else if (date.isSame(now.subtract(1, "day"), "day")) {
      return "昨天";
    } else if (date.isSame(now.subtract(2, "day"), "day")) {
      return "前天";
    } else if (date.isSame(now, "year")) {
      return date.format("M月D日");
    } else {
      return date.format("YYYY年M月D日");
    }
  }

  get billList() {
    return (this.$store.state as RootState).billList;
  }
  get groupedList() {
    const { billList } = this;
    if (billList.length === 0) {
      return [];
    }
    const oBillList = copy(billList)
      .filter((r) => r.type === this.type)
      .sort(
        (a, b) => dayjs(b.createdAt).valueOf() - dayjs(a.createdAt).valueOf()
      );
    if (oBillList.length === 0) {
      return [];
    }
    type Result = [{ title: string; items: Bill[]; total?: number }];
    const result: Result = [
      {
        title: dayjs(oBillList[0].createdAt).format("YYYY-MM-DD"),
        items: [oBillList[0]],
      },
    ];

    for (let i = 1; i < oBillList.length; i++) {
      const current = oBillList[i];
      const last = result[result.length - 1];
      if (dayjs(last.title).isSame(dayjs(current.createdAt), "day")) {
        last.items.push(current);
      } else {
        result.push({
          title: dayjs(current.createdAt).format("YYYY-MM-DD"),
          items: [current],
        });
      }
    }
    result.map((group) => {
      group.total = group.items.reduce((sum, item) => sum + item.amount, 0);
    });
    return result;
  }
  beforeCreate() {
    this.$store.commit("fetchBills");
  }
  typeList = typeList;
  type = "-";
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";

.types::v-deep .types-tabs-item {
  background: #c4c4c4;
  &.selected {
    background: #f5f5f5;
    &::after {
      display: none;
    }
  }
}
%item {
  padding: 0 16px;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.statement {
  .bill {
    @extend %item;
    background: white;
  }
  .title {
    @extend %item;
  }
  .remark {
    margin-right: auto;
    margin-left: 8px;
    color: #999;
  }
}
</style>