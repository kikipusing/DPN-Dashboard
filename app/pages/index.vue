<template>
    <div class="container mx-auto px-4 py-8">
        <h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Dashboard Statistik
        </h1>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <SubjectCatalogCard
                v-for="(subjects, subcat) in groupedSubjects"
                :key="subcat"
                :subcat="subcat"
                :subjects="subjects"
            />
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <CatalogCard1 @click="navigateToDetail" />
            <CatalogCard2 @click="navigateToDetail" />
            <CatalogCard3 @click="navigateToDetail" />
        </div>
    </div>
</template>

<script setup lang="ts">
import SubjectCatalogCard from "~/components/SubjectCatalogCard.vue";

definePageMeta({
    layout: "project",
});

import { ref, onMounted } from "vue";

interface Subject {
    sub_id: number;
    title: string;
    subcat_id: number;
    subcat: string;
    ntabel: string | null;
}

const groupedSubjects = ref<Record<string, Subject[]>>({});

onMounted(async () => {
    const response = await $fetch("/api/subject");
    if (
        response &&
        "data" in response &&
        Array.isArray((response as any).data)
    ) {
        // Kelompokkan berdasarkan subcat
        groupedSubjects.value = (response as any).data.reduce(
            (acc: Record<string, Subject[]>, item: Subject) => {
                if (!acc[item.subcat]) acc[item.subcat] = [];
                acc[item.subcat]?.push(item);
                return acc;
            },
            {}
        );
    }
});
const navigateToDetail = (slug: string) => {
    navigateTo(`/dashboard/${slug}`);
    console.log(`Navigasi ke detail ${slug}`);
};
</script>
