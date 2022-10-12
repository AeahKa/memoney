<template>
  <div class="calculator">
    <div class="display">100</div>
    <div class="keyboard clearfix">
      <button>7</button><button>8</button><button>9</button><button>÷</button
      ><button>Del</button> <button>4</button><button>5</button
      ><button>6</button><button>×</button><button>C</button><button>1</button
      ><button>2</button><button>3</button><button>-</button
      ><button class="ok">OK</button><button>%</button><button>0</button
      ><button>.</button><button>+</button>
    </div>
  </div>
</template>

<script lang="ts">
export default {};
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
</style>