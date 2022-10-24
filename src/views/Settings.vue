<template>
  <div>
    <Layout>
      <div class="tags">
        <router-link
          class="tag"
          v-for="tag in tags"
          :key="tag.id"
          :to="`/settings/edit/${tag.id}`"
        >
          <span>{{ tag.name }}</span>
          <icon name="right-arrow" />
        </router-link>
      </div>
      <div class="button-wrapper">
        <Button class="newTag" @click.native="newTag">新建标签</Button>
      </div>
    </Layout>
  </div>
</template>


<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import Button from "../components/Button.vue";
import mixins from "vue-class-component";
import TagHelper from "@/mixins/TagHelper";

@Component({
  components: { Button },
  computed: {
    tags() {
      return this.$store.state.tagList;
    },
  },
})
export default class Settings extends mixins(TagHelper) {
  name = "Settings";
  created() {
    this.$store.commit("fetchTags");
  }
}
</script>


<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
.tags {
  background: rgb(248, 248, 248);
  font-size: 16px;
  padding-left: 16px;

  > .tag {
    min-height: 44px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #e6e6e6;
    > svg {
      fill: $col-icon;
      height: 20px;
      width: 20px;
      margin-right: 16px;
    }
  }
}
.button-wrapper {
  text-align: center;
  padding: 16px;
}
</style>
