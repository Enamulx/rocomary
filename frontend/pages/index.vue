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
		productName: "আত্ম-উন্নয়ন, মোটিভেশনাল ও মেডিটেশন",
		link: "/recent5",
	},
	{
		id: 6,
		image: "/home/best-seller/bs6.png",
		productName: "পশ্চিমবঙ্গের বই",
		link: "/recent6",
	},
	{
		id: 7,
		image: "/home/best-seller/bs7.png",
		productName: "বিদেশি ভাষার বই",
		link: "/recent7",
	},
	{
		id: 8,
		image: "/home/best-seller/bs8.png",
		productName: "রহস্য, গোয়েন্দা, ভৌতিক, থ্রিলার ও অ্যাডভেঞ্চার",
		link: "/recent8",
	},
	{
		id: 9,
		image: "/home/best-seller/bs9.png",
		productName: "গল্প",
		link: "/recent9",
	},
	{
		id: 10,
		image: "/home/best-seller/bs10.png",
		productName: "কম্পিউটার, ইন্টারনেট, ফ্রিল্যান্সিং ও আউটসোর্সিং",
		link: "/recent10",
	},
	{
		id: 11,
		image: "/home/best-seller/bs11.png",
		productName: "গণিত, বিজ্ঞান ও প্রযুক্তি",
		link: "/recent11",
	},
	{
		id: 12,
		image: "/home/best-seller/bs12.png",
		productName: "ইতিহাস ও ঐতিহ্য",
		link: "/recent12",
	},
	{
		id: 13,
		image: "/home/best-seller/bs13.png",
		productName: "ব্যবসা, বিনিয়োগ ও অর্থনীতি",
		link: "/recent13",
	},
	{
		id: 14,
		image: "/home/best-seller/bs14.png",
		productName: "স্বাস্থ্য, পরিচর্যা ও রোগ নিরাময়",
		link: "/recent14",
	},
	{
		id: 15,
		image: "/home/best-seller/bs15.png",
		productName: "প্রফেশনাল, জার্নাল ও রেফারেন্স",
		link: "/recent15",
	},
	{
		id: 16,
		image: "/home/best-seller/bs16.png",
		productName: "মুক্তিযুদ্ধ",
		link: "/recent16",
	},
	{
		id: 17,
		image: "/home/best-seller/bs17.png",
		productName: "ভ্রমণ ও প্রবাস",
		link: "/recent17",
	},
	{
		id: 18,
		image: "/home/best-seller/bs18.png",
		productName: "আইন ও বিচার",
		link: "/recent18",
	},
	{
		id: 19,
		image: "/home/best-seller/bs19.png",
		productName: "রাজনীতি",
		link: "/recent19",
	},
	{
		id: 20,
		image: "/home/best-seller/bs20.png",
		productName: "ছড়া, কবিতা ও আবৃত্তি",
		link: "/recent20",
	},
	{
		id: 21,
		image: "/home/best-seller/bs21.png",
		productName: "সায়েন্স ফিকশন",
		link: "/recent21",
	},
	{
		id: 22,
		image: "/home/best-seller/bs22.png",
		productName: "ইউনিভার্সিটি",
		link: "/recent22",
	},
	{
		id: 23,
		image: "/home/best-seller/bs23.png",
		productName: "বাংলাদেশ",
		link: "/recent23",
	},
	{
		id: 24,
		image: "/home/best-seller/bs24.png",
		productName: "জীবনী, স্মৃতিচারণ ও সাক্ষাৎকার",
		link: "/recent24",
	},
	{
		id: 25,
		image: "/home/best-seller/bs25.png",
		productName: "রচনাসমগ্র/সংকলন",
		link: "/recent25",
	},
	{
		id: 26,
		image: "/home/best-seller/bs26.png",
		productName: "ব্যঙ্গ ও রম্যরচনা",
		link: "/recent26",
	},
	{
		id: 27,
		image: "/home/best-seller/bs27.png",
		productName: "ভাষা ও অভিধান",
		link: "/recent27",
	},
	{
		id: 28,
		image: "/home/best-seller/bs28.png",
		productName: "দর্শন",
		link: "/recent28",
	},
	{
		id: 29,
		image: "/home/best-seller/bs29.png",
		productName: "প্রবন্ধ",
		link: "/recent29",
	},
	{
		id: 30,
		image: "/home/best-seller/bs30.png",
		productName: "একাডেমিক বই",
		link: "/recent30",
	},
	{
		id: 31,
		image: "/home/best-seller/bs31.png",
		productName: "অমর একুশে গ্রন্থমেলা",
		link: "/recent31",
	},
	{
		id: 32,
		image: "/home/best-seller/bs32.png",
		productName: "অলিম্পিয়াড",
		link: "/recent32",
	},
	{
		id: 33,
		image: "/home/best-seller/bs33.png",
		productName: "কমিক্স, নকশা ও ছবির গল্প",
		link: "/recent33",
	},
	{
		id: 34,
		image: "/home/best-seller/bs34.png",
		productName: "কৃষি ও কৃষক",
		link: "/recent34",
	},
	{
		id: 35,
		image: "/home/best-seller/bs35.png",
		productName: "খেলাধুলা",
		link: "/recent35",
	},
	{
		id: 36,
		image: "/home/best-seller/bs36.png",
		productName: "গণমাধ্যম ও সাংবাদিকতা",
		link: "/recent36",
	},
	{
		id: 37,
		image: "/home/best-seller/bs37.png",
		productName: "ড্রয়িং, পেইন্টিং ডিজাইন ও ফটোগ্রাফি",
		link: "/recent37",
	},
	{
		id: 38,
		image: "/home/best-seller/bs38.png",
		productName: "নাটকের বই",
		link: "/recent38",
	},
	{
		id: 39,
		image: "/home/best-seller/bs39.png",
		productName: "পরিবার ও প্যারেন্টিং",
		link: "/recent39",
	},
	{
		id: 40,
		image: "/home/best-seller/bs40.png",
		productName: "পুরস্কারপ্রাপ্ত বই",
		link: "/recent40",
	},
	{
		id: 41,
		image: "/home/best-seller/bs41.png",
		productName: "প্রাণী ও জীবজগৎ",
		link: "/recent41",
	},
	{
		id: 42,
		image: "/home/best-seller/bs42.png",
		productName: "রান্নাবান্না, খাদ্য ও পুষ্টি",
		link: "/recent42",
	},
	{
		id: 43,
		image: "/home/best-seller/bs43.png",
		productName: "সংগীত, চলচ্চিত্র ও বিনোদন",
		link: "/recent43",
	},
	{
		id: 44,
		image: "/home/best-seller/bs44.png",
		productName: "সমাজ, সভ্যতা ও সংস্কৃতি",
		link: "/recent44",
	},
	{
		id: 45,
		image: "/home/best-seller/bs45.png",
		productName: "আরবি ও উর্দূ ভাষার বই",
		link: "/recent45",
	},
	{
		id: 46,
		image: "/home/best-seller/bs46.png",
		productName: "ফ্যাশন ও রূপচর্চা",
		link: "/recent46",
	},
	{
		id: 47,
		image: "/home/best-seller/bs46.png",
		productName: "রকমারি কালেকশন",
		link: "/recent47",
	},
	{
		id: 48,
		image: "/home/best-seller/bs46.png",
		productName: "রকমারি ক্যারিয়ার",
		link: "/recent48",
	},
	{
		id: 49,
		image: "/home/best-seller/bs46.png",
		productName: "রকমারি নির্বাচিত বই",
		link: "/recent49",
	},
	{
		id: 50,
		image: "/home/best-seller/bs46.png",
		productName: "অতিরিক্ত ছাড়ের বই",
		link: "/recent50",
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
		offer: 0,
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
		offer: 0,
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
