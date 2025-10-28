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
                class="bg-gradient-to-r from-blue-500 to-blue-600 -m-6 p-6 rounded-t-lg"
            >
                <div class="flex items-center justify-between">
                    <div>
                        <h2 class="text-white text-2xl font-bold">
                            Kependudukan
                        </h2>
                        <p class="text-blue-100 text-sm mt-1">Data Demografi</p>
                    </div>
                    <div class="bg-white bg-opacity-20 p-3 rounded-lg">
                        <UIcon
                            name="i-heroicons-users"
                            class="w-8 h-8 text-black"
                        />
                    </div>
                </div>
            </div>
        </template>

        <div class="p-6">
            <p class="text-gray-600 dark:text-gray-400 mb-4 text-sm">
                Statistik jumlah penduduk, demografi, dan distribusi populasi di
                Indonesia
            </p>

            <!-- Chart -->
            <div class="mb-6 h-64">
                <VChart :option="chartOption" autoresize />
            </div>

            <!-- Indikator -->
            <div class="grid grid-cols-2 gap-3 mb-4">
                <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                    <p class="text-gray-500 dark:text-gray-400 text-xs mb-1">
                        Total Penduduk
                    </p>
                    <p
                        class="text-gray-800 dark:text-gray-200 text-xl font-bold"
                    >
                        275 Juta
                    </p>
                </div>
                <div class="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                    <p class="text-gray-500 dark:text-gray-400 text-xs mb-1">
                        Pertumbuhan
                    </p>
                    <p
                        class="text-green-600 dark:text-green-400 text-xl font-bold"
                    >
                        +1.2%
                    </p>
                </div>
                <div class="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                    <p class="text-gray-500 dark:text-gray-400 text-xs mb-1">
                        Kepadatan
                    </p>
                    <p
                        class="text-gray-800 dark:text-gray-200 text-xl font-bold"
                    >
                        145/km²
                    </p>
                </div>
                <div class="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg">
                    <p class="text-gray-500 dark:text-gray-400 text-xs mb-1">
                        Usia Median
                    </p>
                    <p
                        class="text-gray-800 dark:text-gray-200 text-xl font-bold"
                    >
                        29.7 Thn
                    </p>
                </div>
            </div>

            <!-- Subject List -->
            <div class="my-6">
                <h3
                    class="text-base font-semibold mb-3 text-gray-800 dark:text-gray-200"
                >
                    Daftar Subjek
                </h3>
                <div
                    class="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden"
                >
                    <ul
                        class="max-h-[300px] overflow-y-auto divide-y divide-gray-200 dark:divide-gray-700"
                    >
                        <li
                            v-for="subject in subjects"
                            :key="subject.sub_id"
                            class="px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-150"
                        >
                            <div class="flex items-center gap-3">
                                <div class="flex-shrink-0">
                                    <UIcon
                                        name="i-heroicons-document-text"
                                        class="w-5 h-5 text-blue-500"
                                    />
                                </div>
                                <span
                                    class="text-sm text-gray-700 dark:text-gray-300 line-clamp-1"
                                >
                                    {{ subject.title }}
                                </span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <template #footer>
            <UButton color="primary" block size="lg" @click="handleClick">
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
} from "echarts/components";
import VChart from "vue-echarts";

use([
    CanvasRenderer,
    LineChart,
    GridComponent,
    TooltipComponent,
    TitleComponent,
]);

interface Subject {
    sub_id: string | number;
    title: string;
}

const props = defineProps({
    subjects: {
        type: Array as PropType<Subject[]>,
        default: () => [],
    },
});

const emit = defineEmits<{
    click: [slug: string];
}>();

const chartOption = {
    tooltip: {
        trigger: "axis",
    },
    grid: {
        left: "3%",
        right: "4%",
        bottom: "3%",
        top: "10%",
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
            name: "Jumlah Penduduk (Juta)",
            type: "line",
            data: [265, 267, 270, 272, 273, 275, 277],
            smooth: true,
            lineStyle: {
                color: "#3b82f6",
                width: 3,
            },
            itemStyle: {
                color: "#3b82f6",
            },
            areaStyle: {
                color: {
                    type: "linear",
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [
                        { offset: 0, color: "rgba(59, 130, 246, 0.3)" },
                        { offset: 1, color: "rgba(59, 130, 246, 0.05)" },
                    ],
                },
            },
        },
    ],
};

const handleClick = () => {
    emit("click", "kependudukan");
};
</script>
