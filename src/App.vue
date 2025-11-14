<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { CategoryCard, Banner } from '@/components'
import {
  burgerImage,
  peachImage,
  appleImage,
  blackPlumImage,
  cakeAndmilkImage,
  headPhoneImage,
  kiwiImage,
  orangeImage,
  snackImage,
  vegetableImage,
  onionImage,
  milkImage,
  vegetablesImage,
} from '@/assets'
import axios from 'axios'

const categories = ref([
  {
    title: 'Cake & Milk',
    imageSrc: burgerImage,
    itemCount: 14,
    bgColor: '#F2FCE4',
  },
  {
    title: 'Peach',
    imageSrc: peachImage,
    itemCount: 17,
    bgColor: '#FFFCEB',
  },
  {
    title: 'Oganic kiwi',
    imageSrc: kiwiImage,
    itemCount: 21,
    bgColor: '#ECFFEC',
  },
  {
    title: 'Red Apple',
    imageSrc: appleImage,
    itemCount: 21,
    bgColor: '#FEEFEA',
  },
  {
    title: 'Snack',
    imageSrc: snackImage,
    itemCount: 34,
    bgColor: '#FFF3EB',
  },
  {
    title: 'Black Plum',
    imageSrc: blackPlumImage,
    itemCount: 25,
    bgColor: '#FFF3FF',
  },
  {
    title: 'Vegetables',
    imageSrc: vegetableImage,
    itemCount: 65,
    bgColor: '#F2FCE4',
  },
  {
    title: 'Headphone',
    imageSrc: headPhoneImage,
    itemCount: 33,
    bgColor: '#FFFCEB',
  },
  {
    title: 'Cake & Milk',
    imageSrc: cakeAndmilkImage,
    itemCount: 54,
    bgColor: '#F2FCE4',
  },
  {
    title: 'Orange',
    imageSrc: orangeImage,
    itemCount: 63,
    bgColor: '#FFF3FF',
  },
])

const banners = ref([
  {
    title: 'Everyday Fresh & Clean with Our Products',
    imageSrc: onionImage,
    bgColor: '#F0E8D5',
    buttonColor: '#3BB77E',
  },
  {
    title: 'Make your Breakfast Healthy and Easy',
    imageSrc: milkImage,
    bgColor: '#F3E8E8',
    buttonColor: '#3BB77E',
  },
  {
    title: 'The best Organic Products Online',
    imageSrc: vegetablesImage,
    bgColor: '#E7EAF3',
    buttonColor: '#FDC040',
  },
])

async function fetchCategories() {
  try {
    const result = await axios.get('http://localhost:3000/api/categories')
    categories.value = result.data
      .filter((cat: any) => cat.id !== 1 && cat.id !== 2 && cat.id !== 3)
      .map((cat: any) => ({
        title: cat.name,
        imageSrc: cat.image,
        itemCount: cat.itemCount,
        bgColor: cat.color,
      }))
    console.log(result.data)
  } catch (err) {
    console.error('fetchCategories error', err)
  }
}

async function fetchBanners() {
  try {
    const result = await axios.get('http://localhost:3000/api/promotions')
    banners.value = result.data.map((promo: any) => ({
      title: promo.title,
      imageSrc: promo.image,
      bgColor: promo.color,
      buttonColor: promo.buttonColor,
    }))
    console.log(result.data)
  } catch (err) {
    console.error('fetchBanners error', err)
  }
}

onMounted(() => {
  fetchCategories()
  fetchBanners()
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
        v-for="(banner, i) in banners"
        :key="i"
        :title="banner.title"
        :image-src="banner.imageSrc"
        :bgColor="banner.bgColor"
        :bgButtonColor="banner.buttonColor"
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
  gap: 10px;
}
.banner {
  display: flex;
  gap: 10px;
}
</style>
