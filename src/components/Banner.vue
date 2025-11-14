<script lang="ts" setup>
const props = defineProps<{
  imageSrc: string
  title: string
  bgColor: string
  bgButtonColor: string
}>()
const shopNow = () => {
  alert("Let's shop: " + props.title);
} 
</script>

<template>
  <div class="banner" :style="{ backgroundColor: bgColor}">
    <div class="banner-text">
      <h2>{{ title }}</h2>
      <button class="shop-button" :style="{ backgroundColor: bgButtonColor}" @click="shopNow">
        Shop Now <span class="arrow">→</span>
      </button>
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

.shop-button {
  color: white;
  border: none;
  padding: 12px 28px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  transition: background-color 0.2s ease, transform 0.2s ease;
}

.shop-button .arrow {
  margin-left: 8px;
  font-size: 18px;
}
</style>
