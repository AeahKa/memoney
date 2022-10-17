<template>
  <div>
    <Layout classPrefix="layout">
      <calculator @update:value="onUpdateAmount" @submit="submit" />
      <type :value.sync="bill.type" />
      <remark @update:value="onUpdateRemark" />
      <tags :data-source.sync="tags" @update:value="onUpdateTags" />
    </Layout>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Watch } from "vue-property-decorator";
import Calculator from "./Add/Calculator.vue";
import Remark from "./Add/Remark.vue";
import Tags from "./Add/Tags.vue";
import Type from "./Add/Type.vue";
import model from "../views/model";
import Bill from "../custom";

const billList = model.fetch();

@Component({
  components: { Calculator, Type, Remark, Tags },
})
export default class Add extends Vue {
  name = "Add";

  tags = ["衣", "食", "住", "行"];
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
    const billCopy: Bill = model.copy(this.bill);
    billCopy.createdAt = new Date();
    billList.push(billCopy);
  }

  @Watch("billList")
  onBillListChanged() {
    model.save(this.billList);
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
