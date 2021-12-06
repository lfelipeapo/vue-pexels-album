<template>
  <section class="section__video">
    <div class="container">
      <div class="gallery">
        <div class="gallery__header">
          <router-link
            to="/video"
            class="gallery__logo"
          >
            Galeria de Vídeos
          </router-link>
          <vFormSearch
            v-model="searchQuery"
            placeHolder="Pesquise aqui vídeos"
            @input="getSearchedQuery"
          />
        </div>
        <vPreloader :isActive="PRELOADER"/>
        <div
          class="gallery__msg"
          v-if="ERROR_RESPONSE_VIDEOS"
        >
          <span>{{errorMsg}}</span>
        </div>
        <div v-else-if="VIDEOS.length">
          <vVideoList :videoList="VIDEOS"/>
          <vLoadMore
            @loadMore="loadMoreVideos"
            v-model="pageIndex"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import vFormSearch from "@/components/FormSearch/v-form-search";
  import vVideoList from "@/components/Video/v-video-list";
  import vPreloader from "@/components/Preloader/v-preloader";
  import vLoadMore from "@/components/LoadMore/v-load-more";

  import {mapActions, mapGetters} from "vuex";

  export default {
    name: "v-video-section",
    data() {
      return {
        errorMsg: "something terrible happened",
        searchQuery: "",
        pageIndex: 1
      }
    },
    components: {
      vFormSearch,
      vVideoList,
      vPreloader,
      vLoadMore
    },
    methods: {
      ...mapActions("video", [
        "GET_VIDEOS",
        "LOAD_MORE_VIDEOS",
        "GET_SEARCHED_VIDEOS"
      ]),
      loadMoreVideos() {
        this.pageIndex++;
        this.LOAD_MORE_VIDEOS(this.pageIndex);
      },
      getSearchedQuery() {
        this.GET_SEARCHED_VIDEOS(this.searchQuery);
      }
    },
    watch: {
      searchQuery(newVal, oldVal) {
        newVal !== oldVal ? this.pageIndex = 1 : this.pageIndex;
      }
    },
    computed: {
      ...mapGetters("video", [
        "VIDEOS",
        "ERROR_RESPONSE_VIDEOS"
      ]),
      ...mapGetters(["PRELOADER"])
    },
    mounted() {
      this.GET_VIDEOS();
    },
  };
</script>
