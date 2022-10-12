<template>
  <div>
    <Layout classPrefix="layout">
      <div class="calculator">
        <div class="display">100</div>
        <div class="keyboard clearfix">
          <button>7</button><button>8</button><button>9</button
          ><button>÷</button><button>Del</button> <button>4</button
          ><button>5</button><button>6</button><button>×</button
          ><button>C</button><button>1</button><button>2</button
          ><button>3</button><button>-</button><button class="ok">OK</button
          ><button>%</button><button>0</button><button>.</button
          ><button>+</button>
        </div>
      </div>
      <div>
        <ul class="type">
          <li class="selected">支出</li>
          <li>收入</li>
        </ul>
      </div>
      <div>
        <label class="remark">
          <input type="text" placeholder="备注" />
        </label>
      </div>
      <div class="tags">
        <div class="newTag">
          <button>新增标签</button>
        </div>
        <ul class="current">
          <li>衣</li>
          <li>食</li>
          <li>住</li>
          <li>行</li>
        </ul>
      </div>
    </Layout>
  </div>
</template>

<script lang="ts">
export default {
  name: "Name",
};
</script>

<style lang="scss">
.layout-content {
  display: flex;
  flex-flow: column-reverse;
}
</style>

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
      &.ok {
        height: 36vw;
        float: right;
      }
      width: 20vw;
      height: 18vw;
      float: left;
      background: rgba(51, 51, 51, 0.034);
      border: none;
      font-size: 22px;
      box-shadow: inset 0 0 2px fade-out($color: #000000, $amount: 0.9);
    }
  }
}

.tags {
  font-size: 14px;
  padding: 16px;
  flex-grow: 1;
  display: flex;
  flex-flow: column-reverse;
  > .current {
    display: flex;
    flex-wrap: wrap;
    overflow: auto;
    > li {
      $h: 24px;
      height: $h;
      display: flex;
      align-items: center;
      background: #d9d9d9;
      border-radius: $h/2;
      padding: 0 20px;
      margin-right: 12px;
      margin-top: 4px;
    }
  }
  > .newTag {
    margin-top: 16px;
    button {
      background: transparent;
      border: none;
      color: #999;
      border-bottom: 1px solid;
      padding: 0 4px;
    }
  }
}

.remark {
  background: #f5f5f5;
  display: block;
  padding: 0 16px;
  > input {
    background: transparent;
    border: none;
    color: #333;
    padding: 16px 0;
    width: 100%;
  }
}

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
