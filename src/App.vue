<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { CategoryCard, Banner } from '@/components'
import { burgerImage, peachImage, appleImage, blackPlumImage, cakeAndmilkImage, headPhoneImage, kiwiImage, orangeImage, snackImage, vegetableImage, onionImage, milkImage, vegetablesImage } from '@/assets'


</script>
<template>
  <div class="container">
    <div class="category-section">
      <CategoryCard
        :imageSrc="burgerImage"
        title="Cake & Milk"
        :itemCount="14"
        bgColor="#F2FCE4"
      />
      <CategoryCard
        :imageSrc="peachImage"
        title="Peach"
        :itemCount="17"
        bgColor="#FFFCEB"
      />
      <CategoryCard
        :imageSrc="kiwiImage"
        title="Oganic kiwi"
        :itemCount="21"
        bgColor="#ECFFEC"
      />
      <CategoryCard
        :imageSrc="appleImage"
        title="Red Apple"
        :itemCount="21"
        bgColor="#FEEFEA"
      />
      <CategoryCard
        :imageSrc="snackImage"
        title="Snack"
        :itemCount="34"
        bgColor="#FFF3EB"
      />
      <CategoryCard
        :imageSrc="blackPlumImage"
        title="Black Plum"
        :itemCount="25"
        bgColor="#FFF3FF"
      />
      <CategoryCard
        :imageSrc="vegetableImage"
        title="Vegetables"
        :itemCount="65"
        bgColor="#F2FCE4"
      />
      <CategoryCard
        :imageSrc="headPhoneImage"
        title="Headphone"
        :itemCount="33"
        bgColor="#FFFCEB"
      />
      <CategoryCard
        :imageSrc="cakeAndmilkImage"
        title="Cake & Milk"
        :itemCount="54"
        bgColor="#F2FCE4"
      />
      <CategoryCard
        :imageSrc="orangeImage"
        title="Orange"
        :itemCount="63"
        bgColor="#FFF3FF"
      />
    </div>
    <div class="banner">
      <Banner
        :imageSrc="onionImage"
        title="Everyday Fresh & Clean with Our Products"
        bg-color="#F0E8D5"
        buttonColor="#3BB77E"
      />
      <Banner
        :imageSrc="milkImage"
        title="Make your Breakfast Healthy and Easy"
        bg-color="#F3E8E8"
        buttonColor="#3BB77E"
      />
      <Banner
        :imageSrc="vegetablesImage"
        title="The best Organic Products Online"
        bg-color="#E7EAF3"
        buttonColor="#FDC040"
      />
    </div>
  </div>
</template>


<style scoped>
  .container{
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .category-section{
    display: grid;
    grid-template-columns: repeat(10,1fr);
    gap: 10px;
  }
  .banner{
    display: flex;
    gap: 10px;
  }
</style>
