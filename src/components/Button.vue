<template>
  <button class="button" @click="$emit('click', $event)"><slot /></button>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
@Component
export default class Tags extends Vue {}
</script>


<style lang="scss">
@import "~@/assets/style/helper.scss";
button {
  background: #767676;
  color: #e6e6e6;
  border: none;
  border-radius: 4px;
  padding: 0 16px;
  height: 40px;
}
</style>