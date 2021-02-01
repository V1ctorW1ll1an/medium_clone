<template>
  <div>
    <HomeHeader />
    <HomeMain />
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import HomeHeader from '@/modules/home_page/components/HomeHeader.vue'
import HomeMain from '@/modules/home_page/components/HomeMain.vue'

@Component({
  components: {
    HomeHeader,
    HomeMain
  }
})
export default class Home extends Vue {}
</script>
<style lang="scss">
</style>
