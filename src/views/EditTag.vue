<template>
  <div>
    <layout class="layout">
      <div class="head">
        <icon name="left-arrow" />
        <span class="title">编辑标签</span>
      </div>
      <editing class="editing" fieldName="标签名：" :content="this.tag.name" />
      <div class="button-wrapper">
        <Button @click="remove">删除标签</Button>
      </div>
    </layout>
  </div>
</template>

<script lang="ts">
import tagListModel from "@/models/tagListModel";
import Editing from "@/components/FormItem.vue";
import Button from "../components/Button.vue";

import Vue from "vue";
import { Component } from "vue-property-decorator";
@Component({ components: { Editing, Button } })
export default class EditTag extends Vue {
  tag?: { id: string; name: string } = undefined;
  created() {
    const id = this.$route.params.id;
    tagListModel.fetch();
    const tags = tagListModel.data;
    const tag = tags.filter((t) => t.id === id)[0];
    if (tag) {
      this.tag = tag;
    } else {
      this.$router.replace("/404");
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
.layout-content {
  display: flex;
  flex-flow: column;
}
.head {
  background: white;
  font-size: 16px;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  text-align: center;
  border-bottom: 1px solid #e6e6e6;
  > svg {
    position: absolute;
    fill: $col-icon;
    height: 20px;
    width: 20px;
  }
  > .title {
    width: 100vw;
    text-align: center;
  }
}
.editing {
  margin-top: 8px;
  background: white;
}
.button-wrapper {
  text-align: center;
  padding: 16px;
}
</style>