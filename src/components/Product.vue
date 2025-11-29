<script setup lang="ts">

defineProps({
  title: String,
  rating: Number,
  size: String,
  image: String,
  price: Number,
  promotion: Number
})
</script>

<template>
  <div class="card">
    <!-- Promotion badge -->
    <div v-if="(promotion ?? 0) > 0" class="badge">
      -{{ promotion ?? 0 }}%
    </div>

    <!-- Product Image -->
    <img :src="image" class="product-img" alt="product" />

    <!-- Product Info -->
    <div class="info">
      <h4>{{ title }}</h4>
      <p>{{ size }}</p>

      <div class="rating">
        ⭐ {{ rating ?? 0 }}.0
      </div>

      <div class="price">
        ${{ ((price ?? 0) - (price ?? 0) * (promotion ?? 0) / 100).toFixed(2) }}
        <span class="old" v-if="(promotion ?? 0) > 0">
          ${{ (price ?? 0).toFixed(2) }}
        </span>
      </div>

      <button class="add">Add +</button>
    </div>
  </div>
</template>

<style scoped>
.card {
  width: 230px;
  padding: 15px;
  border-radius: 16px;
  border: 1px solid #ddd;
}

.product-img {
  width: 100%;
  height: 140px;
  object-fit: contain;
}

.badge {
  background: #28c76f;
  color: white;
  padding: 4px 10px;
  width: 60px;
  border-radius: 20px;
  font-size: 12px;
  position: absolute;
  margin: 10px;
}

.price {
  font-size: 18px;
  font-weight: bold;
  color: #28c76f;
}

.old {
  text-decoration: line-through;
  color: #999;
  margin-left: 3px;
}

.add {
  margin-top: 10px;
  width: 100%;
  padding: 8px;
  background: #28c76f;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}
</style>
