<template>
  <section
    class="homeTopicSection d-flex flex-column justify-center align-center"
  >
    <div class="homeTopicSection__container w-100">
      <div class="homeTopicSection__custom--padding">
        <div class="homeTopicSection__header d-flex flex-row align-center">
          <span>
            <FontAwesomeIcon :style="iconStyle" :icon="['fas', 'chart-line']" />
          </span>
          <span>
            <p class="m-0 homeTopicSection__paragraph--custom">
              Trending on Medium
            </p>
          </span>
        </div>

        <div class="homeTopicSection__main w-100">
          <div
            class="homeTopicSection__wrapper d-flex flex-wrap align-start flex-row"
          >
            <!-- FLEX ITENS -->
            <div class="item flex-grow-0 w-100">item1</div>
            <div class="item flex-grow-0 w-100">item2</div>
            <div class="item flex-grow-0 w-100">item3</div>
            <div class="item flex-grow-0 w-100">item4</div>
            <div class="item flex-grow-0 w-100">item5</div>
            <div class="item flex-grow-0 w-100">item6</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class HomeTopicSection extends Vue {
  // computed method
  get iconStyle() {
    return {
      height: '20px',
      width: '20px',
      fontWeight: 400,
      marginRight: '10px'
    }
  }
}
</script>

<style lang="scss">
.homeTopicSection {
  $blockName: #{&};

  margin-top: 1px solid rgb(12, 12, 12);

  #{$blockName}__container {
    max-width: 119.2rem;
    min-width: 0;
    margin: 0 6.4rem;

    #{$blockName}__custom--padding {
      padding-top: 4rem;
      padding-bottom: 1.6rem;

      #{$blockName}__header {
        margin-bottom: 1.6rem;

        #{$blockName}__paragraph--custom {
          font-size: 1.4rem;
          text-transform: uppercase;
          font-weight: 700;
        }
      }

      #{$blockName}__main {
        #{$blockName}__wrapper {
          margin: 0 -1.6rem;
          width: calc(100% + 32px);

          .item {
            max-width: 33.333333%;
            flex-basis: 33.333333%;
            padding: 0 1.6rem;
            height: 10.5rem;
            background: rgb(110, 158, 110);
            border: 1px solid red;
          }
        }
      }
    }
  }
}
</style>
