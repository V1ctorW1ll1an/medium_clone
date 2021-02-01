<template>
  <header
    :style="{ backgroundColor: headerBg }"
    class="home__header w-100 d-flex align-center flex-column transition__color"
  >
    <!-- container -->
    <div
      :style="{ backgroundColor: headerBg }"
      class="w-100 border__bottom po-fixed d-flex justify-center align-center transition__color"
    >
      <!-- Header -->
      <v-app-bar
        :color="headerBg"
        flat
        class="default-max-width default-margin p-0 transition__color"
        height="76"
      >
        <Logo />
        <NavBar />
      </v-app-bar>
    </div>

    <!-- container -->
    <div class="w-100 border__bottom d-flex justify-center align-center mt-77">
      <!-- section -->
      <HeaderSection />
    </div>
  </header>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { Getter } from 'vuex-class'
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
export default class HomeHeader extends Vue {
  @Getter('getHeaderBg', { namespace: 'home' }) headerBg?: string
}
</script>

<style lang="scss" >
.header--yellow-bg {
  background-color: #ffc017;
}

.transition__color {
  transition: background-color 300ms linear !important;
}

.home__header {
  .mt-77 {
    margin-top: 7.7rem;
  }

  z-index: 100;
  .po-fixed {
    position: fixed;
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
