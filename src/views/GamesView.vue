<template>
  <page-heading currentSiteName="Spiele" />
  <div class="grid grid-nogutter">
    <GameCard
      class="col-12 md:col-6 lg:col-6"
      name="Minecraft"
      friendlyName="mc-vanilla"
      ip="mc.gamingformiau.de"
      imgName="minecraft-gamecard.jpg"
      content="Ein einfacher Vanilla Minecraftserver. Der Server hat eine Whitelist. Bei Interesse, melde dich auf dem TeamSpeak"
    />
    <GameCard
      class="col-12 md:col-6 lg:col-6"
      name="Valheim"
      friendlyName="valheim"
      ip="vh.gamingformiau.de"
      imgName="valheim-gamecard.jpg"
      content="Erbaut ein Dorf, beiegt Bosse und entdeckt die weite Welt von Vallheim"
    />
    <GameCard
      class="col-12 md:col-6 lg:col-6"
      name="Factorio"
      friendlyName="factorio"
      ip="fc.gamingformiau.de"
      joinUrl="steam://connect/fc.gamingformiau.de:34197"
      imgName="factorio-gamecard.jpg"
      content="THE FACTORY MUST GROW!"
    />
    <GameCard
      class="col-12 md:col-6 lg:col-6"
      name="ARMA 3"
      friendlyName="arma3"
      ip="arma.gamingformiau.de"
      imgName="arma3-gamecard.jpg"
      content="Spiele eine von vielen Missionen mit deinen Freunden"
    />
  </div>
  <Toast position="top-center" />
</template>

<script>
import Toast from "primevue/toast";
import GameCard from "@/components/Games/GameCard.vue";
import PageHeading from "@/components/PageHeading.vue";
export default {
  components: { PageHeading, GameCard, Toast },
};
</script>

<style>
</style>