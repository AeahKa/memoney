<template>
  <div>
    <label class="remark">
      <input type="text" v-model="value" placeholder="备注" />
    </label>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
@Component
export default class Remark extends Vue {
  value = "";
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
.remark {
  background: #f5f5f5;
  display: block;
  padding: 0 16px;
  > input {
    background: transparent;
    border: none;
    color: #333;
    padding: 16px 0;
    width: 100%;
  }
}
</style>