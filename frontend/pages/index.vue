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
			<div class="py-4">
				<CommonCarouselSquare
					buttonLink="/buttonLink"
					title="বেস্ট সেলার বিষয়"
					:items="bestSellerImage"
				/>
			</div>
		</UContainer>
	</main>
</template>
