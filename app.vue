<template>
  <div class="flex flex-col gap-8 justify-center items-center w-full py-4 p-4" >
   <div class="flex gap-4">
    <b>What's your name ?</b>
    <input type="text" v-model="name" class="border text-center"/>
   </div>
   <div class="">
      <p>Hello {{ name }} !</p>
   </div>

   <div class="grid">
    <div class="columns-8">
      <div v-for="(breed, id) in breeds" :key="breed" >
        <button class="py-1 px-3 border flex justify-center items-center rounded-lg hover:text-gray-400 transition-all" 
        @click="currentBreed = breed"
        >
          {{ breed }}
        </button>
      </div>
    </div>

    <div class="flex justify-center items-center">
      <div v-if="currentBreed">
        <img :src="`https://dog.ceo/api/breed/${currentBreed}/images/random`" :alt="currentBreed">
      </div>
      <div v-else>
        <div>hi</div>
      </div>
    </div>
    
   </div>
  </div>
</template>

<script setup>
// from https://dog.ceo/dog-api/breeds-list

const name = ref("dogs")
const currentBreed = ref("")

const {data} = await useFetch("https://dog.ceo/api/breeds/list/all")
const breeds = Object.keys(data.value.message)
console.log(breeds)


</script>
