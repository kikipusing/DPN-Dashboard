<script lang="ts" setup>
// import UserMenu from "./UserMenu.vue";

// const { status } = useAuth();
// const loggedIn = computed(() => status.value === "authenticated");
const openLaporKendalaModal = ref(false);

// Scroll detection
const isScrolled = ref(false);
const handleScroll = () => {
  isScrolled.value = window.scrollY > 20;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});

const scrollToFooter = () => {
  const footerElement = document.getElementById("footer");
  if (footerElement) {
    footerElement.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};
</script>

<template>
  <div class="relative">
    <div
      class="z-[9999] fixed top-0 w-full px-[100px] flex items-center justify-between gap-3 h-[72px] transition-all duration-300"
      :class="isScrolled ? 'bg-white' : 'bg-transparent'"
      style="pointer-events: auto"
    >
      <div class="flex items-center gap-[8px]">
        <div>
          <img src="/images/bps_logo.svg" class="w-[36px] h-[36px]" />
        </div>
        <div class="leading-[22px]">
          <div class="uppercase font-bold text-[20px]">DASHBOARD</div>
          <div class="font-medium text-[16px]">DEWAN PERTAHANAN NEGARA</div>
        </div>
      </div>
      <div class="flex items-center gap-3">
        <div>
          <UButton
            variant="link"
            label="Hubungi Kami"
            icon="ph:chats-circle-duotone"
            @click="scrollToFooter"
          />
          <!-- <UButton variant="link" label="FAQ" icon="ph:question-duotone" to="/under-construction" /> -->
        </div>
        <!-- <div>
          <UButton
            v-if="loggedIn"
            label="Lapor Kendala"
            color="primary"
            @click="openLaporKendalaModal = true"
          />
        </div> -->
        <div class="relative" style="z-index: 10000">
          <!-- <UButton v-if="!loggedIn" to="/login" color="primary" size="lg"
            >Log in</UButton
          > -->
          <!-- <UserMenu
            v-else
            :side-offset="20"
            class="bg-primary hover:bg-primary-400"
          /> -->
        </div>
      </div>
    </div>
    <div
      class="z-0 h-[calc(100vh-59px)] bg-no-repeat absolute bg-left-top right-0 left-0 pointer-events-none"
    />
    <!-- Lapor Kendala Modal -->
    <!-- <LaporKendala
      :open="openLaporKendalaModal"
      @close="openLaporKendalaModal = false"
    /> -->
  </div>
</template>
