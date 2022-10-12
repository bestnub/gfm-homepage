<template>
  <PageHeading currentSiteName="Social" />
  <div class="social">
    <TeamSpeak />
    <Discord />
    <div class="grid grid-nogutter"></div>
  </div>
</template>

<script lang="ts">
import PageHeading from "@/components/PageHeading.vue";
import TeamSpeak from "@/components/Social/TeamSpeak.vue";
import Discord from "@/components/Social/Discord.vue";
export default {
  components: { PageHeading, TeamSpeak, Discord },
};
</script>

<style>
</style>