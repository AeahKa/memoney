<template>
  <div>
    <Layout classPrefix="layout">
      <calculator @update:value="onUpdateAmount" @submit="submit" />
      <type :value.sync="bill.type" />
      <remark
        class="remark"
        @update:value="onUpdateRemark"
        placeHolder="备注"
      />
      <tags :data-source.sync="tags" @update:value="UpdateTag" />
    </Layout>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import Calculator from "./Add/Calculator.vue";
import Remark from "../components/FormItem.vue";
import Tags from "./Add/Tags.vue";
import Type from "./Add/Type.vue";

@Component({
  components: { Calculator, Type, Remark, Tags },
})
export default class Add extends Vue {
  name = "Add";

  tags = window.tagList;
  billList = window.billList;
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
    window.newBill(this.bill);
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
.remark {
  background: #f5f5f5;
}
</style>
