<template>
  <div class="tags">
    <div class="newTag">
      <button @click="newTag">新增标签</button>
    </div>
    <ul class="current">
      <li
        v-for="tag in dataSource"
        :key="tag.id"
        @click="toggle(tag)"
        :class="{ selected: selectedTags.indexOf(tag) >= 0 }"
      >
        {{ tag.name }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop, Watch } from "vue-property-decorator";
import tagListModel from "@/models/tagListModel";
@Component
export default class Tags extends Vue {
  @Prop(Array) readonly dataSource: string[] | undefined;
  selectedTags: string[] = [];
  toggle(tag: string) {
    const index = this.selectedTags.indexOf(tag);
    if (index < 0) {
      this.selectedTags.push(tag);
    } else {
      this.selectedTags.splice(index, 1);
    }
    this.$emit("xxx", this.selectedTags);
  }
  newTag() {
    const name = window.prompt("请输入标签名") as string;
    if (name !== "") {
      tagListModel.new(name);
    } else {
      window.alert("标签名不能为空");
    }
  }
  @Watch("selectedTags")
  onValueChanged(value: string[]) {
    this.$emit("update:value", value);
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
.tags {
  background: white;
  font-size: 14px;
  padding: 16px;
  flex-grow: 1;
  display: flex;
  flex-flow: column-reverse;
  > .current {
    display: flex;
    flex-wrap: wrap;
    overflow: auto;
    > li {
      $h: 24px;
      height: $h;
      display: flex;
      align-items: center;
      background: #d9d9d9;
      border-radius: $h/2;
      padding: 0 16px;
      margin-right: 12px;
      margin-top: 8px;
      &.selected {
        background: $col-selected;
      }
    }
  }
  > .newTag {
    margin-top: 16px;
    button {
      background: transparent;
      border: none;
      color: #999;
      border-bottom: 1px solid;
      padding: 0 4px;
    }
  }
}
</style>