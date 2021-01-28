<template>
  <div>
    <HomeHeader />
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import HomeHeader from '@/modules/home_page/components/HomeHeader.vue'

@Component({
  components: {
    HomeHeader
  }
})
export default class Home extends Vue {}
</script>
<style lang="scss">
</style>
