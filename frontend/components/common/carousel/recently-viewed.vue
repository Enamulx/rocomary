<template>
  <div class="bg-white rounded-sm shadow-lg pl-4 p-2">
    <p class="text-2xl font-semibold">Recently Viewed</p>
    <UCarousel
      ref="carouselRef"
      v-slot="{ item }"
      :items="items"
      :ui="{
        item: 'basis-full sm:basis-1/3 md:basis-1/6 lg:basis-1/9',
        container: 'gap-12',
      }"
      class="rounded-lg overflow-hidden"
      arrows
    >
      <NuxtImg :src="item.image" class="w-full h-56 py-4" draggable="false" />
    </UCarousel>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, defineProps } from "vue";

const props = defineProps<{ items: { id: number; image: string }[] }>();

const carouselRef = ref();

onMounted(() => {
  setInterval(() => {
    if (!carouselRef.value) return;

    if (carouselRef.value.page === carouselRef.value.pages) {
      return carouselRef.value.select(0);
    }

    carouselRef.value.next();
  }, 3000);
});
</script>
