<template>
    <UCard>
        <template #header>
            <div :class="`${gradientClass} -m-6 p-6 rounded-t-lg`">
                <h2 class="text-white text-2xl font-bold">{{ subcat }}</h2>
                <p class="text-blue-100 text-sm mt-1">Kategori Statistik</p>
            </div>
        </template>

        <div class="p-0">
            <ul class="space-y-2 max-h-[300px] overflow-y-auto">
                <li
                    v-for="subject in subjects"
                    :key="subject.sub_id"
                    class="flex items-center"
                >
                    <UIcon
                        name="i-heroicons-document-text"
                        class="w-5 h-5 text-blue-400 mr-2"
                    />
                    <span class="text-gray-700 dark:text-gray-200">{{
                        subject.title
                    }}</span>
                </li>
            </ul>
        </div>

        <template #footer>
            <UButton :color="buttonColor" block size="lg" variant="outline">
                Lihat Detail
            </UButton>
        </template>
    </UCard>
</template>

<script setup lang="ts">
interface Subject {
    sub_id: number;
    title: string;
    subcat_id: number;
    subcat: string;
    ntabel: string | null;
}

const props = defineProps<{
    subcat: string;
    subjects: Subject[];
}>();

const gradientClass = computed(() => {
    switch (props.subcat) {
        case "Sosial dan Kependudukan":
            return "bg-gradient-to-r from-secondary-500 to-secondary-700";
        case "Ekonomi dan Perdagangan":
            return "bg-gradient-to-r from-success-500 to-success-700";
        case "Pertanian dan Pertambangan":
            return "bg-gradient-to-r from-warning-500 to-warning-700";
        default:
            return "bg-gradient-to-r from-neutral-500 to-neutral-700";
    }
});

const buttonColor = computed(() => {
    switch (props.subcat) {
        case "Sosial dan Kependudukan":
            return "secondary";
        case "Ekonomi dan Perdagangan":
            return "success";
        case "Pertanian dan Pertambangan":
            return "warning";
        default:
            return "neutral";
    }
});
</script>
