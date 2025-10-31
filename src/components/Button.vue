<script lang="ts" setup>
defineProps<{
  bgButtonColor?: string
}>()
</script>

<template>
    <button class="shop-button" :style="{ backgroundColor: bgButtonColor || '#6abe83' }">
        Shop Now <span class="arrow">→</span>
    </button>
</template>

<style scoped>

.shop-button {
  color: white;
  border: none;
  padding: 12px 28px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  transition: background-color 0.2s ease, transform 0.2s ease;
}

.shop-button .arrow {
  margin-left: 8px;
  font-size: 18px;
}

</style>

