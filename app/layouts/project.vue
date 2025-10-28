<script lang="ts" setup>
const showDesktopWarning = ref(false);

const checkScreenSize = () => {
  if (process.client) {
    const minWidth = 1024;
    showDesktopWarning.value = window.innerWidth < minWidth;
  }
};

onMounted(() => {
  checkScreenSize();
  window.addEventListener("resize", checkScreenSize);
});

onUnmounted(() => {
  if (process.client) {
    window.removeEventListener("resize", checkScreenSize);
  }
});
</script>

<template>
  <div
    v-if="showDesktopWarning"
    class="fixed inset-0 bg-white z-[9999] flex flex-col justify-center items-center"
  >
    <div>
      <img
        src="/images/site-under-construction.svg"
        width="300"
        height="300"
        alt="Desktop Only"
      />
    </div>
    <div
      class="text-2xl md:text-3xl font-semibold mt-8 text-[#01579B] text-shadow-2xs text-center px-4"
    >
      Website Khusus Desktop
    </div>
    <div class="text-shadow-2xs text-center px-4 mt-4 max-w-md">
      Maaf, website ini hanya dapat diakses melalui perangkat desktop dengan
      layar yang lebih besar. Silakan buka kembali di komputer atau laptop Anda.
    </div>
  </div>

  <!-- Konten website normal -->
  <div v-else>
    <HomeHeader />
    <main class="min-h-screen flex flex-col z-100 mx-[100px] pt-[72px]">
      <slot />
    </main>
    <DefaultFooter />
  </div>
</template>

<style>
.text-shadow-2xs {
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
}
</style>
