<template>
  <div class="homeNavBar">
    <nav class="homeNavBar__item">
      <ul class="d-flex flex-row justify-center align-center">
        <li class="homeNavBar__item--hide">
          <a href="#"> Our Story </a>
        </li>
        <li class="homeNavBar__item--hide">
          <a href="#"> Membership </a>
        </li>
        <li class="homeNavBar__item--hide">
          <a href="#"> Write </a>
        </li>
        <li class="homeNavBar__item--xm">
          <a href="#"> Sign In </a>
        </li>
        <li>
          <v-btn :style="{ backgroundColor: headerBtnBg }" text color="#fff">
            Get started
          </v-btn>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { Getter } from 'vuex-class'

@Component
export default class HomeNavBar extends Vue {
  @Getter('getHeaderBtnBg', { namespace: 'home' }) headerBtnBg?: string
}
</script>

<style lang="scss">
.homeNavBar {
  $blockName: #{&};
  #{$blockName}__item {
    ul {
      list-style-type: none;
      margin: 0;
      padding: 0;

      li {
        padding: 1.45rem;

        #{$blockName}__item--hide {
          @media only screen and (max-width: 800px) {
            display: none;
          }
        }

        #{$blockName}__item--xm {
          @media only screen and (max-width: 551px) {
            display: none;
          }
        }

        a {
          text-decoration: none;
          color: #554518;
          font-size: 1.4rem;
        }
      }
    }

    .v-btn {
      height: 3.8rem !important;
      width: 10.5rem !important;
      font-size: 1.4rem;
      text-transform: capitalize;
      line-height: 2rem;

      .v-btn__content {
        font-weight: 400;
        letter-spacing: normal !important;
      }
    }
  }
}
</style>
