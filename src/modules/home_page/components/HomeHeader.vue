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
        class="default-max-width p-0"
        height="76"
      >
        <Logo />
        <NavBar />
      </v-app-bar>
    </div>

    <!-- container -->
    <div class="w-100 border__bottom d-flex justify-center align-center">
      <!-- section -->
      <section class="header__section w-100 default-max-width p-0">
        <div class="title__container h-100 d-flex flex-column">
          <div class="custom__title">
            <h2>Where good ideas find you</h2>
          </div>
          <div class="title__space"></div>
          <div class="custom__subtitle__container">
            <h3>
              <span class="custom__subtitle">
                Read and share new perspectives on just about any topic.
                Everyone’s welcome.
              </span>
              <span class="custom__subtitle">
                <a class="custom__subtitle__link" href="#" rel="noopener"
                  >Learn more.</a
                >
              </span>
            </h3>
          </div>
          <div class="button__container">
            <v-btn class="ma-2 custom__button" outlined color="rgb(0, 0, 0)">
              Get Started
            </v-btn>
          </div>
        </div>
      </section>
    </div>
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
  &.header--yellow-bg {
    background-color: #ffc017;
  }

  .border__bottom {
    border-bottom: 0.1rem solid rgb(41, 41, 41);
  }

  .header__section {
    background-image: url('https://miro.medium.com/max/770/1*qcAZgT4Sk37MPSTGBH2KUw.png');
    background-position: calc(100% - 32px) calc(100% - 59px);
    background-position-x: calc(100% - 32px);
    background-position-y: calc(100% - 59px);
    background-repeat: no-repeat;
    background-size: 385px 341px;
    box-sizing: border-box;
    color: rgba(0, 0, 0, 0.8);
    height: 40rem;

    .title__container {
      width: 55rem;
      padding: 3.3rem 0 5.1rem 0;

      h2 {
        letter-spacing: -0.05em !important;
        line-height: 7.4rem !important;
        font-size: 6.5rem !important;
        font-weight: 400;
        color: rgb(8, 8, 8);
      }

      .title__space {
        flex: 1 1 0%;
      }

      .custom__button {
        font-size: 1.6rem;
        text-transform: capitalize;
        width: 12.8rem;
        line-height: 2.4rem;
        font-weight: 400;
        height: 4.2rem;
      }

      .custom__subtitle__container {
        margin-bottom: 2.5rem;

        .custom__subtitle {
          font-size: 1.8rem;
          font-weight: 400;
          color: rgb(41, 41, 41);
          line-height: 1.4rem;

          .custom__subtitle__link {
            border-bottom: 1px solid rgb(41, 41, 41);
            font-size: 1.8rem;
            text-decoration: none;
            color: rgb(41, 41, 41);
          }
        }
      }
    }
  }

  .v-toolbar__content {
    padding: 0 !important;
    display: flex !important;
    justify-content: space-between;
  }
}
</style>
