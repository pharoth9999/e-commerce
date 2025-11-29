<template>
  <div class="menu">
    <div class="text-content">{{ textTitle }}</div>
    <div class="menu-bar">
      <div
        v-for="(item, i) in menuItems"
        :key="i"
        class="menu-item"
        :class="{ active: activeItem === item }"
        @click="$emit('select', item)"
      >
        {{ item }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  menuItems: {
    type: Array as () => string[],
    required: true
  },
  activeItem: {
    type: String,
    default: "All"
  },
  textTitle: {
    type: String,
    default: "Featured Categories"
  }
});

const emits = defineEmits(["select"]);
</script>

<style scoped>
.menu{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.text-content{
  font-size: 24px;
  font-weight: 600;
}
.menu-bar {
  display: flex;
  gap: 30px;
  
}

.menu-item {
  cursor: pointer;
  color: #666;
  transition: 0.2s;
}

.menu-item:hover {
  color: #3bb77e;
}

.active {
  color: #3bb77e;
  border-bottom: 3px solid #3bb77e;
  padding-bottom: 5px;
}
</style>
