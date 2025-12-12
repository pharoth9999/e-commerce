<template>
  <div class="search-container">
    <div class="left-section">
      <span class="category-text">All Categories</span>
      <font-awesome-icon icon="fa-solid fa-angle-down" />
      <div class="divider"></div>
      <input type="text" placeholder="Search for items" />
    </div>
    <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
  </div>
</template>
<style scoped>
.search-container {
  width: 100%;
  max-width: 500px;
  height: 50px;
  border: 2px solid #c4e8d2;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 15px;
  padding-right: 15px;
  background: white;
}
.left-section {
  display: flex;
  align-items: center;
  gap: 10px;
  flex: 1;
}
.category-text {
  font-weight: 600;
  color: #1a1a1a;
}
.divider {
  width: 1px;
  height: 20px;
  background-color: #ccc;
}
</style>
