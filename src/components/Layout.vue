<template>
  <div class="layout-wrapper">
    <div class="content" :class="classPrefix && `${classPrefix}-content`">
      <slot />
    </div>
    <Nav />
  </div>
</template>

<script lang='ts'>
export default {
  name: "Layout",
  props: ["classPrefix"],
};
</script>


<style lang="scss" scoped>
.layout-wrapper {
  // border: 1px red solid;
  display: flex;
  flex-direction: column;
  height: 100vh;
}
.content {
  // border: 1px red solid;
  overflow: auto;
  flex-grow: 1;
}
</style>