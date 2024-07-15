<script setup lang="ts">
const carouselItems = [
  "/home/carousel/home-carousel1.png",
  "/home/carousel/home-carousel2.png",
  "/home/carousel/home-carousel3.png",
  "/home/carousel/home-carousel4.png",
  "/home/carousel/home-carousel5.png",
  "/home/carousel/home-carousel6.png",
  "/home/carousel/home-carousel7.png",
];
</script>

<template>
  <UContainer>
    <div class="py-4">
      <CommonCarouselAd :items="carouselItems" />
    </div>
  </UContainer>
</template>
