import Vue from 'vue';
import Vuex from 'vuex';

import state from './state/index';
import mutations from './mutations/index';
import getters from './getters/index';

import video from './modules/video/index';
import photo from './modules/photo/index';

Vue.use(Vuex);

export default new Vuex.Store({
  state,
  mutations,
  getters,
  modules: {
    photo,
    video
  }
});
