<script lang="ts" setup>
defineProps<{
  imageSrc: string
  title: string
  bgColor?: string
  buttonColor?: string
}>()
import Button from './Button.vue';
</script>

<template>
  <div class="banner" :style="{ backgroundColor: bgColor || '#6abe83' }">
    <div class="banner-text">
      <h2>{{ title }}</h2>
      <Button :bgButtonColor="buttonColor"></Button>
    </div>
    <div class="banner-image">
      <img :src="imageSrc" alt="Fresh product" />
    </div>
  </div>
</template>

<style scoped>
.banner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 16px;
  padding: 40px 60px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.banner-text {
  flex: 1;
  max-width: 50%;
}

.banner-text h2 {
  color: #2f3a3a;
  font-size: 24px;
  font-weight: 700;
  line-height: 1.4;
  margin-bottom: 24px;
}

.banner-image {
  flex: 1;
  display: flex;
  justify-content: flex-end;
}

.banner-image img {
  width: 150px;
  height: auto;
  object-fit: contain;
}
</style>
