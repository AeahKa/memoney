<template>
  <div>
    <Layout>
      <Tabs
        :dataSource="typeList"
        classPrefix="types"
        class="types"
        :value.sync="type"
      />
      <Tabs
        :dataSource="cycleList"
        classPrefix="cycle"
        class="cycle"
        :value.sync="cycle"
      />
    </Layout>
  </div>
</template>



<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import Tabs from "../components/Tabs.vue";
import typeList from "../constants/typeList";
import cycleList from "../constants/cycleList";
@Component({
  components: { Tabs },
})
export default class Statement extends Vue {
  typeList = typeList;
  type = "-";
  cycleList = cycleList;
  cycle = "daily";
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";

.types::v-deep .types-tabs-item {
  background: white;
  &.selected {
    background: #c4c4c4;
    &::after {
      display: none;
    }
  }
}
.cycle::v-deep .cycle-tabs-item {
  font-size: 16px;
  &.selected {
    background: #c4c4c4;
  }
}
</style>