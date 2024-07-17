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

const bestSellerImage = [
  {
    id: 1,
    image: "/home/best-seller/bs1.png",
    productName: "ইসলামি বই",
    link: "/recent1",
  },
  {
    id: 2,
    image: "/home/best-seller/bs2.png",
    productName: "উপন্যাস",
    link: "/recent2",
  },
  {
    id: 3,
    image: "/home/best-seller/bs3.png",
    productName: "ভর্তি, নিয়োগ ও প্রস্তুতি পরীক্ষা",
    link: "/recent3",
  },
  {
    id: 4,
    image: "/home/best-seller/bs4.png",
    productName: "শিশু-কিশোর বই",
    link: "/recent4",
  },
  {
    id: 5,
    image: "/home/best-seller/bs5.png",
    productName: "Recent Image 5",
    link: "/recent5",
  },
  {
    id: 6,
    image: "/home/best-seller/bs6.png",
    productName: "Recent Image 6",
    link: "/recent6",
  },
  {
    id: 7,
    image: "/home/best-seller/bs7.png",
    productName: "Recent Image 7",
    link: "/recent7",
  },
  {
    id: 8,
    image: "/home/best-seller/bs8.png",
    productName: "Recent Image 8",
    link: "/recent8",
  },
  {
    id: 9,
    image: "/home/best-seller/bs9.png",
    productName: "Recent Image 9",
    link: "/recent9",
  },
  {
    id: 10,
    image: "/home/best-seller/bs10.png",
    productName: "Recent Image 10",
    link: "/recent10",
  },
  {
    id: 11,
    image: "/home/best-seller/bs11.png",
    productName: "Recent Image 11",
    link: "/recent11",
  },
  {
    id: 12,
    image: "/home/best-seller/bs12.png",
    productName: "Recent Image 12",
    link: "/recent12",
  },
  {
    id: 13,
    image: "/home/best-seller/bs13.png",
    productName: "Recent Image 13",
    link: "/recent13",
  },
  {
    id: 14,
    image: "/home/best-seller/bs14.png",
    productName: "Recent Image 14",
    link: "/recent14",
  },
];

const recentImage = [
  {
    id: 1,
    image: "/home/best-seller/bs1.png",
    productName: "Recent Image 1",
    link: "/recent1",
  },
  {
    id: 2,
    image: "/home/recent/recent2.png",
    productName: "Recent Image 2",
    link: "/recent2",
  },
  {
    id: 3,
    image: "/home/recent/recent3.png",
    productName: "Recent Image 3",
    link: "/recent3",
  },
  {
    id: 4,
    image: "/home/recent/recent4.png",
    productName: "Recent Image 4",
    link: "/recent4",
  },
  {
    id: 5,
    image: "/home/recent/recent5.png",
    productName: "Recent Image 5",
    link: "/recent5",
  },
  {
    id: 6,
    image: "/home/recent/recent6.png",
    productName: "Recent Image 6",
    link: "/recent6",
  },
  {
    id: 7,
    image: "/home/recent/recent7.png",
    productName: "Recent Image 7",
    link: "/recent7",
  },
  {
    id: 8,
    image: "/home/recent/recent8.png",
    productName: "Recent Image 8",
    link: "/recent8",
  },
  {
    id: 9,
    image: "/home/recent/recent9.png",
    productName: "Recent Image 9",
    link: "/recent9",
  },
  {
    id: 10,
    image: "/home/recent/recent10.png",
    productName: "Recent Image 10",
    link: "/recent10",
  },
  {
    id: 11,
    image: "/home/recent/recent11.png",
    productName: "Recent Image 11",
    link: "/recent11",
  },
  {
    id: 12,
    image: "/home/recent/recent11.png",
    productName: "Recent Image 11",
    link: "/recent11",
  },
  {
    id: 13,
    image: "/home/recent/recent11.png",
    productName: "Recent Image 11",
    link: "/recent11",
  },
  {
    id: 14,
    image: "/home/recent/recent11.png",
    productName: "Recent Image 11",
    link: "/recent11",
  },
];

