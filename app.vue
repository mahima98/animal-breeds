<template>
  <div class="flex flex-col gap-8 justify-center items-center w-full py-4 p-4" >
   <div class="flex gap-4">
    <b>Search  breed :</b>
    <input type="text" v-model="currentBreed" class="border text-center"/>
   </div>
   <div class="">
      <p>Hello {{ currentBreed }} !</p>
   </div>

   <div class="grid grid-cols-5">
    <div class="col-span-2 columns-4">
      <div v-for="(breed, id) in breeds" :key="breed" >
        <button class="py-1 px-3 border flex justify-center items-center rounded-lg hover:text-gray-400 transition-all" 
        @click="currentBreed = breed"
        >
          {{ breed }}
        </button>
      </div>
    </div>

    <div class="col-span-3 flex justify-center items-center">
      <div v-if="breedImage">
        <Doggo :src="breedImage" />
      </div>
      <div class="text-gray-500" v-else>
        <div> Not found, try another bread :) </div>
      </div>
    </div>
    
   </div>
  </div>
</template>

<script setup>
// from https://dog.ceo/dog-api/breeds-list

const name = ref("dogs"); 
const currentBreed = ref("");

const {data: breedImage} = useFetch(
  () => `https://dog.ceo/api/breed/${currentBreed.value}/images/random`,
  {
    transform: (res) => res.message
  }
);

const {data: breeds} = useFetch(
  "https://dog.ceo/api/breeds/list/all",
  {
    transform: (res) => Object.keys(res.message)
  }
);


console.log("breedimage", breedImage)
</script>
