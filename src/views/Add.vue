<template>
  <div>
    <Layout classPrefix="layout">
      {{ bill }}
      <calculator @update:value="onUpdateAmount" />
      <type :value.sync="bill.type" />
      <remark @update:value="onUpdateRemark" />
      <tags :data-source.sync="tags" @update:value="onUpdateTags" />
    </Layout>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import Calculator from "./Add/Calculator.vue";
import Remark from "./Add/Remark.vue";
import Tags from "./Add/Tags.vue";
import Type from "./Add/Type.vue";

type Bill = {
  tags: string[] | undefined;
  remark: string;
  type: string;
  amount: number;
};

@Component({
  components: { Calculator, Type, Remark, Tags },
})
export default class Add extends Vue {
  name = "Add";

  tags = ["衣", "食", "住", "行"];
  bill: Bill = {
    tags: [],
    remark: "",
    type: "-",
    amount: 0,
  };
  onUpdateTags(value: string[]) {
    this.bill.tags = value;
  }
  onUpdateRemark(value: string) {
    this.bill.remark = value;
  }
  onUpdateAmount(value: string) {
    this.bill.amount = parseFloat(value);
  }
}
</script>

<style lang="scss">
.layout-content {
  display: flex;
  flex-flow: column-reverse;
}
</style>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
</style>
