<template>
  <div class="surface-ground px-4 py-5 md:px-6 lg:px-8">
    <div class="grid">
      <div class="col-12 md:col-6 lg:col-4">
        <div class="surface-card shadow-2 p-3 border-round">
          <div class="flex justify-content-between mb-3">
            <div>
              <span class="block text-500 font-medium mb-3">TeamSpeak Nutzer</span>
              <div v-if="stats" class="text-900 font-medium text-xl text-left">{{ stats.tsUserCount }}</div>
            </div>
            <div class="
                flex
                align-items-center
                justify-content-center
                bg-blue-100
                border-round
                " style="width: 2.5rem; height: 2.5rem">
              <i class="pi pi-users text-blue-500 text-xl"></i>
            </div>
          </div>
          <span v-if="stats" class="text-green-500 font-medium">
            {{ stats.tsUserLastMonth }} neu
          </span>
          <span class="text-500">im letzten Monat</span>
        </div>
      </div>
      <div class="col-12 md:col-6 lg:col-4">
        <div class="surface-card shadow-2 p-3 border-round">
          <div class="flex justify-content-between mb-3">
            <div>
              <span class="block text-500 font-medium mb-3">Spiele</span>
              <div class="text-900 font-medium text-xl text-left">5+</div>
            </div>
            <div class="
                flex
                align-items-center
                justify-content-center
                bg-orange-100
                border-round
              " style="width: 2.5rem; height: 2.5rem">
              <i class="pi pi-desktop text-orange-500 text-xl"></i>
            </div>
          </div>
          <span class="text-500">Mehr auf Anfrage</span>
        </div>
      </div>
      <div class="col-12 md:col-6 lg:col-4">
        <div class="surface-card shadow-2 p-3 border-round">
          <div class="flex justify-content-between mb-3">
            <div>
              <span class="block text-500 font-medium mb-3">GFM Nutzer</span>
              <div v-if="stats" class="text-900 font-medium text-xl text-left">{{ stats.gfmUserCount }}</div>
            </div>
            <div class="
                flex
                align-items-center
                justify-content-center
                bg-cyan-100
                border-round
              " style="width: 2.5rem; height: 2.5rem">
              <i class="pi pi-user text-cyan-500 text-xl"></i>
            </div>
          </div>
          <span v-if="stats" class="text-green-500 font-medium">
            {{ stats.gfmUserLastMonth }} neu
          </span>
          <span class="text-500"> registeriert</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { useStore } from "vuex";
import { computed } from "@vue/runtime-core";
export default {
  setup() {
    const store = useStore();

    const stats = computed(() => {
      return store.state.homePageStats;
    });

    const get = async function () {
      let response = await fetch("https://api.gamingformiau.de/api/stats");
      let data = await response.json();
      store.commit("setHomePageStats", data);
    };
    get();

    return { stats };
  },
};
</script>

<style scoped>
</style>