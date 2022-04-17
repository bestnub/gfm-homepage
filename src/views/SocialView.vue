<template>
  <page-heading currentSiteName="Social" />
  <div class="social">
    <team-speak />
    <div class="grid grid-nogutter"></div>
  </div>
</template>

<script>
import PageHeading from "@/components/PageHeading.vue";
import TeamSpeak from "@/components/Social/TeamSpeak.vue";
export default {
  components: { PageHeading, TeamSpeak },
};
</script>

<style>
</style>