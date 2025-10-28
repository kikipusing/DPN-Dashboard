<template>
  <UCard
    :ui="{
      header: 'p-6',
      body: 'p-0',
      footer: 'p-6 pt-0',
    }"
  >
    <template #header>
      <div
        class="bg-gradient-to-r from-amber-500 to-amber-600 -m-6 p-6 rounded-t-lg"
      >
        <div class="flex items-center justify-between">
          <div>
            <h2 class="text-white text-2xl font-bold">Pertanian</h2>
            <p class="text-amber-100 text-sm mt-1">Sektor Agrikultur</p>
          </div>
          <div class="bg-white bg-opacity-20 p-3 rounded-lg">
            <UIcon name="i-heroicons-cube" class="w-8 h-8 text-black" />
          </div>
        </div>
      </div>
    </template>

    <div class="p-6">
      <p class="text-gray-600 dark:text-gray-400 mb-4 text-sm">
        Statistik produksi pertanian, lahan, dan ketahanan pangan di Indonesia
      </p>

      <!-- Chart -->
      <div class="mb-6 h-64">
        <VChart :option="chartOption" autoresize />
      </div>

      <!-- Indikator -->
      <div class="grid grid-cols-2 gap-3 mb-4">
        <div class="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg">
          <p class="text-gray-500 dark:text-gray-400 text-xs mb-1">
            Produksi Padi
          </p>
          <p class="text-gray-800 dark:text-gray-200 text-xl font-bold">
            54.75 Jt Ton
          </p>
        </div>
        <div class="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
          <p class="text-gray-500 dark:text-gray-400 text-xs mb-1">
            Luas Lahan
          </p>
          <p class="text-green-600 dark:text-green-400 text-xl font-bold">
            10.6 Jt Ha
          </p>
        </div>
        <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
          <p class="text-gray-500 dark:text-gray-400 text-xs mb-1">
            Produksi Jagung
          </p>
          <p class="text-gray-800 dark:text-gray-200 text-xl font-bold">
            22.3 Jt Ton
          </p>
        </div>
        <div class="bg-emerald-50 dark:bg-emerald-900/20 p-4 rounded-lg">
          <p class="text-gray-500 dark:text-gray-400 text-xs mb-1">
            Produktivitas
          </p>
          <p class="text-gray-800 dark:text-gray-200 text-xl font-bold">
            5.2 Ton/Ha
          </p>
        </div>
      </div>
    </div>

    <template #footer>
      <UButton color="warning" block size="lg" @click="handleClick">
        Lihat Detail Lengkap
      </UButton>
    </template>
  </UCard>
</template>

<script setup lang="ts">
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { LineChart } from "echarts/charts";
import {
  GridComponent,
  TooltipComponent,
  TitleComponent,
  LegendComponent,
} from "echarts/components";
import VChart from "vue-echarts";

use([
  CanvasRenderer,
  LineChart,
  GridComponent,
  TooltipComponent,
  TitleComponent,
  LegendComponent,
]);

const emit = defineEmits<{
  click: [slug: string];
}>();

const chartOption = {
  tooltip: {
    trigger: "axis",
  },
  legend: {
    data: ["Padi", "Jagung"],
    top: "0%",
  },
  grid: {
    left: "3%",
    right: "4%",
    bottom: "3%",
    top: "15%",
    containLabel: true,
  },
  xAxis: {
    type: "category",
    data: ["2018", "2019", "2020", "2021", "2022", "2023", "2024"],
    axisLine: {
      lineStyle: {
        color: "#9ca3af",
      },
    },
  },
  yAxis: {
    type: "value",
    name: "Juta Ton",
    axisLine: {
      lineStyle: {
        color: "#9ca3af",
      },
    },
    splitLine: {
      lineStyle: {
        color: "#e5e7eb",
      },
    },
  },
  series: [
    {
      name: "Padi",
      type: "line",
      data: [59.2, 54.6, 54.65, 54.42, 54.75, 54.75, 54.75],
      smooth: true,
      lineStyle: {
        color: "#f59e0b",
        width: 3,
      },
      itemStyle: {
        color: "#f59e0b",
      },
    },
    {
      name: "Jagung",
      type: "line",
      data: [30.3, 28.9, 23.7, 21.9, 22.3, 22.3, 22.3],
      smooth: true,
      lineStyle: {
        color: "#10b981",
        width: 3,
      },
      itemStyle: {
        color: "#10b981",
      },
    },
  ],
};

const handleClick = () => {
  emit("click", "pertanian");
};
</script>
