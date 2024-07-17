<script setup lang="ts">
const isOpen = ref(false);
const singleProduct = {
  id: "objectId",
  title:
    "রাষ্ট্রবিজ্ঞানের ধারণা, দুনিয়াতে প্রচলিত রাজনৈতিক মতবাদ, বিভিন্ন শাসনতন্ত্র পরিচিতি ইসলামী রাজনীতির মূলনীতি এবং বর্তমানে বাস্তব প্রয়োগ",
  canRead: true,
  preOrder: false,
  offer: 20,
  price: 120,
  offerPrice: 100,
  wantedUsersCount: 4,
  reviewCount: 12,
  review: { rating: 4.5, count: 20 },
  writer:
    "(شيخ الاسلام مفتي محمد تقي عثماني) শাইখুল ইসলাম মুফতী মুহাম্মাদ তাকী উসমানী",
  brand: "",
  bestSellerNo: 3,
  category: "ইসলামি অঞ্চল, শাসনব্যবস্থা ও রাজনীতি",
  coverType: "হার্ডকভার",
  specification: {
    title: "ইসলাম ও রাজনীতি",
    author:
      "(شيخ الاسلام مفتي محمد تقي عثماني) শাইখুল ইসলাম মুফতী মুহাম্মাদ তাকী উসমানী",
    translator: { id: "translator_id", name: "মাওঃ মুহাম্মদ আব্দুল আলীম" },
    publisher: "مكتبة الحراء (মাকতাবাতুল হেরা)",
    isbn: "9789849115342",
    edition: "1",
    pageCount: "450",
    country: "Bangladesh",
    language: "Bangla",
  },
  author: {
    id: "id",
    img: "",
    followersCount: 1000,
    name: "(شيخ الاسلام مفتي محمد تقي عثماني) শাইখুল ইসলাম মুফতী মুহাম্মাদ তাকী উসমানী",
    description: "",
  },
  relatedCategory: [
    "Category1",
    "Category1",
    "Category1",
    "Category1",
    "Category1",
    "Category1",
    "Category1",
    "Category1",
  ],
};

const reviews = [
  { id: "id", reviewText: "" },
  { id: "id", reviewText: "" },
  { id: "id", reviewText: "" },
  { id: "id", reviewText: "" },
];
</script>

<template>
  <section class="bg-gray-100">
    <UContainer>
      <!-- Details & Related Products -->
      <div class="md:grid grid-cols-7 bg-white">
        <!-- Details -->
        <div class="bg-white md:col-span-5 md:p-8 p-4">
          <div class="w-[40%] flex flex-col gap-4 justify-center">
            <!-- Imgae -->
            <div class="w-fit mx-auto border-2 p-8">
              <img class="" src="/details-page/details-img.png" alt="Image" />
            </div>
            <!-- Buttons -->
            <div class="flex justify-center gap-1">
              <UButton
                size="xl"
                color="gray"
                variant="solid"
                label="Want To Read"
                class="font-medium text-lg"
              />
              <UButton @click="isOpen = true" color="gray" variant="solid">
                <template #trailing>
                  <UIcon
                    name="material-symbols:keyboard-arrow-down"
                    class="w-5 h-5"
                    dynamic
                  />
                </template>
              </UButton>
            </div>
          </div>
          <div class="w-[60%]"></div>
        </div>

        <!-- Related Products -->
        <div class="bg-gray-50 md:p-8 p-4 col-span-2"></div>
      </div>
    </UContainer>

    <!-- Modal For Book Lovers -->
  </section>
</template>
