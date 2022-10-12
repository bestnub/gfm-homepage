<template>
  <div class="discord">
    <div class="surface-section px-4 py-8 md:px-6 lg:px-8">
      <div class="text-700 text-center">
        <div class="text-blue-600 font-bold mb-3">
          <i class="pi pi-discord"></i>&nbsp;POWERED BY DISCORD
        </div>
        <div class="text-900 font-bold text-5xl mb-3">Join unserm Discord</div>
        <div class="text-700 text-2xl mb-4">
          Discord fungiert als Backup, wenn der TeamSpeak nicht verfügbar ist
        </div>
        <Button
          @click="openDiscordDownload"
          label="Download"
          class="
            social-button
            font-bold
            px-5
            py-3
            p-button-raised p-button-rounded
            white-space-nowrap
          "
        />
        <Button
          @click="openDiscord"
          label="Join Now"
          class="
            social-button
            font-bold
            px-5
            py-3
            p-button-raised p-button-rounded
            white-space-nowrap
          "
        ></Button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import Button from "primevue/button";
export default defineComponent({
  name: "DiscordComponent",
  components: { Button },
  setup() {
    const openDiscord = () => {
      window.open("https://discord.gg/yH9y7Qz");
    };
    const openDiscordDownload = () => {
      window.open("https://discord.com/download");
    };
    return { openDiscord, openDiscordDownload };
  },
});
</script>

<style lang="scss" scoped>
.social-button {
  margin: 1rem 0.5rem 0rem;
}
</style>