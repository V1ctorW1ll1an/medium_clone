<template>
  <header
    :style="{ backgroundColor: headerBg }"
    class="homeHeader w-100 d-flex align-center flex-column bgTransition"
  >
    <!-- container -->
    <div
      :style="{ backgroundColor: headerBg }"
      class="w-100 homeHeader__borderBottom homeHeader--fixed d-flex justify-center align-center bgTransition"
    >
      <!-- Header -->
      <v-app-bar
        :color="headerBg"
        flat
        class="default-max-width default-margin p-0 bgTransition"
        height="76"
      >
        <Logo />
        <NavBar />
      </v-app-bar>
    </div>

    <!-- container -->
    <div
      class="w-100 homeHeader__borderBottom d-flex justify-center align-center homeHeader--mt77"
    >
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
.bgTransition {
  transition: background-color 300ms linear !important;
}

.homeHeader {
  $blockName: #{&};

  #{$blockName}--mt77 {
    margin-top: 7.7rem;
  }

  #{$blockName}--fixed {
    position: fixed;
  }

  #{$blockName}__borderBottom {
    border-bottom: 0.1rem solid rgb(41, 41, 41);
  }

  .v-toolbar__content {
    padding: 0 !important;
    display: flex !important;
    justify-content: space-between;
  }
}
</style>
