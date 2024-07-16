<template>
  <!-- Body -->
  <div class="bg-white rounded-sm shadow-lg pl-4 px-2 py-4">
    <!-- Title And Button -->
    <div class="flex pb-4 justify-between">
      <p class="text-2xl font-medium">{{ title }}</p>

      <UButton v-if="buttonLink" label="View All" color="gray">
        <template #trailing>
          <UIcon name="i-heroicons-arrow-right-20-solid" class="w-5 h-5" />
        </template>
      </UButton>
    </div>

    <!-- Product Carousel -->
    <UCarousel
      ref="carouselRef"
      v-slot="{ item }"
      :items="items"
      :ui="{
        item: 'basis',
        container: 'gap-12',
      }"
      class="rounded-lg overflow-hidden"
      arrows
    >
      <!-- Product Card -->
      <NuxtLink :to="item.link">
        <div class="bg-gray-100">
          <NuxtImg
            :src="item.image"
            class="h-36 w-44 bg-gray-200"
            draggable="false"
          />
          <p class="border text-center border-t-0 py-1 px-2">
            {{ item.productName.slice(0, 20) }}...
          </p>
        </div>
      </NuxtLink>
    </UCarousel>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, defineProps } from "vue";

const props = defineProps<{
  items: { id: number; image: string; productName: string; link: string }[];
  title: string;
  buttonLink: string;
}>();

const carouselRef = ref();

onMounted(() => {
  setInterval(() => {
    if (!carouselRef.value) return;

    if (carouselRef.value.page === carouselRef.value.pages) {
      return carouselRef.value.select(0);
    }

    carouselRef.value.next();
  }, 4000);
});
</script>
