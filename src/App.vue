<script lang="ts">
import { defineComponent } from 'vue'
import axios from 'axios'

import CategoryCard from './components/CategoryCard.vue'
import Banner from './components/Banner.vue'

export default defineComponent({
  name: 'App',

  components: {
    CategoryCard,
    Banner
  },

  data() {
    return {
      categories: [] as any[], 
      promotions: [] as any[]  
    }
  },

  mounted() {
    this.fetchCategories()
    this.fetchPromotions()
  },

  methods: {
    async fetchCategories() {
      try {
        const res = await axios.get("http://localhost:3000/api/categories")
        this.categories = res.data.map((c: any) => ({
          title: c.name,                  
          imageSrc: `http://localhost:3000/${c.image}`,  
          itemCount: c.productCount,      
          bgColor: c.color                
        }))
      } catch (err) {
        console.error("Error loading categories:", err)
      }
    },

    async fetchPromotions() {
      try {
        const res = await axios.get('http://localhost:3000/api/promotions')
        this.promotions = res.data.map((p: any) => ({
          title: p.title,
          imageSrc: `http://localhost:3000/${p.image}`, // map image → imageSrc
          bgColor: p.color || '#F0F0F0',              // map color → bgColor
          bgButtonColor: p.buttonColor || '#3BB77E'   // map buttonColor → bgButtonColor
        }))
      } catch (err) {
        console.error('Error loading promotions:', err)
      }
    },

    shopNow() {
      console.log("Shop now clicked")
    }
  }
})
</script>

<template>
  <div class="container">
    <div class="category-section">
      <CategoryCard
        v-for="(cat, i) in categories"
        :key="i"
        :title="cat.title"
        :image-src="cat.imageSrc"
        :item-count="cat.itemCount"
        :bg-color="cat.bgColor"
      />
    </div>

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
</template>

<style scoped> 
.container { 
  display: flex; 
  flex-direction: column; 
  gap: 10px; 
} 
.category-section { 
  display: grid; 
  grid-template-columns: repeat(10, 1fr); 
  gap: 10px; } 
.banner { 
  display: flex; 
  gap: 10px; 
} 
</style>