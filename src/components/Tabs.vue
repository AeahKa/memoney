<template>
  <ul class="tabs">
    <li
      :class="{
        [classPrefix + '-tabs-item']: classPrefix,
        selected: value === item.value,
      }"
      @click="select(item)"
      v-for="item in dataSource"
      :key="item.value"
    >
      {{ item.text }}
    </li>
  </ul>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";

type DataSourceItem = {
  text: string;
  value: string;
};

@Component
export default class Tabs extends Vue {
  @Prop({ required: true, type: Array }) dataSource!: {
    text: string;
    value: string;
  }[];
  @Prop(String) readonly value!: string;
  @Prop(String) classPrefix?: string;

  select(item: DataSourceItem) {
    this.$emit("update:value", item.value);
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
.tabs {
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