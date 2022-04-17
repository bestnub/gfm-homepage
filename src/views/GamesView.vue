<template>
  <page-heading currentSiteName="Spiele" />
  <div class="grid grid-nogutter">
    <GameCard
      class="col-12 md:col-6 lg:col-6"
      name="Minecraft Vanilla"
      friendlyName="mc-vanilla"
      ip="mc.gamingformiau.de"
      imgUrl="https://www.minecraft.net/content/dam/games/minecraft/marketplace/updates-catspandas_latest.jpg"
      content="Ein einfacher Vanilla Minecraftserver. Der Server hat eine Whitelist. Bei Interesse, melde dich auf dem TeamSpeak"
    />
    <GameCard
      class="col-12 md:col-6 lg:col-6"
      name="Valheim"
      friendlyName="valheim"
      ip="vh.gamingformiau.de"
      imgUrl="https://www.dsogaming.com/wp-content/uploads/2021/02/Valheim-Header.jpg"
      content="Erbaut ein Dorf, beiegt Bosse und entdeckt die weite Welt von Vallheim"
    />
    <GameCard
      class="col-12 md:col-6 lg:col-6"
      name="Factorio"
      friendlyName="factorio"
      ip="fc.gamingformiau.de"
      imgUrl="https://i.ytimg.com/vi/BqaAjgpsoW8/maxresdefault.jpg"
      content="THE FACTORY MUST GROW!"
    />
    <GameCard
      class="col-12 md:col-6 lg:col-6"
      name="ARMA 3"
      friendlyName="arma3"
      ip="arma.gamingformiau.de"
      imgUrl="https://cdn.cloudflare.steamstatic.com/steam/apps/107410/capsule_616x353.jpg?t=1643208914"
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