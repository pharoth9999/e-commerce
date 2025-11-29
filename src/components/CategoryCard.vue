<script lang="ts" setup>
const props = defineProps<{
  title: string
  imageSrc: string
  itemCount: number
  bgColor: string
}>()

</script>

<template>
  <div
    class="category-card"
    :style="{ backgroundColor: bgColor }"
  >
    <img :src="imageSrc" alt="category image" class="category-image" />
    <h3 class="category-title">{{ title }}</h3>
    <p class="category-items">{{ itemCount }} items</p>
  </div>
</template>

<style scoped>
.category-card {
  width: 120px;
  border-radius: 16px;
  padding: 16px;
  text-align: center;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}

.category-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.category-image {
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 10px;
}

.category-title {
  color: #333;
  font-weight: 600;
  font-size: 14px;
  margin: 0;
}

.category-items {
  color: #777;
  font-size: 14px;
  margin-top: 4px;
}
</style>
