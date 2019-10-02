<template>
  <div class="example">
    <div class="header">
      <button class="btn" @click="clear">clear</button>
      <button class="btn" @click="reStart">reStart</button>
    </div>
    <div class="content">
      <h3 class="title">Init</h3>
      <p class="des">const flower = new FlowerFly(yourFlowerCount, yourFlowerUrl)</p>
      <h3 class="title">API</h3>
      <p class="des">clear  ->  flower.clear()</p>
      <p class="des">reStart  ->  flower.reStart()</p>
    </div>
  </div>
</template>

<script>
import FlowerFly from '@source/index'
export default {
  data () {
    return {
      flower: null
    }
  },
  created () {
    this.flower = new FlowerFly(13, 'https://events.gm99.com/shhd/img/flower.png')
  },
  methods: {
    clear () {
      this.flower.clear()
    },
    reStart () {
      this.flower.reStart()
    }
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
    .title {
      font-size: 24px;
    }
    .des {
      font-size: 18px;
    }
  }
  .header {
    position: fixed;
    top: 0;
    left: 0;
    padding: 4px 10px;
    .btn {
      position: relative;
      width: 150px;
      height: 40px;
      line-height: 40px;
      font-size: 16px;
      text-align: center;
      cursor: pointer;
      transition: color .3s ease-in-out;
      border: 1px solid #000;
      outline: none;
      background: transparent;
      margin-left: 10px;
      &:nth-child(1) {
        margin-left: 0;
      }
      &::after {
        position: absolute;
        display: block;
        content: '';
        width: 100%;
        height: 0;
        top: 0;
        left: 0;
        background: black;
        transition: height .3s ease-in-out;
        z-index: -1;
      }
      &:hover {
        color: #fff;
        &::after {
          height: 100%;
        }
      }
    }
  }
</style>
