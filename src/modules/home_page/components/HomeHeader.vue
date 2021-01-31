<template>
  <header
    class="home__header header--yellow-bg w-100 d-flex justify-center align-center flex-column"
  >
    <!-- container -->
    <div class="w-100 border__bottom d-flex justify-center align-center">
      <!-- Header -->
      <v-app-bar
        color="transparent"
        flat
        class="default-max-width default-margin p-0"
        height="76"
      >
        <Logo />
        <NavBar />
      </v-app-bar>
    </div>

    <!-- container -->
    <div class="w-100 border__bottom d-flex justify-center align-center">
      <!-- section -->
      <HeaderSection />
    </div>
  </header>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Logo from '@/shared/Logo.vue'
import NavBar from '@/modules/home_page/components/HomeNavBar.vue'
import HeaderSection from '@/modules/home_page/components/HeaderSection.vue'

@Component({
  components: {
    Logo,
    NavBar,
    HeaderSection
  }
})
export default class HomeHeader extends Vue {}
</script>

<style lang="scss" >
.home__header {
  &.header--yellow-bg {
    background-color: #ffc017;
  }

  .border__bottom {
    border-bottom: 0.1rem solid rgb(41, 41, 41);
  }

  .v-toolbar__content {
    padding: 0 !important;
    display: flex !important;
    justify-content: space-between;
  }
}
</style>
