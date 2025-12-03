<script setup lang="ts">
const props = defineProps({
  title: String,
  rating: Number,
  size: String,
  image: String,
  price: Number,
  promotion: {
    type: Number,
    default: 0,
  },
  countSold: {
    type: Number,
    default: 0,
  },
  group: String,
})
</script>

<template>
  <div class="card">
    <!-- Promotion badge -->
    <div
      v-if="promotion > 0 || countSold >= 20"
      class="badge"
      :class="{
        high: countSold >= 25,
        mid: countSold >= 20 && countSold < 25,
        low: promotion > 0,
      }"
    >
      <span v-if="countSold >= 25">Hot</span>
      <span v-else-if="countSold >= 20 && countSold < 25">Sale</span>
      <span v-else-if="promotion > 0">-{{ promotion }}%</span>
    </div>
    <!-- Product image -->
    <img :src="image" class="product-img" alt="product" />

    <!-- Info -->
    <div class="info">
      <h4 class="title">{{ title }}</h4>
      <p class="size">{{ size }}</p>

      <!-- Rating section -->
      <div class="rating">
        <span class="stars">
          <i v-for="i in Math.floor(rating ?? 0)" :key="'f' + i" class="pi pi-star-fill"></i>
          <i v-for="i in 5 - Math.floor(rating ?? 0)" :key="'e' + i" class="pi pi-star"></i>
        </span>
        <span class="score">({{ (rating ?? 0).toFixed(1) }})</span>
      </div>

      <!-- Price -->
      <div class="price">
        <div>
          ${{ ((price ?? 0) - ((price ?? 0) * (promotion ?? 0)) / 100).toFixed(2) }}
          <span v-if="promotion" class="old">${{ (price ?? 0).toFixed(2) }}</span>
        </div>

        <button class="add">Add +</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  width: 230px;
  padding: 15px;
  border-radius: 18px;
  border: 1px solid #bce3c9;
  position: relative;
  background: white;
  transition: 0.2s ease;
  overflow: auto;
}
.card:hover {
  border-color: #28c76f;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
}
.product-img {
  width: 100%;
  height: 150px;
  object-fit: contain;
  margin-bottom: 10px;
}
.badge {
  position: absolute;
  top: 30px;
  left: -20px;
  background: #3bb77e;
  color: white;
  padding: 5px 10px;
  font-size: 12px;
  font-weight: 500;
  border-radius: 110px;
  min-width: 70px;
  text-align: right;
}

/* Colors */
.low {
  background: #28c76f;
}
.mid {
  background: #fdc040;
}
.high {
  background: #fd6e6e;
}

.title {
  font-size: 15px;
  font-weight: 600;
}
.size {
  color: #777;
  font-size: 13px;
}
.rating {
  margin: 6px 0;
  font-size: 16px;
  display: flex;
  align-items: center;
  gap: 2px;
  color: #fdbc2c;
}
.stars {
  display: flex;
  gap: 3px;
}
.score {
  margin-left: 4px;
  color: #888;
  font-size: 13px;
}
.price {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 8px;
  font-size: 18px;
  color: #3bb77e;
  font-weight: 600;
}
.old {
  text-decoration: line-through;
  color: #999;
  margin-left: 5px;
  font-size: 14px;
}
.add {
  padding: 6px 10px;
  background: #def9ec;
  color: #3bb77e;
  border: none;
  border-radius: 6px;
  font-size: 14px;
  cursor: pointer;
}

.promo-text {
  padding-left: 5px; /* move text slightly right */
  display: inline-block;
}
</style>
