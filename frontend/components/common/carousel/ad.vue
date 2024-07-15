<template>
  <UCarousel
    ref="carouselRef"
    v-slot="{ item }"
    :items="items"
    :ui="{ item: 'basis-full sm:basis-1/3 md:basis-1/4 md:basis-1/6' }"
    class="rounded-lg overflow-hidden"
    arrows
  >
    hello
    <img :src="item" class="w-full h-64" draggable="false" />
  </UCarousel>
</template>

<script setup lang="ts">
import { ref, onMounted, defineProps } from "vue";

const props = defineProps<{ items: string[] }>();

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
