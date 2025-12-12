<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { useProductStore } from '@/stores/product'

const route = useRoute()
const productStore = useProductStore()

const productId = Number(route.params.productId)
const product = ref<any>(null)

onMounted(async () => {
  if (productStore.products.length === 0) {
    await productStore.fetchAllProducts()
  }

  product.value = productStore.products.find((p) => p.id === productId)
})
const quantity = ref(1) // initial quantity

const increment = () => {
  quantity.value++
}

const decrement = () => {
  if (quantity.value > 1) quantity.value-- // don't go below 1
}
</script>
<template>
  <div v-if="product" class="product-container">
    <!-- STOCK STATUS -->
    <div class="stock in" v-if="product.instock > 0">In Stock</div>

    <div class="stock out" v-else>Out of Stock</div>

    <!-- Product name -->
    <h1 class="title">{{ product.name }}</h1>

    <!-- Rating -->
    <div class="rating">
      <span class="stars">
        <i v-for="i in Math.floor(product.rating ?? 0)" :key="'f' + i" class="pi pi-star-fill"></i>
        <i v-for="i in 5 - Math.floor(product.rating ?? 0)" :key="'e' + i" class="pi pi-star"></i>
      </span>
      <span class="score">({{ (product.rating ?? 0).toFixed(1) }})</span>
    </div>

    <!-- Price -->
    <div class="price-box">
  <!-- New price (always calculated after promotion) -->
  <div class="new-price">
    ${{
      ((product.price ?? 0) - ((product.price ?? 0) * (product.promotionAsPercentage ?? 0)) / 100).toFixed(2)
    }}
  </div>

  <!-- Old price (only show if promotion exists and > 0) -->
  <div v-if="product.promotionAsPercentage && product.promotionAsPercentage > 0" class="old-price">
    ${{ (product.price ?? 0).toFixed(2) }}
  </div>
</div>

    <!-- Description -->
    <p class="desc">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam rem officia, corrupti
      reiciendis minima nisi modi, quasi, odio minus dolore impedit fuga eum eligendi? Officia
      doloremque facere quia. Voluptatum, accusantium!
    </p>

    <!-- Actions -->
    <div class="actions">
      <div class="qty-box">
        <span class="quantity">{{ quantity }}</span>
        <div class="arrow">
          <font-awesome-icon icon="fa-solid fa-angle-up" class="button1" @click="increment"/>
          <font-awesome-icon icon="fa-solid fa-angle-down" class="button2" @click="decrement"/>
        </div>
      </div>
      <button class="add-cart">
        <font-awesome-icon icon="fa-solid fa-cart-shopping" /> Add To Cart
      </button>

      <button class="icon-btn"><font-awesome-icon icon="fa-regular fa-heart" /></button>
      <button class="icon-btn"><font-awesome-icon icon="fa-solid fa-shuffle" /></button>
    </div>

    <!-- Vendor info -->
    <div class="meta">
      <p><strong>Vendor:</strong> NestMart</p>
      <p><strong>SKU:</strong> FWM15VKT</p>
    </div>
  </div>

  <div v-else class="loading">Loading...</div>
</template>

<style scoped>
/* Main container */
.product-container {
  width: 50%;
  display: flex;
  gap: 10px;
  margin-top: 0;
}

.stock {
  padding: 4px 12px;
  width: 80px;
  font-size: 14px;
  font-weight: 600;
  border-radius: 6px;
  text-align: center;
}

.stock.in {
  background: #d7f5dd;
  color: #28c76f;
}

.stock.out {
  background: #ffe5e5;
  color: #ff4d4f;
}

/* Title */
.title {
  font-size: 32px;
  font-weight: 700;
}

/* Rating */
.rating {
  display: flex;
  align-items: center;
  gap: 3px;
  color: #fdbc2c;
  font-size: 18px;
}
.stars {
  display: flex;
  gap: 3px;
}
.score {
  color: #666;
  font-size: 14px;
  margin-left: 5px;
}

/* Price */
.price-box {
  display: flex;
  align-items: center;
  gap: 15px;
}
.new-price {
  font-size: 40px;
  font-weight: 700;
  color: #3bb77e;
}
.old-price {
  color: #999;
  font-size: 22px;
  text-decoration: line-through;
}

/* Description */
.desc {
  margin: 20px 0;
  color: #aaaaaa;
  font-size: 15px;
  max-width: 600px;
}

/* Actions */
.actions {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 20px;
}

/* Quantity box */
.qty-box {
  display: flex;
  width: 90px;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #3bb77e;
  border-radius: 8px;
  padding: 5px;
  color: #3bb77e;
}
.arrow {
  display: flex;
  flex-direction: column;
  gap: 3px;
}

.quantity {
  font-weight: bold;
  padding-left: 15px;
}

.button1,
.button2 {
  font-size: 14px; /* force same icon size */
  line-height: 1; /* remove spacing differences */
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: #3bb77e;
}
/* Add to cart button */
.add-cart {
  background: #3bb77e;
  color: white;
  border: none;
  padding: 12px 20px;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
}

/* Heart and Compare buttons */
.icon-btn {
  width: 45px;
  height: 45px;
  border-radius: 10px;
  border: 1px solid #ddd;
  background: white;
  cursor: pointer;
  font-size: 20px;
}

/* Meta info */
.meta p {
  color: #a09f9f;
}
.meta strong {
  color: black;
}

.loading {
  text-align: center;
  padding-top: 40px;
}
</style>
