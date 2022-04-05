<template>
  <div>
    <div class="card">
      <TabMenu :model="items" />
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const items = ref([
      {
        label: "Home",
        icon: "pi pi-fw pi-home",
        to: { name: "home" },
      },
      {
        label: "Games",
        to: { name: "games" },
      },
      {
        label: "Social",
        to: { name: "social" },
      },
    ]);

    return { items };
  },
};
</script>

<style scoped lang="scss">
::v-deep(.tabmenudemo-content) {
  padding: 2rem 1rem;
}
</style>