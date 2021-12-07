<template>
  <header>
    <div class="container">
      <nav class="menu">
        <ul class="menu__list">
          <li
            class="menu__item"
            v-for="menuItem in menuItems"
            :key="menuItem.title"
          >
            <router-link
              class="menu__link"
              :to="menuItem.url"
              exact-active-class="menu__link--active"
            >
              {{ menuItem.title }}
            </router-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
  export default {
    name: "v-header",
    data() {
      return {
        menuItems: [
          {title: "Home", url: "/"},
          {title: "Foto", url: "/photo"},
          {title: "Vídeo", url: "/video"}
          ]
      };
    }
  };
</script>

<style lang="scss" scoped>
 

  header {

    z-index: 5;
    min-width: 100%;
    top: 0;
    left: 0;
    right: 0;
    height: 100px;
    display: flex;
    flex-direction: column;
    width: 100%;
    background-color: #ecf0f1;
    justify-content: center;
    margin: 0 !important;
    align-content: center;
    
    
  }
  
  .menu {

      &__list {
      
      position: relative;
      display: flex;
      justify-content: space-between;
      }

      &__link {
      position: relative;
      display: inline-block;
      color: #a5a5a5;
      text-decoration: none;
      transition: color 0.3s linear;
      font-size: 3.5vw;
      font-weight: 700;
      text-transform: uppercase;
      padding: auto;
      
      &::after {
        @extend %underlineLink;
        background-color: $secondColor;
      }

      &:hover {
        color: $secondColor;
      }

      &--active {
        color: $secondColor;

        &::after {
          opacity: 1;
          width: 100%;
        }
      }
    }
  }
</style>