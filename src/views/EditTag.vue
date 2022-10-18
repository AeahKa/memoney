<template>
  <layout>editTag</layout>
</template>

<script lang="ts">
import tagListModel from "@/models/tagListModel";
import Vue from "vue";
import { Component } from "vue-property-decorator";
@Component
export default class Tags extends Vue {
  created() {
    const id = this.$route.params.id;
    tagListModel.fetch();
    const tags = tagListModel.data;
    const tag = tags.filter((t) => t.id === id)[0];
    if (tag) {
      console.log(tag);
    } else {
      this.$router.replace("/404");
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
.tags {
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
      margin-top: 4px;
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