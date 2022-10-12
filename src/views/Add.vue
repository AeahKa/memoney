<template>
  <div>
    <Layout classPrefix="layout">
      <calculator />
      <type />
      <remark />
      <tags />
    </Layout>
  </div>
</template>

<script lang="ts">
import Calculator from "./Add/Calculator.vue";
import Remark from "./Add/Remark.vue";
import Tags from "./Add/Tags.vue";
import Type from "./Add/Type.vue";
export default {
  components: { Calculator, Type, Remark, Tags },
  name: "Name",
};
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
