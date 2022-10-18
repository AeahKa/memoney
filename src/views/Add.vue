<template>
  <div>
    <Layout classPrefix="layout">
      <calculator @update:value="onUpdateAmount" @submit="submit" />
      <type :value.sync="bill.type" />
      <remark @update:value="onUpdateRemark" placeHolder="备注" />
      <tags :data-source.sync="tags" @update:value="onUpdateTags" />
    </Layout>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Watch } from "vue-property-decorator";
import Calculator from "./Add/Calculator.vue";
import Remark from "../components/FormItem.vue";
import Tags from "./Add/Tags.vue";
import Type from "./Add/Type.vue";
import billListModel from "../models/billListModel";
import tagListModel from "../models/tagListModel";

import Bill from "../custom";

const billList = billListModel.fetch();
const tagList = tagListModel.fetch();

@Component({
  components: { Calculator, Type, Remark, Tags },
})
export default class Add extends Vue {
  name = "Add";

  tags = tagList;
  billList = billList;
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
  submit() {
    const billCopy: Bill = billListModel.copy(this.bill);
    billCopy.createdAt = new Date();
    billList.push(billCopy);
  }

  @Watch("billList")
  onBillListChanged() {
    billListModel.save(this.billList);
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
