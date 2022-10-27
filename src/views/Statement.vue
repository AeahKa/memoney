<template>
  <div>
    <Layout>
      <Tabs
        :dataSource="typeList"
        classPrefix="types"
        class="types"
        :value.sync="type"
      />
      <Tabs
        :dataSource="cycleList"
        classPrefix="cycle"
        class="cycle"
        :value.sync="cycle"
      />
      <ol class="statement">
        <li class="date" v-for="group in result" :key="group.title">
          <h3 class="title">{{ group.title }}</h3>
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
import { Component } from "vue-property-decorator";
import Tabs from "../components/Tabs.vue";
import typeList from "../constants/typeList";
import cycleList from "../constants/cycleList";

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

  get billList() {
    return (this.$store.state as RootState).billList;
  }
  get result() {
    const { billList } = this;

    type HashTableValue = { title: string; items: Bill[] };
    const hashTable: { [key: string]: HashTableValue } = {};

    for (let i = 0; i < billList.length; i++) {
      const [date, time] = billList[i].createdAt!.split("T");
      hashTable[date] = hashTable[date] || { title: date, items: [] };
      hashTable[date].items.push(billList[i]);
    }
    return hashTable;
  }
  beforeCreate() {
    this.$store.commit("fetchBills");
  }
  typeList = typeList;
  type = "-";
  cycleList = cycleList;
  cycle = "daily";
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";

.types::v-deep .types-tabs-item {
  background: white;
  &.selected {
    background: #c4c4c4;
    &::after {
      display: none;
    }
  }
}
.cycle::v-deep .cycle-tabs-item {
  font-size: 16px;
  &.selected {
    background: #c4c4c4;
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