<template>
  <!-- Body -->
  <div class="bg-white rounded-sm shadow-lg pl-4 px-2 py-4">
    <!-- Title And Button -->
    {{ items[0] }}
    <div class="flex pb-4 justify-between">
      <p class="hidden md:block text-2xl font-medium">{{ title }}</p>
      <p v-if="title" class="md:hidden text-xl font-medium">
        {{ title?.slice(0, 16) }}...
      </p>

      <UButton
        v-if="buttonLink"
        :to="buttonLink"
        label="View All"
        color="white"
        variant="solid"
      >
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
        item: 'basis-full sm:basis-1/2 md:basis-1/4 lg:basis-1/6',
        container: 'gap-2',
      }"
      class="rounded-lg overflow-hidden"
      arrows
    >
      <!-- Product Card -->
      <div class="flex flex-col h-full group relative">
        <NuxtLink :to="item.id" class="flex-grow">
          <div class="bg-gray-100 w-full h-full flex flex-col">
            <NuxtImg
              :src="item.image"
              class="h-48 w-48 bg-gray-200"
              draggable="false"
            />
            <p class="text-center py-1 px-2 break-words">
              {{ item.productTitle.slice(0, 200) }}..
            </p>

            <!-- Writer Or Brand -->
            <p class="text-gray-500 text-sm text-center">
              {{ item.brand ? item.brand : item.writer }}
            </p>

            <!-- Price -->
            <div class="flex justify-center text-base font-semibold gap-2">
              <p :class="item.offerPrice ? 'line-through' : ''">
                TK: {{ item?.price }}
              </p>
              <p v-if="item.offerPrice">TK: {{ item?.offerPrice }}</p>
            </div>
          </div>
        </NuxtLink>
      </div>
    </UCarousel>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, defineProps } from "vue";

const props = defineProps<{
  items: {
    id: string;
    preOrder: boolean;
    canRead: boolean;
    productTitle: string;
    image: string;
    offer: number;
    review: { rating: number; count: number };
    stock: number;
    price: number;
    offerPrice?: number;
    brand?: string;
    writer?: string;
  }[];
  title: string;
  buttonLink: string;
  classList: string;
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
