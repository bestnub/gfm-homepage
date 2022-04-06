<template>
  <page-heading currentSiteName="Spiele" />
  <div class="grid grid-nogutter">
    <game-card
      class="col-12 md:col-6 lg:col-6"
      name="Minecraft Vanilla"
      status="online"
      ip="mc.gamingformiau.de"
      imgUrl="https://www.minecraft.net/content/dam/games/minecraft/marketplace/updates-catspandas_latest.jpg"
    />
    <game-card
      class="col-12 md:col-6 lg:col-6"
      name="Vallheim"
      status="offline"
      ip="vh.gamingformiau.de"
      imgUrl="https://www.dsogaming.com/wp-content/uploads/2021/02/Valheim-Header.jpg"
    />
    <game-card
      class="col-12 md:col-6 lg:col-6"
      name="Factorio"
      status="offline"
      ip="fc.gamingformiau.de"
      imgUrl="https://i.ytimg.com/vi/BqaAjgpsoW8/maxresdefault.jpg"
    />
    <game-card
      class="col-12 md:col-6 lg:col-6"
      name="ARMA 3"
      status="offline"
      ip="arma.gamingformiau.de"
      imgUrl="https://cdn.cloudflare.steamstatic.com/steam/apps/107410/header.jpg"
    />
  </div>
</template>

<script>
import PageHeading from "@/components/PageHeading.vue";
import GameCard from "@/components/Games/GameCard.vue";
export default {
  components: { PageHeading, GameCard },
};
</script>

<style>
</style>