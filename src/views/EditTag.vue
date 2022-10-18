<template>
  <div>
    <layout class="layout">
      <div class="head">
        <icon name="left-arrow" />
        <span>编辑标签</span>
      </div>

      <editing fieldName="标签名：" content="this.tag.name" />

      <div>
        <button>删除标签</button>
      </div>
    </layout>
  </div>
</template>

<script lang="ts">
import tagListModel from "@/models/tagListModel";
import Editing from "@/components/FormItem.vue";
import Vue from "vue";
import { Component } from "vue-property-decorator";
@Component({ components: { Editing } })
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
.layout-content {
  display: flex;
  flex-flow: column;
}
.head {
  background: rgb(248, 248, 248);
  font-size: 16px;
  min-height: 44px;
  display: flex;
  align-items: center;
  text-align: center;
  border-bottom: 1px solid #e6e6e6;
  > svg {
    margin-left: 16px;
    border: $bor1;
    fill: $col-icon;
    height: 20px;
    width: 20px;
  }
  > span {
    border: $bor1;
    position: absolute;
    width: 100vw;
    text-align: center;
  }
}
</style>