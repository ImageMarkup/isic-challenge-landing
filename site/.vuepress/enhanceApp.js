// Vuetify
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import '@mdi/font/css/materialdesignicons.css';

// Vuex
import Vuex from 'vuex';

// Leaderboard
import leaderboardPlugin from '@isic/challenge-leaderboard/src/plugin';
import Leaderboard from '@isic/challenge-leaderboard/src/components/Leaderboard.vue';

export default ({
  Vue,
  options,
  router,
  siteData
}) => {
  Vue.use(Vuetify);
  options.vuetify = new Vuetify({});

  Vue.use(Vuex);
  const store = new Vuex.Store({});
  leaderboardPlugin(store);
  options.store = store;

  Vue.component('Leaderboard', Leaderboard);
}
