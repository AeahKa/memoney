<template>
  <nav>
    <router-link to="/statement" class="item" active-class="selected">
      <icon name="statement" class="statement" />
      <p>明细</p>
    </router-link>

    <router-link to="/add" class="item" active-class="selected">
      <icon name="add" class="add" />
      <p>记账</p>
    </router-link>

    <router-link to="/settings" class="item" active-class="selected">
      <icon name="settings" class="settings" />
      <p>设置</p>
    </router-link>
  </nav>
</template>

<script lang="ts">
export default {
  name: "Nav",
};
</script>

<style lang="scss" scoped>
nav {
  display: flex;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  flex-direction: row;
  font-size: 12px;
  > .item {
    width: 33.333333%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: #707070;
    fill: #707070;
    .icon {
      width: 36px;
      height: 36px;
    }
  }
  > .item.selected {
    color: #e8cba1;
    fill: #e8cba1;
  }
}
</style>
