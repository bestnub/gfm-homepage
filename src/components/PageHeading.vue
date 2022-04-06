<template>
  <div class="surface-section px-4 py-5 md:px-6 lg:px-8">
    <ul class="list-none p-0 m-0 flex align-items-center font-medium mb-3">
      <!-- Homepage -->
      <li>
        <router-link
          :to="{ name: 'home' }"
          class="text-500 no-underline line-height-3 cursor-pointer"
          >GamingForMiau</router-link
        >
      </li>
      <!-- Vorherige Seite 1 -->
      <div v-for="site in previusSites" :key="site.routername">
        <li class="px-2">
          <i class="pi pi-angle-right text-500 line-height-3"></i>
        </li>
        <li>
          <router-link
            :to="{ name: site.routername }"
            class="text-500 no-underline line-height-3 cursor-pointer"
          >
            {{ site.displayname }}
          </router-link>
        </li>
      </div>
      <!-- Aktuelle Seite -->
      <li class="px-2">
        <i class="pi pi-angle-right text-500 line-height-3"></i>
      </li>
      <li>
        <span class="text-900 line-height-3">
          {{ currentSiteName }}
        </span>
      </li>
      <!-- Aktuelle Seite end -->
    </ul>
  </div>
</template>

<script>
export default {
  props: ["previusSites", "currentSiteName"],
};
</script>

<style>
</style>