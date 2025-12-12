<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { useProductStore } from '@/stores/product'
import ProductDetail from './ProductDetail.vue'

const route = useRoute()
const productStore = useProductStore()

const productId = Number(route.params.productId)
const product = ref<any>(null)
const imageUrl = ref('')

onMounted(async () => {
  // Fetch products if not already loaded
  if (productStore.products.length === 0) {
    await productStore.fetchAllProducts()
  }

  // Find the product by ID
  const p = productStore.products.find((p) => p.id === productId)
  if (p) {
    product.value = p

    // Parse image JSON safely
    try {
      const images: string[] = JSON.parse(p.image)
      imageUrl.value = images.length > 0 ? `http://localhost:3000/${images[0]}` : ''
    } catch (err) {
      console.error('Invalid image JSON for product', p.id)
      imageUrl.value = ''
    }
  }
})
</script>

<template>
  <div class="container">
    <div v-if="product" class="product-img">
      <font-awesome-icon icon="fa-solid fa-magnifying-glass" class="zoom" />
      <img :src="imageUrl" alt="product image" class="img" />
    </div>
    <ProductDetail />
  </div>
</template>
<style scoped>
.container {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: stretch; /* stretch columns to same height */
  gap: 20px;
  margin-top: 30px;
}

.product-img {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #e5e5e5;
  border-radius: 3px;
}

.img {
  max-width: 70%;
  max-height: 70%;
  object-fit: contain;
}

.zoom {
  color: #e5e5e5;
}

</style>
