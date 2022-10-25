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
    </Layout>
  </div>
</template>



<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import Type from "../components/Add/Type.vue";
import Tabs from "../components/Tabs.vue";
@Component({
  components: { Type, Tabs },
})
export default class Statement extends Vue {
  type = "-";
  cycle = "daily";
  typeList = [
    { text: "支出", value: "-" },
    { text: "收入", value: "+" },
  ];
  cycleList = [
    { text: "日账单", value: "daily" },
    { text: "周账单", value: "weekly" },
    { text: "月账单", value: "monthly" },
  ];
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
</style>