<script setup lang="ts">
  import SearchBox from './SearchBox.vue';
  import MenuItem from './MenuItem.vue';
  import MenuList from './MenuList.vue';
</script>

<template>
  <div class="container">
    <div class="nav-container">
      <img src="../assets/img/Logo.png" alt="" />
      <SearchBox/>
      <div class="right-container">
        <MenuItem 
          icon="fa-regular fa-user"
          label="Account"
        />
        <MenuItem 
          icon="fa-solid fa-arrows-spin"
          label="Compare"
        />
        <MenuItem 
          icon="fa-regular fa-heart"
          label="Heart"
        />
        <MenuItem 
          icon="fa-solid fa-cart-shopping"
          label="Cart"
        />
      </div>
    </div>
    <hr class="line" />
    <div class="categories-container">
      <div class="main">
        <div class="category">
          <font-awesome-icon icon="fa-solid fa-table-cells-large" />
          <span class="category-text">Browse All Categories</span>
          <font-awesome-icon icon="fa-solid fa-angle-down" />
        </div>
        <div class="categories">
          <div class="hot-deal">
            <font-awesome-icon icon="fa-solid fa-fire" class="fire"/>
            <p>Hot Deals</p>
          </div>
          <p>Home</p>
          <MenuList 
            label="Food"
          />
          <MenuList
            label="Vegetables"
          />
          <p>Drink</p>
          <p>Cookies</p>
          <MenuList
            label="Meat & Seafood"
          />
          <p>Bekery</p>
        </div>
      </div>
      <div class="contact">
        <font-awesome-icon icon="fa-regular fa-headphones" class="headphone" />
        <div class="contact-text">
          <h3 class="phone-number">067 369 6677</h3>
          <p class="spp">24/7 Support Center</p>
        </div>
      </div>
    </div>
    <hr class="line" />
  </div>
</template>
<style>
.container {
  width:max-content;
  display: flex;
  flex-direction: column;
}

.category-text {
  font-weight: 600;
  color: #1a1a1a;
}

.fa-angle-down {
  font-size: 12px;
  color: #000000;
}

input {
  flex: 1;
  border: none;
  outline: none;
  color: #666;
  font-size: 14px;
}

.search-icon {
  font-size: 20px;
  color: #555;
  cursor: pointer;
}
.arrow{
  color: #7E7E7E;
  padding-left: 3px;
}
.nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.right-container {
  display: flex;
  gap: 30px;
}
.acc,
.compare,
.wishlist,
.cart {
  display: flex;
  align-items: center;
  gap: 5px;
}
.account,
.compare-icon,
.wishlist-icon,
.cart-icon {
  font-size: 20px;
  font-weight: bold;
}
.line {
  margin-left: -2rem;
  margin-right: -2rem;
}

.category {
  display: flex;
  align-items: center;
  height: 40px;
  gap: 10px;
  background-color: #3bb77e;
  padding: 10px;
  border-radius: 5px;
}
.categories-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
}
.categories {
  display: flex;
  align-items: center;
  gap: 20px;
  font-weight: bold;
}
.hot-deal,
.food,
.vege,
.meat {
  display: flex;
  align-items: center;
  font-weight: bold;
}
.contact {
  display: flex;
  align-items: center;
  gap: 5px;
}
.headphone {
  font-size: 28px;
}
.contact-text {
  display: flex;
  flex-direction: column;
}
.phone-number {
  color: #3bb77e;
  font-weight: bold;
  font-size: large;
}
.spp {
  font-size: small;
  color: #7e7e7e;
}
.main{
  display: flex;
  gap: 20px;
}
.fire{
  color: #3bb77e;
  padding-right: 3px;
}
.categories p {
  font-weight: bold;
}
.right-container p{
  color: #7e7e7e;
}
</style>
