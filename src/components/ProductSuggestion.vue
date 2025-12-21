<script setup lang="ts">
import { onMounted, ref, computed } from 'vue'
import { useProductStore } from '@/stores/product'

const productStore = useProductStore()

const activeIndex = ref(0)

// fetch products
onMounted(async () => {
  if (productStore.products.length === 0) {
    await productStore.fetchAllProducts()
  }
})

// parse image safely
const getImage = (img: string) => {
  try {
    const images = JSON.parse(img)
    return images.length ? `http://localhost:3000/${images[0]}` : ''
  } catch {
    return ''
  }
}

// visible products (5 items max)
const visibleProducts = computed(() => {
  return productStore.products.slice(activeIndex.value, activeIndex.value + 5)
})

// arrows
const next = () => {
  if (activeIndex.value < productStore.products.length - 5) {
    activeIndex.value++
  }
}

const prev = () => {
  if (activeIndex.value > 0) {
    activeIndex.value--
  }
}
</script>

<template>
  <div class="carousel">
    <!-- LEFT ARROW -->
    <button class="arrow left" @click="prev">
      <font-awesome-icon icon="fa-solid fa-arrow-left" />
    </button>

    <!-- PRODUCT LIST -->
    <div class="list">
      <div
        v-for="(product, index) in visibleProducts"
        :key="product.id"
        class="item"
        :class="{ active: index === 0 }"
      >
        <img :src="getImage(product.image)" />
      </div>
    </div>

    <!-- RIGHT ARROW -->
    <button class="arrow right" @click="next">
      <font-awesome-icon icon="fa-solid fa-arrow-right" />
    </button>
  </div>
</template>

<style scoped>
.carousel {
    margin-top: 30px;
  display: flex;
  align-items: center;
  gap: 10px;
}

.list {
  display: flex;
  gap: 15px;
}

.item {
  width: 100px;
  height: 100px;
  border-radius: 12px;
  border: 1px solid #eee;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
}

.item img {
  max-width: 80%;
  max-height: 80%;
  object-fit: contain;
}



/* ARROWS */
.arrow {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;
  background: #3bb77e;
  color: white;
  cursor: pointer;
}

.arrow.right {
  background: #f3f3f3;
  color: #999;
}
</style>
