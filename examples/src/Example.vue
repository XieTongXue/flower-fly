<template>
  <div class="example example-one">
    <div class="content">
      <h3 class="title">ExampleOne</h3>
      <p class="des">new FlowerFly(yourFlowerCount, yourFlowerUrl)</p>
    </div>
  </div>
</template>

<script>
import FlowerFly from '@source/index'
export default {
  created () {
    /* eslint-disable no-new */
    new FlowerFly(13, 'https://events.gm99.com/shhd/img/flower.png', 'example-one')
  }
}
</script>

<style lang="scss">
  .example {
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, .1);
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    .title {
      font-size: 36px;
    }
    .des {
      font-size: 24px;
    }
  }
  .fade-enter-active,
  .fade-leave-active {
      transition: opacity .5s;
  }

  .fade-enter,
  .fade-leave-to
  {
    opacity: 0
  }
</style>
