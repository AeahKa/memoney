<template>
  <div class="calculator">
    <div class="display">{{ output }}</div>
    <div class="keyboard clearfix">
      <button @click="input">7</button><button @click="input">8</button
      ><button @click="input">9</button><button>÷</button
      ><button @click="backSpace">Del</button> <button @click="input">4</button
      ><button @click="input">5</button><button @click="input">6</button
      ><button>×</button><button @click="clear">C</button
      ><button @click="input">1</button><button @click="input">2</button
      ><button @click="input">3</button><button>-</button
      ><button class="save" @click="save">完成</button><button>%</button
      ><button @click="input">0</button><button @click="input">.</button
      ><button>+</button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
@Component
export default class Calculator extends Vue {
  output = "0";
  input(event: MouseEvent) {
    const button = event.target as HTMLButtonElement;
    const input = button.textContent!;
    if (this.output.length === 16) {
      return;
    }
    if (this.output === "0") {
      if (input !== ".") {
        this.output = input;
      } else {
        this.output += button.textContent;
      }
      return;
    }
    if (this.output.indexOf(".") >= 0 && input === ".") {
      return;
    }
    this.output += button.textContent;
  }
  backSpace() {
    if (this.output.length === 1) {
      this.output = "0";
    } else {
      this.output = this.output.slice(0, -1);
    }
  }
  clear() {
    this.output = "0";
  }
  save() {
    this.$emit("update:value", this.output);
    this.$emit("submit", this.output);
    this.output = "0";
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";

.calculator {
  display: flex;
  flex-flow: column;
  align-items: center;
  > .display {
    width: 100%;
    padding: 9px 16px;
    font-size: 36px;
    text-align: right;
    font-family: Consolas, monospace;
    @extend %innerShadow;
  }
  > .keyboard {
    button {
      @extend %clearfix;
      &.save {
        height: 36vw;
        float: right;
      }
      width: 20vw;
      height: 18vw;
      float: left;
      color: #515151;
      background: rgba(51, 51, 51, 0.034);
      border: none;
      font-size: 22px;
      box-shadow: inset 0 0 2px fade-out($color: #000000, $amount: 0.9);
    }
  }
}
</style>