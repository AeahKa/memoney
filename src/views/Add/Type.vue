<template>
  <div>
    <ul class="type">
      <li :class="value === '-' && 'selected'" @click="selectType('-')">
        支出
      </li>
      <li :class="value === '+' && 'selected'" @click="selectType('+')">
        收入
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
@Component
export default class Type extends Vue {
  @Prop(String) readonly value!: string;
  selectType(type: string) {
    if (type !== "-" && type !== "+") {
      throw new Error("unknown type");
    }
    this.$emit("update:value", type);
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
.type {
  background: #c4c4c4;
  display: flex;
  text-align: center;
  align-items: center;
  font-size: 24px;
  > li {
    width: 50%;
    padding: 16px;
    position: relative;
    &.selected::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 4px;
      background: $col-selected;
    }
  }
}
</style>