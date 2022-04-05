<template>
  <home-landing />
  <home-stats />
</template>

<script lang="ts">
import HomeLanding from "../components/Home/HomeLanding.vue";
import HomeStats from "../components/Home/HomeStats.vue";
import { defineComponent } from "vue";
// import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

export default defineComponent({
  name: "HomeView",
  components: { HomeStats, HomeLanding },
  setup() {
    return {};
  },
});
</script>
