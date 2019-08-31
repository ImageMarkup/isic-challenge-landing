// Vuetify
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import 'material-design-icons-iconfont/dist/material-design-icons.css';

// Vuex
import Vuex from 'vuex';
import store from '@isic/challenge-leaderboard/src/store';

import Leaderboard from '@isic/challenge-leaderboard/src/components/Leaderboard.vue';

export default ({
  Vue,
  options,
  router,
  siteData
}) => {
  Vue.use(Vuetify, {});
  Vue.use(Vuex);
  options.store = new Vuex.Store(store);
  Vue.component('Leaderboard', Leaderboard);
}
