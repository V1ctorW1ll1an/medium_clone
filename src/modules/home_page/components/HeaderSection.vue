<template>
  <section class="headerSection w-100 default-max-width p-0">
    <div class="default-margin headerSection__container">
      <div class="headerSection__title h-100 d-flex flex-column">
        <div>
          <h2>Where good ideas find you</h2>
        </div>
        <div class="headerSection__title--space"></div>
        <div class="headerSection__subtitle">
          <h3>
            <span class="headerSection__subtitle--custom">
              Read and share new perspectives on just about any topic.
              Everyone’s welcome.
            </span>
            <span class="headerSection__subtitle--custom">
              <a class="headerSection__link" href="#" rel="noopener"
                >Learn more.</a
              >
            </span>
          </h3>
        </div>
        <div>
          <button class="headerSection__customBtn">Get Started</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class extends Vue {}
</script>

<style lang="scss">
.headerSection {
  $blockName: #{&};

  background-image: url('https://miro.medium.com/max/770/1*qcAZgT4Sk37MPSTGBH2KUw.png');
  background-position: calc(100% - 32px) calc(100% - 59px);
  background-repeat: no-repeat;
  background-size: 385px 341px;
  box-sizing: border-box;
  color: rgba(0, 0, 0, 0.8);

  @media only screen and (max-width: 1080px) {
    background-position: calc(100% - 80px) calc(100% - 59px);
  }
  @media only screen and (max-width: 904px) {
    background-position: calc(100% - 48px) calc(100% - 59px);
  }
  @media only screen and (max-width: 727px) {
    background-position: calc(100% + 64px) calc(100% - 28px);
  }
  @media only screen and (max-width: 552px) {
    background-position: calc(100% + 126px) calc(100% - 28px);
  }

  #{$blockName}__container {
    height: 40rem;

    #{$blockName}__title {
      width: 55rem;
      padding: 3.3rem 0 5.1rem 0;

      @media only screen and (max-width: 905px) {
        width: 50rem;
      }
      @media only screen and (max-width: 552px) {
        width: 100%;
      }

      h2 {
        letter-spacing: -0.05em !important;
        line-height: 7.4rem !important;
        font-size: 6.5rem !important;
        font-weight: 400;
        color: rgb(8, 8, 8);

        @media only screen and (max-width: 550px) {
          font-size: 4.8rem !important;
        }
      }

      #{$blockName}__title--space {
        flex: 1 1 0%;
      }

      #{$blockName}__customBtn {
        font-size: 1.6rem;
        text-transform: capitalize;
        width: 12.8rem;
        line-height: 2.4rem;
        font-weight: 400;
        height: 4.2rem;
        border: 1px solid rgb(12, 12, 12);
        outline: none;
        border-radius: 0.5rem;
        color: rgb(12, 12, 12);
        user-select: none;
      }

      #{$blockName}__subtitle {
        margin-bottom: 2.5rem;

        #{$blockName}__subtitle--custom {
          font-size: 1.8rem;
          font-weight: 400;
          color: rgb(41, 41, 41);
          line-height: 1.4rem;

          #{$blockName}__link {
            border-bottom: 1px solid rgb(41, 41, 41);
            font-size: 1.8rem;
            text-decoration: none;
            color: rgb(41, 41, 41);
          }
        }
      }
    }
  }
}
</style>
