<script setup>
const others =[
  1,2,3,4,5,5,3,3,3,3,3,3,,3,3
]


  const sort = [
  "Best Seller",
    "New Released",
    "Price- Low to High",
    "Price- High to Low",
    "Discount- Low to High",
    "Discount- High to Low",
  ];


  const origin = [
    "China",
    "Japan",
    "India",
    "Bangladesh",
    "UK",
    "Vietnam",
    "Bangladesh & Abroad"

  ];

  const companies = [
    "Non-Brand",
    "Sunford",
    "Geepas",
    "Nextool",
    "Click",
    "Joykaly",
    "Bright Skills",
    "Boots",
    "Al-Hera Multimedia",
    "Azan Lifestyle",
    "IT-Bari",
    "MINI GT",
    "Xiaomi",
    "Weidasi"
    ];

    const authors = [
      "William Shakespeare",
      "Jane Austen",
      "Charles Dickens",
      "George Orwell",
      "Virginia Woolf",
      "J.R.R. Tolkien",
      "Mary Shelley",
      "Thomas Hardy",
      "Emily Brontë",
      "Agatha Christie",
      "Rabindranath Tagore",
      "R.K. Narayan",
      "Arundhati Roy",
      "Salman Rushdie",
      "Jhumpa Lahiri",
      "Chetan Bhagat",
      "Vikram Seth",
      "Ruskin Bond",
      "Anita Desai",
      "Khushwant Singh"
    ];

</script>
<template>
	<main class="bg-gray-100">
		<UContainer>

      <!--Side Bar-->

      <!--Shop by Categories-->

      <section class="flex space-x-10"> 
        <div>
          <div class="bg-white p-4 rounded-lg shadow-lg w-64 mt-10">
          <h2 class="text-lg font-semibold mb-4">Sort</h2>
          <hr>
          <div class="max-h-64 overflow-y-auto mt-4">
              <div class="flex flex-col  mb-2">
                    <div class="text-gray-700" v-for="item in sort" :key="item.id">
                    <input
                      type="radio"
                      class="h-4 w-4 text-gray-600 mr-2"
                      :id="'radio-' + index"
                    name="countryOfOrigin"
                    :value="item"
                    />
                    {{ item }}
                </div>
              </div>
            </div>
          </div>
      <br />


          <!-- Sort Origin -->

          <div class="bg-white p-4 rounded-lg shadow-lg w-64">
          <h2 class="text-lg font-semibold mb-4">Country of Origin</h2>
          <hr>
          <div class="max-h-64 overflow-y-auto mt-4">
              <div class="flex flex-col  mb-2">
                    <div class="text-gray-700" v-for="item in origin" :key="item.id">
                    <input
                      type="radio"
                      class="h-4 w-4 text-gray-600 mr-2" 
                      :id="'radio-' + index"
                      name="countryOfOrigin"
                      :value="item"/>
                    {{ item }}
                    </div>
                  </div>
                </div>
              </div>
          <br />

          <!--In Stock-->
          
          <div class="bg-white shadow-md rounded-lg p-4 w-64">
            <ul class="mt-2 space-y-2">
              <li class="flex items-center">
                <input
                  type="checkbox"
                  class="mr-2"
                />
                <label for="smart-phones" class="text-gray-700"
                  >In Stock</label
                >
              </li>
            </ul>
          </div>
          <br>


          <!--By Companies Categories-->


          <div class="bg-white p-4 rounded-lg shadow-lg w-64">
          <h2 class="text-lg font-semibold mb-4">By Companies</h2>
          <div class="relative mb-4">
              <input type="text" placeholder="Search"
                  class="w-full px-4 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:border-gray-500" />
                  <UIcon class="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-400 w-4 h-4" name="i-heroicons-magnifying-glass-20-solid" />
          </div>
          <div class="max-h-64 overflow-y-auto">
              <div class="flex flex-col mb-2">
                    <div class="text-gray-700" v-for="item in companies" :key="item.id">
                    <input
                      type="checkbox"
                      class="form-checkbox h-4 w-4 text-gray-600 mr-2"
                      :id="'checkbox-' + index"                     
                    />
                    {{ item }}
                    </div>
                  </div>
                </div>
              </div>
              
          <br>

        
            <!-- By Authors-->

            <div class="bg-white p-4 rounded-lg shadow-lg w-64">
              <h2 class="text-lg font-semibold mb-4">By Authors</h2>
              <div class="relative mb-4">
                  <input type="text" placeholder="Search"
                      class="w-full px-4 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:border-gray-500" />
                      <UIcon class="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-400 w-4 h-4" name="i-heroicons-magnifying-glass-20-solid" />
              </div>
              <div class="max-h-64 overflow-y-auto">
                  <div class="flex flex-col  mb-2">
                        <div class="text-gray-700" v-for="item in authors" :key="item.id">
                        <input
                          type="checkbox"
                          class="form-checkbox h-4 w-4 text-gray-600 mr-2"
                        />
                        {{ item }}
                        </div>
                      </div>
                    </div>
                  </div>
            </div>
        

            
        

            

<!-- Right Section-->



        <div class="mx-auto py-10">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-10">
            <div v-for="item in others" :key="item">
              <CommonCardsCard item: item></CommonCardsCard>
              <!-- Product Card -->
              <div class="bg-white w-64 p-4 rounded-lg shadow-md text-center">
                <div class="relative">
                  <img
                    src="/Home/best-seller/bs1.png"
                    alt="Product Image"
                    class="mx-auto w-32 h-32 object-contain"
                  />
                  <span
                    class="absolute top-0 left-0 bg-yellow-400 text-white text-xs font-bold py-1 px-2 rounded-br-lg"
                    >16% OFF</span
                  >
                </div>
                <h3 class="mt-4 font-semibold text-lg">
                  Voltme Revo 30 Mini C Black Fast Charger
                </h3>
                <p class="text-gray-500">Voltme</p>
                <p class="text-green-600 mt-2">Product In Stock</p>
                <div class="mt-2 text-gray-500 line-through">TK. 1,800</div>
                <div class="text-black text-xl font-bold">TK. 1,512</div>
              </div>
            </div>
            <!--more products  -->
          </div>
        </div>
      </section>


      <!-- Test-->

    
		</UContainer>
	</main>
</template>

<style></style>
