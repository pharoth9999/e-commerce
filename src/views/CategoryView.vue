<script setup lang="ts">
import PageHeader from '@/components/PageHeader.vue';
import NavBar from '@/components/NavBar.vue'
</script>

<template>
  <div class="cate-container">
    <NavBar />
    <PageHeader />
  </div>
</template>

<style>
    .cate-container{
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
</style>
