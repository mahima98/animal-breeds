<template>
  <div class="flex flex-col gap-8 justify-center items-center w-full py-4 p-4" >
   <div class="flex gap-4">
    <b>What's your name ?</b>
    <input type="text" v-model="name" class="border text-center"/>
   </div>
   <div class="">
      <p>Hello {{ name }} !</p>
   </div>

   <div class="grid grid-cols-2 md:grid-cols-8 lg:grid-cols-12 gap-4">
    <div v-for="(breed, id) in breeds" key="id" >
        <button class="py-1 px-3 border flex justify-center items-center rounded-lg hover:text-gray-400 transition-all">
          {{ breed }}
        </button>
    </div>
   </div>
  </div>
</template>

<script setup>
// from https://dog.ceo/dog-api/breeds-list

const name = ref("dfg")

const {data} = await useFetch("https://dog.ceo/api/breeds/list/all")
const breeds = Object.keys(data.value.message)
console.log(breeds)


</script>
