<template>
  <div>
    <Layout classPrefix="layout">
      <Calculator @update:value="onUpdateAmount" @submit="submit" />
      <Tabs
        :dataSource="typeList"
        classPrefix="types"
        class="types"
        :value.sync="bill.type"
      />
      <Remark
        class="remark"
        @update:value="onUpdateRemark"
        placeHolder="备注"
      />
      <Tags :value.sync="bill.tags" />
    </Layout>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import Calculator from "../components/Add/Calculator.vue";
import Remark from "../components/FormItem.vue";
import Tags from "../components/Add/Tags.vue";
import Tabs from "@/components/Tabs.vue";
import typeList from "../constants/typeList";

@Component({
  components: { Calculator, Tabs, Remark, Tags },
})
export default class Add extends Vue {
  name = "Add";
  typeList = typeList;
  type = "-";

  get billList() {
    return this.$store.state.billList;
  }

  bill: Bill = {
    tags: [],
    remark: "",
    type: "-",
    amount: 0,
  };
  created() {
    this.$store.commit("fetchBills");
  }

  onUpdateRemark(value: string) {
    this.bill.remark = value;
  }
  onUpdateAmount(value: string) {
    this.bill.amount = parseFloat(value);
  }
  submit() {
    this.$store.commit("newBill", this.bill);
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
