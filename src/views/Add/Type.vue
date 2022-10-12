<template>
  <div>
    <ul class="type">
      <li class="selected">支出</li>
      <li>收入</li>
    </ul>
  </div>
</template>

<script lang="ts">
export default {};
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
.type {
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