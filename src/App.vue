<template>
  <div class="container">
    <main id="main">
      <DefaultDrawer 
        @change-index="changeIndex"
        :selected-id="selectedId" :items="items" />
      <router-view />
    </main>
  </div>
</template>

<script setup lang="ts">
  import { IDrawerItem } from './interfaces/components/drawerItemInterface';

  const router = useRouter();

  const selectedId = ref<number>(1);
  const items: IDrawerItem[] = [
    {
      id: 1,
      label: "Home",
      path: "/",
    },
    {
      id: 2,
      label: "Favorites",
      path: "/favorites",
    }
  ]
  const changeIndex = (index: number) => {
    const selectedItem = items.find((item) => item.id == index);

    if (!selectedItem || selectedId.value == selectedItem.id) return;

    selectedId.value = index;
    router.push(selectedItem.path);
  }
</script>

<style lang="scss" scoped>
  .container main {
    height: 100vh;
    display: flex;
    flex-direction: row;
  }
</style>
