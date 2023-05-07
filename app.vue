<template>
  <div class=" flex flex-col gap-8 justify-center items-center w-full py-4 p-4" >
    <div class="relative bg-gray-200 p-10 md:p-20 w-full rounded-xl flex flex-col justify-center items-center gap-4">
      <h2 class="text-black text-lg md:text-3xl font-bold capitalize font-sans">Find dog breed 🐶</h2>
      <input type="text" v-model="currentBreed" class="border text-center rounded-md p-2"/>
      <div class="absolute bottom-6 right-6 ">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-16 md:w-32" viewBox="0 0 48 48"><path fill="#45413c" d="M5.28 44.32a17.91 1.68 0 1 0 35.82 0a17.91 1.68 0 1 0-35.82 0Z" opacity=".15"/><path fill="#f7e5c6" d="M44.5 11.54a6.92 6.92 0 0 0-7.19-1.67a1.43 1.43 0 0 0-.92 1.7a1.45 1.45 0 0 0 1.3 1.08c1.44.1 3.79.82 2.89 4.49a6.18 6.18 0 0 1-3.69 4.65a5.72 5.72 0 0 0-3.7-1.15l-7.75.36a7.15 7.15 0 0 1-6.63-3.82a6.68 6.68 0 0 1-.65-1.9l-.4-2a4.66 4.66 0 0 0-4.16-3.73c-1.66-.15-4.36.58-5.32 1.94L7 13.22l-3.39.9a1.11 1.11 0 0 0-.87 1.34l.73 3.32a1.15 1.15 0 0 0 .72.81L8.2 21a2.88 2.88 0 0 1 1.86 2.27l.94 6.16a7.12 7.12 0 0 0 .87 2.48l-.68 8.86a2.14 2.14 0 0 0-1.9 2.13a1.1 1.1 0 0 0 1.1 1.1h3.71a1.12 1.12 0 0 0 1-.7l3-7.36a13.89 13.89 0 0 0 6.69 0l3.47-.86a12.15 12.15 0 0 1 3.94-.21A14.37 14.37 0 0 0 33.46 37a5.18 5.18 0 0 1 .74 3.17l-.05.6a2.15 2.15 0 0 0-2.22 2.15A1.1 1.1 0 0 0 33 44h4a1.12 1.12 0 0 0 1-.8l1.78-5.91c.66-1.92-1-2.51-1-5.48l.21-.57a9 9 0 0 0-.48-7.4c8.37-.1 9.78-8.84 5.99-12.3Z"/><path fill="#fff5e3" d="M3.14 17.09a1.14 1.14 0 0 1 .51-.27L7 15.93l1.24-1.74c1-1.35 3.66-2.09 5.32-1.94a4.67 4.67 0 0 1 4.2 3.75l.4 1.95a6.79 6.79 0 0 0 .65 1.9a7.17 7.17 0 0 0 6.63 3.82l7.75-.32a5.77 5.77 0 0 1 3.7 1.14a6.14 6.14 0 0 0 3.69-4.65a4.56 4.56 0 0 0 0-2.69a6.22 6.22 0 0 1-3.69 4.64a5.72 5.72 0 0 0-3.7-1.15l-7.75.36a7.15 7.15 0 0 1-6.63-3.82a6.68 6.68 0 0 1-.65-1.9l-.4-2a4.66 4.66 0 0 0-4.16-3.73c-1.66-.15-4.36.58-5.32 1.94L7 13.22l-3.39.9a1.11 1.11 0 0 0-.87 1.34Zm34.21-4.52a6.9 6.9 0 0 1 7.15 1.68a6.27 6.27 0 0 1 1.87 3.55a6.93 6.93 0 0 0-9.06-7.93a1.43 1.43 0 0 0-.92 1.7a1.4 1.4 0 0 0 .96 1Z"/><path fill="none" stroke="#45413c" stroke-linecap="round" stroke-linejoin="round" d="M44.5 11.54a6.92 6.92 0 0 0-7.19-1.67a1.43 1.43 0 0 0-.92 1.7a1.45 1.45 0 0 0 1.3 1.08c1.44.1 3.79.82 2.89 4.49a6.18 6.18 0 0 1-3.69 4.65a5.72 5.72 0 0 0-3.7-1.15l-7.75.36a7.15 7.15 0 0 1-6.63-3.82a6.68 6.68 0 0 1-.65-1.9l-.4-2a4.66 4.66 0 0 0-4.16-3.73c-1.66-.15-4.36.58-5.32 1.94L7 13.22l-3.39.9a1.11 1.11 0 0 0-.87 1.34l.73 3.32a1.15 1.15 0 0 0 .72.81L8.2 21a2.88 2.88 0 0 1 1.86 2.27l.94 6.16a7.12 7.12 0 0 0 .87 2.48l-.68 8.86a2.14 2.14 0 0 0-1.9 2.13a1.1 1.1 0 0 0 1.1 1.1h3.71a1.12 1.12 0 0 0 1-.7l3-7.36a13.89 13.89 0 0 0 6.69 0l3.47-.86a12.15 12.15 0 0 1 3.94-.21A14.37 14.37 0 0 0 33.46 37a5.18 5.18 0 0 1 .74 3.17l-.05.6a2.15 2.15 0 0 0-2.22 2.15A1.1 1.1 0 0 0 33 44h4a1.12 1.12 0 0 0 1-.8l1.78-5.91c.66-1.92-1-2.51-1-5.48l.21-.57a9 9 0 0 0-.48-7.4c8.37-.1 9.78-8.84 5.99-12.3Z"/><path fill="#fff" stroke="#45413c" stroke-linecap="round" stroke-linejoin="round" d="m18.07 35.94l1.25-3.13"/><path fill="none" stroke="#45413c" stroke-linecap="round" stroke-linejoin="round" d="m31.54 29.45l-.19 2a7 7 0 0 0 .82 3.4"/><path fill="#fff5e3" stroke="#45413c" stroke-linecap="round" stroke-linejoin="round" d="M12.6 10.42a19.46 19.46 0 0 1 1.12-3.91c.35-.63 2.45 1.18 2.24 5.59"/><path fill="#45413c" d="M11.08 13.89a.9.9 0 1 1-.89-.89a.89.89 0 0 1 .89.89Z"/><path fill="#ffaa54" d="M12.6 15.52c0 .25.4.45.9.45s.89-.2.89-.45s-.4-.45-.89-.45s-.9.2-.9.45Z"/></svg>
      </div>
    </div>
   <div class="px-8">
    <div class="flex flex-wrap overflow-x-auto mx-auto w-[300px] md:w-full h-48 md:h-auto">
      <div v-for="(breed, id) in breeds" :key="breed">
        <button class="hover:animate-pulse py-1 px-3 my-2 border bg-teal-500 text-white font-medium hover:bg-teal-500 flex justify-center items-center rounded-lg transition-all" 
        @click="currentBreed = breed"
        >
          {{ breed }}
        </button>
      </div>
    </div>

    <div class="flex flex-col justify-center items-center">
      <Transition name="fade">
      <div v-if="breedImage" class="space-y-4 my-8">
        <p class="text-center text-xl">A <span class="font-semibold">{{ currentBreed }}</span> !</p>
        <Doggo :src="breedImage" />
      </div>

      <div class="text-gray-500 my-6 pt-32 flex justify-center items-center" v-else>
       Not found, try another bread :)
      </div>
    </Transition>

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

const randomColor = Math.floor(Math.random()*16777215).toString(16);
console.log('randomcolor', randomColor)



console.log("breedimage", breedImage)
</script>

<style>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

</style>
