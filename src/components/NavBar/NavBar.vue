<template>
  <div class="nav-bar">
    <Menubar :model="items">
      <!-- Icon -->
      <template #start>
        <div class="h-full w-full">
          <img
            src="@/assets/gfm_logo2.png"
            alt="Image"
            style="max-height: 40px"
          />
        </div>
      </template>

      <!-- Menue Item -->
      <template #item="{ item }">
        <router-link :to="item.to" class="p-menuitem-link" role="menuitem">
          <span class="p-menuitem-icon" :class="item.icon"></span>
          <span class="p-menuitem-text">{{ item.label }}</span>
        </router-link>
      </template>

      <!-- Anmelde Knopf -->
      <template #end>
        <Button
          @click="$router.push({ name: 'home' })"
          label="Anmelden"
          disabled=true
        />
      </template>
    </Menubar>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Menubar from "primevue/menubar";
import Button from "primevue/button";

export default defineComponent({
  components: { Menubar, Button },
  setup() {
    const items = ref([
      {
        label: "Home",
        icon: "pi pi-fw pi-home",
        to: { name: "home" },
      },
      {
        label: "Spiele",
        icon: "pi pi-fw pi-desktop",
        to: { name: "games" },
      },
      {
        label: "Social",
        icon: "pi pi-fw pi-globe",
        to: { name: "social" },
      },
    ]);

    return { items };
  },
});
</script>

<style scoped lang="scss">
:deep(.tabmenudemo-content) {
  padding: 2rem 1rem;
}
:deep(.p-menuitem-link:focus) {
  box-shadow: none !important;
}

.router-link-active {
  .p-menuitem-text,
  .p-menuitem-icon {
    color: var(--primary-color) !important;
  }
}
.router-link-active-exact {
}
</style>