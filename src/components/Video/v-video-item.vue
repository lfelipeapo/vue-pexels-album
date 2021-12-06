<template>

  <li class="gallery__item">
    <a
      class="gallery__link"
      target="_blank"
    >
      <img
        :src="videoItem.image"
        :alt="setAltForImage(videoItem.url)"
        class="gallery__img"
      >
      <button
        class="gallery__play-video"
        type="button"
        aria-label="Play video"
      >
        <icons
          name="play"
          color="#05a081"
          width="4vmax"
          height="4vmax"
        />
      </button>
      <h3 class="gallery__author">{{videoItem.user.name}}</h3>
    </a>
  </li>
</template>

<script>
  import icons from "v-svg-icons";

  export default {
    name: "v-video-item",
    props: {
      videoItem: {
        type: Object,
        default: {}
      }
    },
    components: {
      icons
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

      &:hover, &:focus-within {
        box-shadow: 0 0 5px 2px #645f5f;

        .gallery__author {
          transform: translateY(0);
        }

        .gallery__play-video {
          opacity: 1;
        }

        .gallery__img {
          transform: scale(1.2);
          filter: brightness(0.6);
        }
      }

    }

    &__img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.6s ease, filter 0.6s ease;
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

    &__play-video {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      opacity: 0;
      transition: opacity 0.4s ease;
    }
  }
</style>