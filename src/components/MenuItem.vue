<script setup lang="ts">
const props = defineProps<{
  icon: string
  label: string
}>()
</script>

<template>
  <div class="acc">
    <font-awesome-icon :icon="icon" class="account" />
    <p>{{ label }}</p>
  </div>
</template>

<style scoped>
.acc {
  display: flex;
  align-items: center;
  gap: 5px;
  font-weight: 500;
}
.account {
  font-size: 20px;
}
</style>
