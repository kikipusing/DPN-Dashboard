<template>
  <UCard :ui="{ 
    body: { padding: 'p-0' },
    header: { padding: 'p-6' },
    footer: { padding: 'p-6 pt-0' }
  }">
    <template #header>
      <div :class="`bg-gradient-to-r ${catalog.gradient} -m-6 p-6 rounded-t-lg`">
        <div class="flex items-center justify-between">
          <div>
            <h2 class="text-white text-2xl font-bold">{{ catalog.title }}</h2>
            <p :class="`${catalog.subtitleColor} text-sm mt-1`">{{ catalog.subtitle }}</p>
          </div>
          <div class="bg-white bg-opacity-20 p-3 rounded-lg">
            <UIcon :name="catalog.icon" class="w-8 h-8 text-white" />
          </div>
        </div>
      </div>
    </template>

    <div class="p-6">
      <p class="text-gray-600 dark:text-gray-400 mb-4">
        {{ catalog.description }}
      </p>
      <div class="space-y-3 mb-4">
        <div 
          v-for="(stat, index) in catalog.stats" 
          :key="index"
          class="flex justify-between items-center"
        >
          <span class="text-gray-500 dark:text-gray-400 text-sm">{{ stat.label }}</span>
          <span :class="`${stat.valueColor} font-semibold`">{{ stat.value }}</span>
        </div>
      </div>
    </div>

    <template #footer>
      <UButton 
        :color="catalog.buttonColor" 
        block 
        size="lg"
        @click="handleClick"
      >
        Lihat Detail
      </UButton>
    </template>
  </UCard>
</template>

<script setup lang="ts">
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

const props = defineProps<{
  catalog: Catalog;
}>();

const emit = defineEmits<{
  click: [slug: string];
}>();

const handleClick = () => {
  emit('click', props.catalog.slug);
};
</script>