<template>
  <div class="menu">
    <div class="text-content">{{ textTitle }}</div>
    <div class="menu-bar">
      <ul class="menu-item">
        <li @click="select('All')" :class="{ active: active==='All' }">All</li>
        <li @click="select('Milks')" :class="{ active: active==='Milks' }">Milks & Dairies</li>
        <li @click="select('Coffes')" :class="{ active: active==='Coffes' }">Coffes & Teas</li>
        <li @click="select('Pet Foods')" :class="{ active: active==='Pet Foods' }">Pet Foods</li>
        <li @click="select('Meats')" :class="{ active: active==='Meats' }">Meats</li>
        <li @click="select('Vegetables')" :class="{ active: active==='Vegetables' }">Vegetables</li>
        <li @click="select('Fruits')" :class="{ active: active==='Fruits' }">Fruits</li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue"

const props = defineProps({
  textTitle: String,
  activeItem: { type: String, default: "All" }
})

const emit = defineEmits(["select"])

const active = ref(props.activeItem)

function select(category) {
  active.value = category
  emit("select", category)   // send to parent
}
</script>

<style scoped>
.menu{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.text-content{
  font-size: 24px;
  font-weight: 600;
}
.menu-item {
  list-style: none;
  display: flex;
  gap: 20px;
}
.menu-item li{
  cursor: pointer;
  color: #666;
  transition: 0.2s;
}
.menu-item li:hover{
  color: #3bb77e;
}
.menu-item li.active {
  color: black;
  font-weight: bold;
  padding-bottom: 5px;
}
</style>
