<template>
  <div>
    <layout class="layout">
      <div class="head">
        <icon name="left-arrow" @click.native="goBack" />
        <span class="title">编辑标签</span>
      </div>
      <editing
        class="editing"
        fieldName="标签名："
        :content="tag.name"
        @update:value="update"
        placeHolder="请输入标签名"
      />
      <div class="button-wrapper">
        <Button @click="remove">删除标签</Button>
      </div>
    </layout>
  </div>
</template>

<script lang="ts">
import Editing from "@/components/FormItem.vue";
import Button from "../components/Button.vue";
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component({
  components: { Editing, Button },
})
export default class EditTag extends Vue {
  get tag() {
    return this.$store.state.currentTag;
  }
  created() {
    this.$store.commit("getCurrentTag", this.$route.params.id);
    if (!this.tag) {
      this.$router.replace("/404");
    }
  }
  update(name: string) {
    if (this.tag) {
      // TODO
      // store.updateTag(this.tag.id, name);
    }
  }
  remove() {
    if (this.tag) {
      // TODO
      return;
      // if (store.removeTag(this.tag.id)) {
      //   alert("已删除标签");
      //   this.$router.back();
      // }
    }
  }
  goBack() {
    this.$router.back();
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