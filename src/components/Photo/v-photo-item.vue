<template>
  <li class="gallery__item">
    <a
      class="gallery__link"
      target="_blank"
      :href="photoItem.url"
    >
      <img
        :src="photoItem.src.large"
        :alt="setAltForImage(photoItem.url)"
        class="gallery__img"
      >
      <h3 class="gallery__author">{{photoItem.photographer}}</h3>
    </a>
  </li>
</template>

<script>
  export default {
    name: "v-photo-item",
    props: {
      photoItem: {
        type: Object,
        default: {}
      }
    },
    methods: {
      setAltForImage(url) {
        const listing = url.split('/').filter(item => item);
        const descOfImage = listing.splice(-1).join('');
        return descOfImage.replace(/[0-9]/g, '')
          .split('-')
          .filter(item => item)
          .join(' ');
      }
    }
  };
</script>

<style scoped lang="scss">

  .gallery {
    &__item {
      position: relative;
      width: 100%;
      height: 380px;
      overflow: hidden;
      border-radius: 20px;
      transition: box-shadow 0.3s ease;
      display: center;

      &:hover, &:focus-within {
        box-shadow: 0 0 5px 2px #645f5f;

        .gallery__author {
          transform: translateY(0);
        }

        .gallery__img {
          transform: scale(1.1);
          display: center;
        }
      }

    }

    &__img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.6s ease;
      will-change: transform;
    }

    &__author {
      position: absolute;
      width: 100%;
      padding: 20px;
      bottom: 0;
      background-color: #00000057;
      color: #ffffff;
      font-weight: 300;
      transform: translateY(100%);
      transition: transform 0.4s ease;
    }
  }
</style>