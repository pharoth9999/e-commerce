<script lang="ts" setup>
import { onMounted, computed, ref } from 'vue'
import { useProductStore } from '@/stores/product'

import CategoryCard from '@/components/CategoryCard.vue'
import Banner from '@/components/Banner.vue'
import MenuBar from '@/components/ManuBar.vue'
import ProductCard from '@/components/Product.vue'


const productStore = useProductStore()
const selectedMenu = ref("All")


onMounted(() => {
  productStore.loadAll()
})
</script>

<template>
      
    <div class="container">
      <MenuBar
      :text-title="'Featured Categories'"
      :menu-items="['All', 'Milks & Dairies', 'Coffes & Teas', 'Pet Foods', 'Meats', 'Vegetables', 'Fruits']"
      :active-item="selectedMenu"
      @select="selectedMenu = $event"
    />
        <!-- CATEGORY SECTION -->
        <div class="category-section">
          <CategoryCard
            v-for="(cat, i) in productStore.allCategories"
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
            v-for="(banner, i) in productStore.allPromotions"
            :key="i"
            :title="banner.title"
            :image-src="banner.imageSrc"
            :bgColor="banner.bgColor"
            :bgButtonColor="banner.bgButtonColor"
          />
        </div>
        <ProductCard
          v-for="(p, i) in productStore.allproducts"
          :key="i"
          :title="p.title"
          :rating="p.rating"
          :size="p.size"
          :image="p.image"
          :price="p.price"
          :promotion="p.promotion"
        />
      </div>
</template>

<style scoped>
.container {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.category-section {
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 20px;
  margin-bottom: 30px;
}
.banner {
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 10px;
}
</style>