const products = [
  {
    id: "1",
    preOrder: false,
    canRead: false,
    productTitle:
      "Amazing High Quality Bestseller Product with Great Discounts and Offers 1",
    image: "/Home/discounted-best-seller/dbs1.png",
    offer: 20,
    brand: "Brand 1",
    review: {
      rating: 4,
      count: 100,
    },
    stock: 0,
    price: 100,
  },
  {
    id: "2",
    preOrder: false,
    canRead: false,
    productTitle:
      "Top Rated Bestseller Product by Author 2 with Huge Discount Now",
    image: "/Home/discounted-best-seller/dbs2.png",
    offer: 15,
    writer: "Author 2",
    review: {
      rating: 5,
      count: 150,
    },
    stock: 30,
    price: 120,
  },
  {
    id: "3",
    preOrder: false,
    canRead: false,
    productTitle:
      "Affordable Bestseller Product with Great Reviews and Offers by Author 3",
    image: "/Home/discounted-best-seller/dbs3.png",
    offer: 10,
    writer: "Author 3",
    review: {
      rating: 3,
      count: 200,
    },
    stock: 0,
    price: 90,
    offerPrice: 81,
  },
  {
    id: "4",
    preOrder: false,
    canRead: false,
    productTitle:
      "Highly Recommended Product by Author 4 with Excellent Reviews and Ratings",
    image: "/Home/discounted-best-seller/dbs4.png",
    offer: 25,
    writer: "Author 4",
    review: {
      rating: 4.5,
      count: 250,
    },
    stock: 10,
    price: 150,
    offerPrice: 112.5,
  },
  {
    id: "5",
    preOrder: false,
    canRead: false,
    productTitle:
      "Top Quality Bestseller Item from Author 5 with Special Discount",
    image: "/Home/discounted-best-seller/dbs5.png",
    offer: 5,
    writer: "Author 5",
    review: {
      rating: 4,
      count: 300,
    },
    stock: 60,
    price: 110,
    offerPrice: 104.5,
  },
  {
    id: "6",
    preOrder: false,
    canRead: false,
    productTitle:
      "Bestselling Product with Excellent Reviews by Author 6, Buy Now",
    image: "/Home/discounted-best-seller/dbs6.png",
    offer: 6,
    writer: "Author 6",
    review: {
      rating: 4,
      count: 300,
    },
    stock: 60,
    price: 110,
    offerPrice: 104.5,
  },
  {
    id: "7",
    preOrder: false,
    canRead: false,
    productTitle:
      "Customer Favorite Bestseller Product 7 with Great Reviews and Ratings",
    image: "/Home/discounted-best-seller/dbs7.png",
    offer: 7,
    writer: "Author 7",
    review: {
      rating: 4,
      count: 300,
    },
    stock: 0,
    price: 110,
    offerPrice: 104.5,
  },
  {
    id: "8",
    preOrder: false,
    canRead: false,
    productTitle:
      "Highly Rated Bestseller Product by Author 8, Special Offer Available",
    image: "/Home/discounted-best-seller/dbs8.png",
    offer: 8,
    writer: "Author 8",
    review: {
      rating: 4,
      count: 300,
    },
    stock: 60,
    price: 110,
  },
  {
    id: "9",
    preOrder: false,
    canRead: false,
    productTitle:
      "Popular and Affordable Bestseller Product 9 with Great Discounts",
    image: "/Home/discounted-best-seller/dbs9.png",
    offer: 9,
    writer: "Author 9",
    review: {
      rating: 4,
      count: 300,
    },
    stock: 60,
    price: 110,
    offerPrice: 104.9,
  },
  {
    id: "10",
    preOrder: false,
    canRead: false,
    productTitle:
      "Bestseller with Great Discounts and Excellent Reviews, Buy Product 10",
    image: "/Home/discounted-best-seller/dbs10.png",
    offer: 10,
    writer: "Author 10",
    review: {
      rating: 4,
      count: 300,
    },
    stock: 60,
    price: 110,
    offerPrice: 104.5,
  },
  {
    id: "11",
    preOrder: false,
    canRead: false,
    productTitle:
      "Top Rated Bestseller Product by Author 11 with Great Offers Now",
    image: "/Home/discounted-best-seller/dbs11.png",
    offer: 11,
    writer: "Author 11",
    review: {
      rating: 4,
      count: 300,
    },
    stock: 60,
    price: 110,
    offerPrice: 104.5,
  },
  {
    id: "12",
    preOrder: false,
    canRead: false,
    productTitle:
      "Highly Reviewed Bestseller Product by Author 12, Special Discounts Available",
    image: "/Home/discounted-best-seller/dbs12.png",
    offer: 12,
    writer: "Author 12",
    review: {
      rating: 4,
      count: 300,
    },
    stock: 60,
    price: 110,
    offerPrice: 104.12,
  },
  {
    id: "13",
    preOrder: false,
    canRead: false,
    productTitle:
      "Top Choice Bestseller Product 13 with Special Offers and Discounts",
    image: "/Home/discounted-best-seller/dbs13.png",
    offer: 13,
    writer: "Author 13",
    review: {
      rating: 4,
      count: 300,
    },
    stock: 60,
    price: 110,
    offerPrice: 104.13,
  },
  {
    id: "14",
    preOrder: false,
    canRead: false,
    productTitle: "Best Value Bestseller Product by Author 14, Get It Now",
    image: "/Home/discounted-best-seller/dbs14.png",
    offer: 14,
    writer: "Author 14",
    review: {
      rating: 4,
      count: 300,
    },
    stock: 0,
    price: 110,
  },
  {
    id: "15",
    preOrder: false,
    canRead: false,
    productTitle:
      "Great Discounts on Bestseller Product 15 by Author 15, Buy Now",
    image: "/Home/discounted-best-seller/dbs15.png",
    offer: 15,
    writer: "Author 15",
    review: {
      rating: 4,
      count: 300,
    },
    stock: 60,
    price: 110,
    offerPrice: 104.15,
  },
  {
    id: "16",
    preOrder: false,
    canRead: false,
    productTitle:
      "Exclusive Deal on Bestseller Product 16, Buy Now and Save More",
    image: "/Home/discounted-best-seller/dbs15.png",
    offer: 16,
    writer: "Author 16",
    review: {
      rating: 4,
      count: 300,
    },
    stock: 60,
    price: 110,
    offerPrice: 104.16,
  },
];
</script>

<template>
  <main class="bg-gray-100">
    <UContainer>
      <!-- Advertisement -->
      <div class="py-4">
        <CommonCarouselAd :items="addImage" />
      </div>

      <!-- Recently I view -->
      <div class="py-4">
        <CommonCarouselRecentlyViewed :items="recentImage" />
      </div>

      <!-- Best Seller Square-->
      <div class="py-4">
        <CommonCarouselSquare
          buttonLink="/buttonLink"
          title="বেস্ট সেলার বিষয়"
          :items="bestSellerImage"
        />
      </div>

      <!-- Products -->
      <div class="py-4">
        <CommonCarouselProducts
          :items="products"
          classList=""
          buttonLink="/buttonLink"
          title="সেরা ডিস্কাউন্ট এ বেস্টসেলার বই"
        />
      </div>
    </UContainer>
  </main>
</template>
