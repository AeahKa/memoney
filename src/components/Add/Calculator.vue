<template>
  <div class="calculator">
    <div class="display">
      <span class="sign">{{ sign }}</span
      >{{ output }}
    </div>
    <div class="keyboard clearfix">
      <button @click="input">7</button><button @click="input">8</button
      ><button @click="input">9</button><button @click="calculate">÷</button
      ><button @click="backSpace">Del</button> <button @click="input">4</button
      ><button @click="input">5</button><button @click="input">6</button
      ><button @click="calculate">×</button><button @click="clear">C</button
      ><button @click="input">1</button><button @click="input">2</button
      ><button @click="input">3</button><button @click="calculate">-</button
      ><button class="save" @click="save">保存</button
      ><button @click="input">.</button><button @click="input">0</button
      ><button @click="equal">=</button><button @click="calculate">+</button>
    </div>
  </div>
</template>

<script lang="ts">
import copy from "@/lib/copy";
import Vue from "vue";
import { Component } from "vue-property-decorator";
@Component
export default class Calculator extends Vue {
  output = "0";
  sign = "";
  numberCache = 0;

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
        this.output += input;
      }
      return;
    }
    if (this.output.indexOf(".") >= 0 && input === ".") {
      return;
    }
    this.output += input;
  }

  calculate(event: MouseEvent) {
    const button = event.target as HTMLButtonElement;
    const input = button.textContent!;
    const number = parseFloat(copy(this.output));
    if (this.numberCache != 0) {
      this.numberCache = this.cal(this.sign, this.numberCache, number);
    } else {
      this.numberCache = number;
    }
    this.output = "0";
    this.sign = input;
  }
  equal() {
    if (this.output === "0" && this.numberCache != 0) {
      this.output = this.numberCache.toString();
      this.sign = "";
      return;
    } else if (this.sign === "") {
      this.sign = "";
      return;
    }
    const number = parseFloat(copy(this.output));
    this.output = this.cal(this.sign, this.numberCache, number).toString();
    this.numberCache = 0;
    this.sign = "";
  }
  cal(key: string, a: number, b: number) {
    if (key === "+") {
      a = a + b;
    } else if (key === "-") {
      a = a - b;
    } else if (key === "×") {
      a = a * b;
    } else if (key === "÷") {
      a = a / b;
    }
    return a;
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
    if (this.sign === "" && this.output != "0") {
      this.$emit("update:value", this.output);
      this.$emit("submit", this.output);
      this.output = "0";
    } else {
      alert("金额为空");
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";

.calculator {
  width: 100vw;
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
    > .sign {
      color: #d9d9d9;
      margin-right: 10px;
    }
  }
  button {
    @extend %clearfix;
    width: 20vw;
    height: 18vw;
    float: left;
    color: #515151;
    background: rgba(51, 51, 51, 0.034);
    border: none;
    font-size: 22px;
    box-shadow: inset 0 0 2px fade-out($color: #000000, $amount: 0.9);
    &.save {
      height: 36vw;
      float: right;
    }
  }
}
</style>