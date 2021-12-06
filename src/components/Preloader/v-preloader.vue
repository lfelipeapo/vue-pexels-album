<template>
  <transition name="fade">
    <div
      class="preloader"
      v-show="isActive"
      :class="{active: isActive}"
    >
      <self-building-square-spinner
        class="preloader__spinner"
        :animation-duration="900"
        :size="100"
        :color="'#05a081'"
      />
    </div>
  </transition>
</template>

<script>
  import {SelfBuildingSquareSpinner} from "epic-spinners";

  export default {
    name: "v-preloader",
    props: {
      isActive: {
        type: Boolean,
        default: false
      }
    },
    components: {
      SelfBuildingSquareSpinner,
    },
  };
</script>

<style scoped lang="scss">
  .preloader {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: #000000eb;
    z-index: 10000;
    max-width: 100%;
    pointer-events: none;
    opacity: 0;
    transition: opacity 1s;

    &.active {
      opacity: 1;
      pointer-events: all;
    }

    &__spinner {
      position: absolute;
      top: 50% !important;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 1s;
  }

  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }
</style>