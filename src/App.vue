<template>
  <div id="app">
    <vHeader/>
    <main>
      <transition name="fade">
        <keep-alive>
          <router-view/>
        </keep-alive>
      </transition>
    </main>
    <vFooter/>
  </div>
</template>

<script>
  import vHeader from "@/components/Header/v-header";
  import vFooter from "@/components/Footer/v-footer";

  export default {
    name: "app",
    components: {
      vFooter,
      vHeader
    }
  };
</script>

<style lang="scss">
  #app {
    font-family: $mainFont;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  .fade-enter-active,
  .fade-leave-active {
    transition-property: opacity;
    transition-duration: 0.25s;
  }

  .fade-enter-active {
    transition-delay: 0.25s;
  }

  .fade-enter,
  .fade-leave-active {
    opacity: 0;
  }
</style>
