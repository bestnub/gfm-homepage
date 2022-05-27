import { createStore } from 'vuex'

export default createStore({
  state: {
    homePageStats: {
      gfmUserCount: 0,
      gfmUserLastMonth: 0,
      tsUserCount: 0,
      tsUserLastMonth: 0,
    }
  },
  getters: {
  },
  mutations: {
    setHomePageStats(state, homePageStats) {
      state.homePageStats = homePageStats;
    }
  },
  actions: {
    setHomePageStats(context, homePageStats) {
      context.commit('setHomePageStats', homePageStats);
    }
  },
  modules: {
  }
})
