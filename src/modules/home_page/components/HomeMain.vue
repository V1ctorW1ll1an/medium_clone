<template>
  <main class="home__main">hello</main>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { Mutation } from 'vuex-class'
@Component
export default class HomeMain extends Vue {
  @Mutation('setHeaderBg', { namespace: 'home' }) setHeaderBg: any
  @Mutation('setHeaderBtnBg', { namespace: 'home' }) headerBtnBg: any

  created() {
    window.addEventListener('scroll', this.changeBg)
  }

  destroyed() {
    window.removeEventListener('scroll', this.changeBg)
  }

  changeBg() {
    const distance = this.getPosition()
    if (distance > 60) {
      this.setHeaderBg('#ffc017')
      this.headerBtnBg('#000000')
    } else {
      this.setHeaderBg('#ffffff')
      this.headerBtnBg('#1A8917')
    }
  }

  getPosition() {
    const element = document.querySelector('.home__main') as HTMLElement

    const distance = element.getBoundingClientRect()

    return distance.top
  }
}
</script>

<style lang="scss">
.home__main {
  height: 1500px;
}
</style>
