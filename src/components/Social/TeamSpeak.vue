<template>
  <div class="teamspeak">
    <div class="surface-section px-4 py-8 md:px-6 lg:px-8">
      <div class="text-700 text-center">
        <div class="text-blue-600 font-bold mb-3">
          <i class="pi teamspeak-svg-icon"></i>&nbsp;POWERED BY TEAMSPEAK
        </div>
        <div class="text-900 font-bold text-5xl mb-3">
          Join unserm TeamSpeak
        </div>
        <div class="text-700 text-2xl mb-4">
          Unser TeamSpeak hat viele aktive Nutzer
        </div>
        <Button
          @click="openTeamSpeakDownload"
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
          @click="openTeamSpeak"
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
  components: { Button },
  setup() {
    const openTeamSpeak = () => {
      window.window.location.href = "ts3server://ts.gamingformiau.de?port=9987";
    };
    const openTeamSpeakDownload = () => {
      window.open("https://teamspeak.com/de/downloads/");
    };
    return { openTeamSpeak, openTeamSpeakDownload };
  },
});
</script>

<style lang="scss" scoped>
.teamspeak-svg-icon {
  background: url("../../assets/teamspeak.svg");
  height: 1rem;
  width: 1rem;
}

.social-button {
  margin: 1rem 0.5rem 0rem;
}
</style>