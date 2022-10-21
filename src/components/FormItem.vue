<template>
  <div>
    <label class="formItem">
      <span class="name">{{ this.fieldName }}</span>
      <input
        type="text"
        v-model="value"
        :content="content"
        :placeholder="placeHolder"
      />
    </label>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Watch, Prop } from "vue-property-decorator";

@Component
export default class FormItem extends Vue {
  value = this.content;
  @Prop({ required: false }) fieldName?: string | undefined;
  @Prop({ required: false }) placeHolder?: string | undefined;
  @Prop({ required: false }) content?: string;
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
.formItem {
  display: flex;
  flex-flow: wrap;
  padding: 0 16px;
  font-size: 16px;
  display: flex;
  align-items: center;
  > input {
    display: flex;
    flex-grow: 1;
    background: transparent;
    border: none;
    color: #333;
    padding: 16px 0;
  }
}
</style>