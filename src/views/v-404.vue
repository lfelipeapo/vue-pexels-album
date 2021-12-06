<template>
  <div class="warning">
    <h1 class="warning__title">Oops!</h1>
    <p class="warning__text">
      It looks like you've wandered into a nonexistent page
    </p>
    <router-link class="warning__redirect" to="/"
    >Back to Home Page
    </router-link
    >
  </div>
</template>

<script>
  export default {
    name: "v-404"
  };
</script>

<style lang="scss">
  .warning {
    text-align: center;
  }

  .warning__title {
    font-size: 12vmin;
    margin-bottom: 4vmax;
  }

  .warning__text {
    font-size: 3vmin;
    color: #a5a5a5;
    margin-bottom: 4vmax;
  }

  .warning__redirect {
    position: relative;
    display: inline-block;
    text-decoration: none;
    transition: color 0.3s linear;
    color: $accentColor;

    &::after {
      @extend %underlineLink;
      background-color: $accentColor;
    }

    &:hover {
      &::after {
        opacity: 1;
        width: 100%;
      }
    }
  }
</style>