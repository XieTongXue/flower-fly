<template>
  <div id="index" class="index">
    <v-header></v-header>
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import VHeader from './components/Header'
export default {
  components: {
    VHeader
  }
}
</script>

<style lang="scss">
  .index {
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, .1);
    .example {
      width: 100%;
      height: 100%;
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
  }
</style>
