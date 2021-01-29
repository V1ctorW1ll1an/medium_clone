<template>
  <div class="nav-bar__container">
    <nav class="nav-bar__items">
      <ul class="d-flex
      flex-row
      justify-center
      align-center">
        <li>
          <a href="#">
            Our Story
          </a>
        </li>
        <li>
          <a href="#">
            Membership
          </a>
        </li>
        <li>
          <a href="#">
            Write
          </a>
        </li>
        <li>
          <a href="#">
            Sign In
          </a>
        </li>
        <li>
          <v-btn
            text
            color="#fff"
          >
            Get started
          </v-btn>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class HomeNavBar extends Vue {}
</script>

<style lang="scss">
.nav-bar__container {
  .nav-bar__items {
    ul {
      list-style-type: none;
      margin: 0;
      padding: 0;

      li {
        padding: 1.45rem;
        a {
          text-decoration: none;
          color: #554518;
          font-size: 1.4rem;
        }
      }
    }

    .v-btn {
      background-color: #191919;
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
