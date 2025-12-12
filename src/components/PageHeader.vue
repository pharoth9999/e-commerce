<template>
  <div class="cate-content">
    <img src="../assets/img/catePicbg.png" alt="" class="cate-bg-1" />
    <img src="../assets/img/catePicbg.png" alt="" class="cate-bg" />
    <h1 class="promo-content">Coke & Milk</h1>
  </div>
</template>
<style>
.cate-content {
  width: 100%;
  height: 200px;
  background-color: #3bb77e33;
  border-radius: 20px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
}
.cate-bg {
  position: absolute;
  width: 50%;
  height: 100%;
  object-fit: cover;
  opacity: 0.25;
  top: 50px;
  left: -140px;
  z-index: 1;
}
.cate-bg-1 {
  position: absolute;
  width: 60%;
  height: 100%;
  object-fit: cover;
  opacity: 0.25;
  right: -5px;
  z-index: 1;
}
.promo-content {
  position: relative;
  padding-left: 50px;
  z-index: 2;
  max-width: 500px;
  font-size: 38px;
  font-weight: 700;
  line-height: 1.2;
}
</style>
