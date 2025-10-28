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
                class="bg-gradient-to-r from-green-500 to-green-600 -m-6 p-6 rounded-t-lg"
            >
                <div class="flex items-center justify-between">
                    <div>
                        <h2 class="text-white text-2xl font-bold">
                            Sosial Ekonomi
                        </h2>
                        <p class="text-green-100 text-sm mt-1">
                            Indikator Ekonomi
                        </p>
                    </div>
                    <div class="bg-white bg-opacity-20 p-3 rounded-lg">
                        <UIcon
                            name="i-heroicons-chart-bar"
                            class="w-8 h-8 text-black"
                        />
                    </div>
                </div>
            </div>
        </template>

        <div class="p-6">
            <p class="text-gray-600 dark:text-gray-400 mb-4 text-sm">
                Data ekonomi, pendapatan, kemiskinan, dan kesejahteraan
                masyarakat Indonesia
            </p>

            <!-- Chart -->
            <div class="mb-6 h-64">
                <VChart :option="chartOption" autoresize />
            </div>

            <!-- Indikator -->
            <div class="grid grid-cols-2 gap-3 mb-4">
                <div class="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                    <p class="text-gray-500 dark:text-gray-400 text-xs mb-1">
                        Tingkat Kemiskinan
                    </p>
                    <p
                        class="text-gray-800 dark:text-gray-200 text-xl font-bold"
                    >
                        9.54%
                    </p>
                </div>
                <div class="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg">
                    <p class="text-gray-500 dark:text-gray-400 text-xs mb-1">
                        Pengangguran
                    </p>
                    <p
                        class="text-orange-600 dark:text-orange-400 text-xl font-bold"
                    >
                        5.32%
                    </p>
                </div>
                <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                    <p class="text-gray-500 dark:text-gray-400 text-xs mb-1">
                        Pertumbuhan PDB
                    </p>
                    <p
                        class="text-gray-800 dark:text-gray-200 text-xl font-bold"
                    >
                        5.05%
                    </p>
                </div>
                <div class="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                    <p class="text-gray-500 dark:text-gray-400 text-xs mb-1">
                        Inflasi
                    </p>
                    <p
                        class="text-gray-800 dark:text-gray-200 text-xl font-bold"
                    >
                        2.61%
                    </p>
                </div>
            </div>

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
                                        class="w-5 h-5 text-success-500"
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
            <UButton color="success" block size="lg" @click="handleClick">
                Lihat Detail Lengkap
            </UButton>
        </template>
    </UCard>
</template>

<script setup lang="ts">
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { BarChart } from "echarts/charts";
import {
    GridComponent,
    TooltipComponent,
    TitleComponent,
} from "echarts/components";
import VChart from "vue-echarts";

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

use([
    CanvasRenderer,
    BarChart,
    GridComponent,
    TooltipComponent,
    TitleComponent,
]);

const emit = defineEmits<{
    click: [slug: string];
}>();

const chartOption = {
    tooltip: {
        trigger: "axis",
        axisPointer: {
            type: "shadow",
        },
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
            name: "Tingkat Kemiskinan (%)",
            type: "bar",
            data: [9.82, 9.41, 10.19, 10.14, 9.57, 9.36, 9.54],
            itemStyle: {
                color: {
                    type: "linear",
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [
                        { offset: 0, color: "#10b981" },
                        { offset: 1, color: "#059669" },
                    ],
                },
                borderRadius: [4, 4, 0, 0],
            },
        },
    ],
};

const handleClick = () => {
    emit("click", "sosial-ekonomi");
};
</script>
