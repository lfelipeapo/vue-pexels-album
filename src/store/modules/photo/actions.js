import axios from 'axios';

const numberOfElements = 12;

export default {
  // Getting curated photos that are displayed by default
  async GET_PHOTOS({ commit }) {
    try {
      commit('SET_PRELOADER', null, { root: true });
      const photoList = await axios.get(`https://api.pexels.com/v1/curated?page=1&per_page=${numberOfElements}`, {
        headers: {
          Authorization: "563492ad6f91700001000001a6994308b78e40ae8dc259389faeecc2"
        }
      });
      commit('SET_PHOTOS', photoList.data.photos);
      return photoList;
    } catch (err) {
      if (err.response) {
        commit('SET_ERROR_RESPONSE_PHOTOS', true);
      } else if (err.request) {
        console.log(err.request);
      }
    } finally {
      commit('REMOVE_PRELOADER', null, { root: true });
    }
  },
  // Uploading new photos to the photo list
  async LOAD_MORE_PHOTOS({ commit, getters }, pageIndex) {
    try {
      commit('SET_PRELOADER', null, { root: true });
      // If the text field for entering a keyword/phrase is empty
      if (!getters.SEARCH_QUERY_PHOTOS) {
        const morePhotoList = await axios.get(
          `https://api.pexels.com/v1/curated?page=${pageIndex}&per_page=${numberOfElements}`,
          {
            headers: {
              Authorization: "563492ad6f91700001000001a6994308b78e40ae8dc259389faeecc2"
            }
          }
        );
        commit('ADD_NEW_PHOTOS', morePhotoList.data.photos);
        return morePhotoList;
      } else {
        // Otherwise, we work with the entered word/phrase
        const searchedPhotoList = await axios.get(
          `https://api.pexels.com/v1/search?query=${getters.SEARCH_QUERY_PHOTOS}&page=${pageIndex}&per_page=${numberOfElements}`,
          {
            headers: {
              Authorization: "563492ad6f91700001000001a6994308b78e40ae8dc259389faeecc2"
            }
          }
        );
        commit('ADD_NEW_PHOTOS', searchedPhotoList.data.photos);
        return searchedPhotoList;
      }
    } catch (err) {
      if (err.response) {
        commit('SET_ERROR_RESPONSE_PHOTOS', true);
      } else if (err.request) {
        console.log(err.request);
      }
    } finally {
      commit('REMOVE_PRELOADER', null, { root: true });
    }
  },
  // Finding photos for the entered word / phrase
  async GET_SEARCHED_PHOTOS({ commit }, searchQuery) {
    try {
      commit('SET_SEARCH_QUERY_PHOTOS', searchQuery);
      commit('SET_PRELOADER', null, { root: true });
      const searchedPhotoList = await axios.get(
        `https://api.pexels.com/v1/search?query=${searchQuery}&page=1&per_page=${numberOfElements}`,
        {
          headers: {
            Authorization: "563492ad6f91700001000001a6994308b78e40ae8dc259389faeecc2"
          }
        }
      );
      // If no photos were found
      if (searchedPhotoList.data.total_results === 0) {
        commit('SET_ERROR_RESPONSE_PHOTOS', true);
        commit('SET_PHOTOS', []);
        return searchedPhotoList;
      } else {
        commit('SET_ERROR_RESPONSE_PHOTOS', false);
        commit('SET_PHOTOS', searchedPhotoList.data.photos);
        return searchedPhotoList;
      }
    } catch (err) {
      if (err.response) {
        commit('SET_ERROR_RESPONSE_PHOTOS', true);
      } else if (err.request) {
        console.log(err.request);
      }
    } finally {
      commit('REMOVE_PRELOADER', null, { root: true });
    }
  }
};
