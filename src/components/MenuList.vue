<script setup lang="ts">
const props = defineProps<{
  label: string
}>()
</script>
<template>
  <div class="food">
    <p>{{ label }}</p>
    <font-awesome-icon icon="fa-solid fa-angle-down" class="arrow" />
  </div>
</template>
<style scoped>
.food {
  display: flex;
  align-items: center;
  font-weight: bold;
}
.arrow{
  color: #7E7E7E;
  padding-left: 3px;
}
</style>