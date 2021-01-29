<template>
  <header class="home__header
   header--background
   w-100
   d-flex
   justify-center
   align-center">
    <v-app-bar
      color="transparent"
      flat
      class="default-max-width
       p-0"
      height="76"
    >
      <Logo />
      <NavBar />
    </v-app-bar>
  </header>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Logo from '@/shared/Logo.vue'
import NavBar from '@/modules/home_page/components/HomeNavBar.vue'

@Component({
  components: {
    Logo,
    NavBar
  }
})
export default class HomeHeader extends Vue {}
</script>

<style lang="scss" >
.home__header {
  &.header--background {
    background-color: #ffc017;
  }

  .v-toolbar__content {
    padding: 0 !important;
    display: flex !important;
    justify-content: space-between;
  }
}
</style>
