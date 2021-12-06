import axios from 'axios';

export default {
  // Getting popular videos that are displayed by default
  async GET_VIDEOS({commit}) {
    try {
      commit('SET_PRELOADER', null, {root: true});
      const videoList = await axios.get('https://api.pexels.com/videos/popular?page=1&per_page=12', {
        headers: {
          Authorization: "563492ad6f91700001000001a6994308b78e40ae8dc259389faeecc2"
        }
      });
      commit('SET_VIDEOS', videoList.data.videos);
      return videoList;
    } catch (err) {
      if (err.response) {
        commit('SET_ERROR_RESPONSE_VIDEOS', true);
      } else if (err.request) {
        console.log(err.request);
      }
    } finally {
      commit('REMOVE_PRELOADER', null, {root: true});
    }
  },
  async LOAD_MORE_VIDEOS({commit, getters}, pageIndex) {
    try {
      commit('SET_PRELOADER', null, {root: true});
      // If the text field for entering a keyword/phrase is empty
      if (!getters.SEARCH_QUERY_VIDEOS) {
        const moreVideoList = await axios.get(`https://api.pexels.com/videos/popular?page=${pageIndex}&per_page=12`, {
          headers: {
            Authorization: "563492ad6f91700001000001a6994308b78e40ae8dc259389faeecc2"
          }
        });
        commit('ADD_NEW_VIDEOS', moreVideoList.data.videos);
        return moreVideoList;
      } else {
        // Otherwise, we work with the entered keyword/phrase
        const searchedVideoList = await axios.get(
          `https://api.pexels.com/videos/search?query=${getters.SEARCH_QUERY_VIDEOS}&page=${pageIndex}&per_page=12`,
          {
            headers: {
              Authorization: "563492ad6f91700001000001a6994308b78e40ae8dc259389faeecc2"
            }
          }
        );
        commit('ADD_NEW_VIDEOS', searchedVideoList.data.videos);
        return searchedVideoList;
      }
    } catch (err) {
      if (err.response) {
        commit('SET_ERROR_RESPONSE_VIDEOS', true);
      } else if (err.request) {
        console.log(err.request);
      }
    } finally {
      commit('REMOVE_PRELOADER', null, {root: true});
    }
  },
  // Finding videos for the entered keyword/phrase
  async GET_SEARCHED_VIDEOS({commit}, searchQuery) {
    try {
      commit('SET_SEARCH_QUERY_VIDEOS', searchQuery);
      commit('SET_PRELOADER', null, {root: true});
      const searchedVideoList = await axios.get(
        `https://api.pexels.com/videos/search?query=${searchQuery}&page=1&per_page=12`,
        {
          headers: {
            Authorization: "563492ad6f91700001000001a6994308b78e40ae8dc259389faeecc2"
          }
        }
      );
      // If no videos were found
      if (searchedVideoList.data.total_results === 0) {
        commit('SET_ERROR_RESPONSE_VIDEOS', true);
        commit('SET_VIDEOS', []);
        return searchedVideoList;
      } else {
        commit('SET_ERROR_RESPONSE_VIDEOS', false);
        commit('SET_VIDEOS', searchedVideoList.data.videos);
        return searchedVideoList;
      }
    } catch (err) {
      if (err.response) {
        commit('SET_ERROR_RESPONSE_VIDEOS', true);
      } else if (err.request) {
        console.log(err.request);
      }
    } finally {
      commit('REMOVE_PRELOADER', null, {root: true});
    }
  }
};
