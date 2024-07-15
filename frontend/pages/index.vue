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
  "/home/recent/recent1.png",
  "/home/recent/recent2.png",
  "/home/recent/recent3.png",
  "/home/recent/recent4.png",
  "/home/recent/recent5.png",
  "/home/recent/recent6.png",
  "/home/recent/recent7.png",
  "/home/recent/recent8.png",
  "/home/recent/recent9.png",
  "/home/recent/recent10.png",
  "/home/recent/recent11.png",
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
