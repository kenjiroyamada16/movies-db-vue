<template>
  <div class="drawer">
    <div class="title">Movies</div>
    <v-divider color="error" :thickness="3"></v-divider>
    <div class="content">
      <ul>
        <li 
        v-for="item in props.items" 
        :key="item.id"
        @click="() => emit('changeIndex', item.id)" 
        :class="{ selected: item.id == props.selectedId }" 
        >
          {{ item.label }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { IDrawerItem } from '@/interfaces/components/drawerItemInterface';

  const emit = defineEmits<(
    event: "changeIndex", value: number
  ) => void>();
  const props = defineProps<{
    selectedId: number,
    items: IDrawerItem[],
  }>();
</script>

<style scoped lang="scss">
.drawer {
  background-color: rgb(25, 25, 25);
  padding: 24px 8px;
  max-width: 300px;
  height: 100%;
  border-right: 1px solid rgba(105, 105, 105, 0.148);

  .title {
    text-transform: uppercase;
    margin-bottom: 20px;
    padding: 0 32px;
    text-align: center;
  }

  .content {
    padding: 0 8px;
  }

  ul {
    list-style: none;

    li {
      margin: 12px 0px;
      padding: 8px 12px;
      border-radius: 20px;
      transition: 0.3s;
      cursor: pointer;
      user-select: none;
      position: relative;

      &::after {
        content: '';
        height: 2px;
        width: 0;
        margin: 12px;
        bottom: -4px;
        left: 0;
        position: absolute;
        background-color: rgb(169, 3, 3);
        transition: 0.4s;
      }

      &:hover::after{
        width: 20px;
      }

      &.selected {
        background-color: rgb(169, 3, 3);
      }
    }
  }
}
</style>