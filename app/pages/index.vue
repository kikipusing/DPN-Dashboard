<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-8">
      Dashboard Statistik
    </h1>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <CatalogCard1 @click="navigateToDetail" />
      <CatalogCard2 @click="navigateToDetail" />
      <CatalogCard3 @click="navigateToDetail" />
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "project",
});

const navigateToDetail = (slug: string) => {
  navigateTo(`/dashboard/${slug}`);
  console.log(`Navigasi ke detail ${slug}`);
};
</script>
