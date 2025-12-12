<template>
  <div class="promo-wrapper">
    <!-- Background pattern -->
    <img src="../assets/img/bgPromo.png" class="bg-pattern" alt="" />

    <div class="promo-content">
      <h1>Don't miss amazing grocery deals</h1>
      <p>Sign up for the daily newsletter</p>

      <div class="subscribe-box">
        <div class="input-box">
          <font-awesome-icon icon="fa-regular fa-envelope" />
          <input type="text" placeholder="Your email address" />
        </div>

        <button class="subscribe-btn">Subscribe</button>
      </div>
    </div>

    <img src="../assets/img/bg.png" class="promo-image" alt="Fruits" />
  </div>
</template>

<style scoped>
.promo-wrapper {
  width: 100%;
  height: 300px;
  background-color: #FDC04033;
  border-radius: 20px;
  position: relative;
  display: flex;
  align-items: center;
  padding-left: 50px;
  overflow: hidden;
}

/* background drawing patterns */
.bg-pattern {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.25;
  left: 0;
  top: 0;
  z-index: 1;
}

/* LEFT TEXT SECTION */
.promo-content {
  position: relative;
  z-index: 2;
  max-width: 500px;
}

.promo-content h1 {
  font-size: 38px;
  font-weight: 700;
  color: #454545;
  line-height: 1.2;
}

.promo-content p {
  font-size: 18px;
  margin-top: 10px;
  color: #555;
}

/* SUBSCRIBE BOX */
.subscribe-box {
  margin-top: 25px;
  display: flex;
  gap: 10px;
}

.input-box {
  background: white;
  border-radius: 30px;
  padding: 10px 15px;
  display: flex;
  align-items: center;
  width: 250px;
  gap: 10px;
  border: 1px solid #e6e6e6;
}

.input-box input {
  border: none;
  outline: none;
  flex: 1;
}

.subscribe-btn {
  background: #3bb77e;
  color: white;
  padding: 12px 25px;
  border: none;
  border-radius: 30px;
  font-weight: 600;
  cursor: pointer;
  transition: 0.2s;
}

.subscribe-btn:hover {
  transform: scale(1.03);
}

/* RIGHT IMAGE */
.promo-image {
  height: 95%;
  position: absolute;
  right: 0;
  bottom: 0;
  z-index: 2;
  object-fit: contain;
}
</style>
