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
