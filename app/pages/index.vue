<!-- <script setup lang="ts">
definePageMeta({
  layout: "project",
});

const navigateToDetail = (catalog: string) => {
  // Implementasi navigasi menggunakan Nuxt Router
  // navigateTo(`/dashboard/${catalog}`)
  console.log(`Navigasi ke detail ${catalog}`)
}
</script> -->

<template>
  <div class="container mx-auto px-4 py-8 min-h-screen flex flex-col justify-center">
    <!-- <h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-8">Dashboard Statistik</h1> -->
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <CatalogCard
        v-for="catalog in catalogs"
        :key="catalog.id"
        :catalog="catalog"
        @click="navigateToDetail"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "project",
});

interface Stat {
  label: string;
  value: string;
  valueColor: string;
}

interface Catalog {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  gradient: string;
  subtitleColor: string;
  buttonColor: string;
  slug: string;
  stats: Stat[];
}

const catalogs: Catalog[] = [
  {
    id: 1,
    title: 'Kependudukan',
    subtitle: 'Data Demografi',
    description: 'Statistik jumlah penduduk, demografi, dan distribusi populasi',
    icon: 'i-heroicons-users',
    gradient: 'from-blue-500 to-blue-600',
    subtitleColor: 'text-blue-100',
    buttonColor: 'blue',
    slug: 'kependudukan',
    stats: [
      { label: 'Total Penduduk', value: '275 Juta', valueColor: 'text-gray-800 dark:text-gray-200' },
      { label: 'Pertumbuhan', value: '+1.2%', valueColor: 'text-green-600 dark:text-green-400' }
    ]
  },
  {
    id: 2,
    title: 'Sosial Ekonomi',
    subtitle: 'Indikator Ekonomi',
    description: 'Data ekonomi, pendapatan, kemiskinan, dan kesejahteraan masyarakat',
    icon: 'i-heroicons-chart-bar',
    gradient: 'from-green-500 to-green-600',
    subtitleColor: 'text-green-100',
    buttonColor: 'green',
    slug: 'sosial-ekonomi',
    stats: [
      { label: 'Tingkat Kemiskinan', value: '9.54%', valueColor: 'text-gray-800 dark:text-gray-200' },
      { label: 'Pengangguran', value: '5.32%', valueColor: 'text-orange-600 dark:text-orange-400' }
    ]
  },
  {
    id: 3,
    title: 'Pertanian',
    subtitle: 'Sektor Agrikultur',
    description: 'Statistik produksi pertanian, lahan, dan ketahanan pangan',
    icon: 'i-heroicons-cube',
    gradient: 'from-amber-500 to-amber-600',
    subtitleColor: 'text-amber-100',
    buttonColor: 'amber',
    slug: 'pertanian',
    stats: [
      { label: 'Produksi Padi', value: '54.75 Jt Ton', valueColor: 'text-gray-800 dark:text-gray-200' },
      { label: 'Luas Lahan', value: '10.6 Jt Ha', valueColor: 'text-green-600 dark:text-green-400' }
    ]
  }
];

const navigateToDetail = (slug: string) => {
  // Implementasi navigasi menggunakan Nuxt Router
  navigateTo(`/dashboard/${slug}`);
  console.log(`Navigasi ke detail ${slug}`);
};
</script>

<style scoped>
/* Custom styles jika diperlukan */
</style> -->