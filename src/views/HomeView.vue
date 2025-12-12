<script lang="ts" setup>
import { computed, onMounted, ref } from 'vue'
import { useProductStore } from '@/stores/product'

import CategoryCard from '@/components/CategoryCard.vue'
import Banner from '@/components/Banner.vue'
import ManuBar from '@/components/ManuBar.vue'
import ProductCard from '@/components/Product.vue'
import NavBar from '@/components/NavBar.vue'
import ShowCase from '@/components/ShowCase.vue'


const productStore = useProductStore()
const selectedMenu = ref('All')

// Local reactive variables to store fetched data
const categories = ref<any[]>([])
const promotions = ref<any[]>([])
const products = ref<any[]>([])

onMounted(async () => {
  // Fetch and store results using the actions
  categories.value = await productStore.fetchAllCategories()
  promotions.value = await productStore.fetchAllPromotions()
  products.value = await productStore.fetchAllProducts()
})
// const filteredProducts = computed(() => {
//   if (selectedMenu.value === "All") return products.value
//   return products.value.filter(p => p.group === selectedMenu.value)
// })
</script>

<template>
  <div class="container">
    <NavBar />
    <ShowCase />
    <ManuBar
      :text-title="'Featured Categories'"
      :active-item="selectedMenu"
      @select="selectedMenu = $event"
    />
    <div class="category-section">
      <!-- CATEGORY SECTION -->
      <CategoryCard
        v-for="(cat, i) in categories"
        :key="i"
        :title="cat.title"
        :image-src="cat.imageSrc"
        :item-count="cat.itemCount"
        :bg-color="cat.bgColor"
      />
    </div>

    <!-- PROMOTION SECTION -->
    <div class="banner">
      <Banner
        v-for="(banner, i) in promotions"
        :key="i"
        :title="banner.title"
        :image-src="banner.imageSrc"
        :bgColor="banner.bgColor"
        :bgButtonColor="banner.bgButtonColor"
      />
    </div>
  </div>

  <!-- PRODUCTS SECTION -->
  <div class="product-container">
    <ManuBar
      :text-title="'Popular Products'"
      :active-item="selectedMenu"
      @select="selectedMenu = $event"
    />
    <div class="product">
      <ProductCard
        v-for="(p, i) in products"
        :key="i"
        :id="p.id"
        :title="p.title"
        :rating="p.rating"
        :size="p.size"
        :image="p.image"
        :price="p.price"
        :promotion="p.promotion"
        :count-sold="p.countSold"
        :group="p.group"
        :instock="p.instock"
      />
    </div>
  </div>
</template>

<style>
.container {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.category-section {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 20px;
  margin-bottom: 30px;
}
.banner {
  display: flex;
  justify-content: center;
  gap: 10px;
}
.product {
  display: grid;
}
.product-container {
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin-top: 50px;
}
.product {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  gap: 15px;
}

</style>
