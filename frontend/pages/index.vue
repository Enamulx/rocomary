<script setup lang="ts">
const addImage = [
  { id: 1, image: "/home/carousel/home-carousel1.png" },
  { id: 2, image: "/home/carousel/home-carousel2.png" },
  { id: 3, image: "/home/carousel/home-carousel3.png" },
  { id: 4, image: "/home/carousel/home-carousel4.png" },
  { id: 5, image: "/home/carousel/home-carousel5.png" },
  { id: 6, image: "/home/carousel/home-carousel6.png" },
  { id: 7, image: "/home/carousel/home-carousel7.png" },
];

const recentImage = [
  { id: 1, image: "/home/recent/recent1.png" },
  { id: 2, image: "/home/recent/recent2.png" },
  { id: 3, image: "/home/recent/recent3.png" },
  { id: 4, image: "/home/recent/recent4.png" },
  { id: 5, image: "/home/recent/recent5.png" },
  { id: 6, image: "/home/recent/recent6.png" },
  { id: 7, image: "/home/recent/recent7.png" },
  { id: 8, image: "/home/recent/recent8.png" },
  { id: 9, image: "/home/recent/recent9.png" },
  { id: 10, image: "/home/recent/recent10.png" },
  { id: 11, image: "/home/recent/recent11.png" },
];
</script>

<template>
  <main class="bg-gray-100">
    <UContainer>
      <div class="py-4">
        <CommonCarouselAd :items="addImage" />
      </div>
      <div class="py-4">
        <CommonCarouselRecentlyViewed :items="recentImage" />
      </div>
    </UContainer>
  </main>
</template>
