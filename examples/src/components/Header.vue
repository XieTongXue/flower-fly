<template>
  <div class="header">
    <button class="btn" @click="showExample('')">ExampleOne</button>
    <button class="btn" @click="showExample('ExampleTwo')">ExampleTwo</button>
  </div>
</template>

<script>
export default {
  methods: {
    showExample (example) {
      example === 'ExampleTwo' && alert('Is coming soon~')
    }
  }
}
</script>

<style lang="scss" scoped>
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
        width: 0;
        height: 100%;
        top: 0;
        left: 0;
        background: black;
        transition: width .3s ease-in-out;
        z-index: -1;
      }
      &:hover {
        color: #fff;
        &::after {
          width: 100%;
        }
      }
    }
  }
</style>
