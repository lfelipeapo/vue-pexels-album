<template>
  <div class="gallery__footer">
    <button
      type="button"
      class="gallery__btn"
      aria-label="load more"
      @click="loadMore"
    >
      Carregue mais
    </button>
  </div>
</template>

<script>
  export default {
    name: "v-load-more",
    props: {
      pageIndex: {
        type: Number,
        default: 1
      }
    },
    methods: {
      loadMore() {
        this.$emit("loadMore", this.pageIndex);
      }
    }
  };
</script>

<style scoped lang="scss">
  .gallery__footer {
    display: flex;
    justify-content: center;
  }

  .gallery__btn {
    padding: 1.2vmax 1.3vmax;
    text-transform: uppercase;
    background-color: $secondColor;
    border-radius: 20px;
    color: #ffffff;
    font-size: 1.7vmax;
    font-weight: 900;
    letter-spacing: 2px;
    transition: background-color 0.4s ease;

    &:hover,
    &:focus {
      background-color: $accentColor;
    }
  }
</style>