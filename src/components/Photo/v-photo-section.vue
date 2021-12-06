<template>
  <section class="section__photo">
    <div class="container">
      <div class="gallery">
        <div class="gallery__header">
          <router-link
            to="/photo"
            class="gallery__logo"
          >
            Galeria de Fotos
          </router-link>
          <vFormSearch
            v-model="searchQuery"
            placeHolder="Pesquise aqui fotos"
            @input="getSearchedQuery"
          />
        </div>
        <vPreloader :isActive="PRELOADER"/>
        <div
          class="gallery__msg"
          v-if="ERROR_RESPONSE_PHOTOS"
        >
          <span>{{errorMsg}}</span>
        </div>
        <div v-else-if="PHOTOS.length">
          <vPhotoList :photoList="PHOTOS"/>
          <vLoadMore
            @loadMore="loadMorePhotos"
            v-model="pageIndex"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import vFormSearch from "@/components/FormSearch/v-form-search";
  import vPhotoList from "@/components/Photo/v-photo-list";
  import vPreloader from "@/components/Preloader/v-preloader";
  import vLoadMore from "@/components/LoadMore/v-load-more";

  import {mapActions, mapGetters} from "vuex";

  export default {
    name: "v-photo-section",
    data() {
      return {
        errorMsg: "something terrible happened",
        searchQuery: "",
        pageIndex: 1
      }
    },
    components: {
      vFormSearch,
      vPhotoList,
      vPreloader,
      vLoadMore
    },
    methods: {
      ...mapActions("photo", [
        "GET_PHOTOS",
        "LOAD_MORE_PHOTOS",
        "GET_SEARCHED_PHOTOS"
      ]),
      loadMorePhotos() {
        this.pageIndex++;
        this.LOAD_MORE_PHOTOS(this.pageIndex);
      },
      getSearchedQuery() {
        this.GET_SEARCHED_PHOTOS(this.searchQuery);
      }
    },
    watch: {
      searchQuery(newVal, oldVal) {
        newVal !== oldVal ? this.pageIndex = 1 : this.pageIndex;
      }
    },
    computed: {
      ...mapGetters("photo", [
        "PHOTOS",
        "ERROR_RESPONSE_PHOTOS"
      ]),
      ...mapGetters(["PRELOADER"])
    },
    mounted() {
      this.GET_PHOTOS()
    }
  };
</script>
