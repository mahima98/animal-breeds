<script setup lang="ts">
import { debounce } from 'vue-debounce'
// from https://dog.ceo/dog-api/breeds-list

const name = ref("dogs");
const currentBreed = ref("chow");
const searchBreed = ref("chow");

const { data: breedImage, status, error: breedImageError, refresh, pending: breedImagePending } = useFetch(
  () => `https://dog.ceo/api/breed/${currentBreed.value}/images/random`, {
  server: false,
  transform: (res: { message: string }) => res.message
})

const { data: breeds } = useFetch(
  "https://dog.ceo/api/breeds/list/all",
  {
    server: false,
    transform: (res: { message: Record<string, unknown> }) => Object.keys(res.message)
  }
);

const debouncedUpdateBreed = debounce((breed: string) => {
  // Only set currentBreed if the breed exists in the list
  if (breeds.value && breeds.value.includes(breed)) {
    currentBreed.value = breed;
  }
}, 500);

const onSelectBreed = ((breed: string) => {
  searchBreed.value = breed;
  currentBreed.value = breed;
});

watch(searchBreed, (newBreed) => {
  // Only clear currentBreed if the breed is invalid
  if (!breeds.value || !breeds.value.includes(newBreed)) {
    currentBreed.value = "";
  }
  debouncedUpdateBreed(newBreed);
});

watch(breedImageError, (error) => {
  if (error) {
    currentBreed.value = "";
  }
});

const randomColor = Math.floor(Math.random() * 16777215).toString(16);
console.log('randomcolor', randomColor)

console.log("breedimage", breedImage)
</script>


<template>

  <div class=" flex flex-col gap-8 justify-center items-center w-full">
    <div class="relative bg-amber-50 px-8 py-8 w-full rounded-xl flex flex-col justify-center items-center gap-6">
      <h2 class="text-amber-900 text-lg md:text-4xl font-semibold">Find a dog breed 🐶</h2>
      <input type="text" data-test="dog-input" v-model="searchBreed" class="border-[2px] border-amber-200 text-center rounded-lg p-2  text-amber-900" />
      <div class="absolute bottom-6 right-6 ">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-16 md:w-32" viewBox="0 0 48 48">
          <path fill="#45413c" d="M5.28 44.32a17.91 1.68 0 1 0 35.82 0a17.91 1.68 0 1 0-35.82 0Z" opacity=".15" />
          <path fill="#f7e5c6"
            d="M44.5 11.54a6.92 6.92 0 0 0-7.19-1.67a1.43 1.43 0 0 0-.92 1.7a1.45 1.45 0 0 0 1.3 1.08c1.44.1 3.79.82 2.89 4.49a6.18 6.18 0 0 1-3.69 4.65a5.72 5.72 0 0 0-3.7-1.15l-7.75.36a7.15 7.15 0 0 1-6.63-3.82a6.68 6.68 0 0 1-.65-1.9l-.4-2a4.66 4.66 0 0 0-4.16-3.73c-1.66-.15-4.36.58-5.32 1.94L7 13.22l-3.39.9a1.11 1.11 0 0 0-.87 1.34l.73 3.32a1.15 1.15 0 0 0 .72.81L8.2 21a2.88 2.88 0 0 1 1.86 2.27l.94 6.16a7.12 7.12 0 0 0 .87 2.48l-.68 8.86a2.14 2.14 0 0 0-1.9 2.13a1.1 1.1 0 0 0 1.1 1.1h3.71a1.12 1.12 0 0 0 1-.7l3-7.36a13.89 13.89 0 0 0 6.69 0l3.47-.86a12.15 12.15 0 0 1 3.94-.21A14.37 14.37 0 0 0 33.46 37a5.18 5.18 0 0 1 .74 3.17l-.05.6a2.15 2.15 0 0 0-2.22 2.15A1.1 1.1 0 0 0 33 44h4a1.12 1.12 0 0 0 1-.8l1.78-5.91c.66-1.92-1-2.51-1-5.48l.21-.57a9 9 0 0 0-.48-7.4c8.37-.1 9.78-8.84 5.99-12.3Z" />
          <path fill="#fff5e3"
            d="M3.14 17.09a1.14 1.14 0 0 1 .51-.27L7 15.93l1.24-1.74c1-1.35 3.66-2.09 5.32-1.94a4.67 4.67 0 0 1 4.2 3.75l.4 1.95a6.79 6.79 0 0 0 .65 1.9a7.17 7.17 0 0 0 6.63 3.82l7.75-.32a5.77 5.77 0 0 1 3.7 1.14a6.14 6.14 0 0 0 3.69-4.65a4.56 4.56 0 0 0 0-2.69a6.22 6.22 0 0 1-3.69 4.64a5.72 5.72 0 0 0-3.7-1.15l-7.75.36a7.15 7.15 0 0 1-6.63-3.82a6.68 6.68 0 0 1-.65-1.9l-.4-2a4.66 4.66 0 0 0-4.16-3.73c-1.66-.15-4.36.58-5.32 1.94L7 13.22l-3.39.9a1.11 1.11 0 0 0-.87 1.34Zm34.21-4.52a6.9 6.9 0 0 1 7.15 1.68a6.27 6.27 0 0 1 1.87 3.55a6.93 6.93 0 0 0-9.06-7.93a1.43 1.43 0 0 0-.92 1.7a1.4 1.4 0 0 0 .96 1Z" />
          <path fill="none" stroke="#45413c" stroke-linecap="round" stroke-linejoin="round"
            d="M44.5 11.54a6.92 6.92 0 0 0-7.19-1.67a1.43 1.43 0 0 0-.92 1.7a1.45 1.45 0 0 0 1.3 1.08c1.44.1 3.79.82 2.89 4.49a6.18 6.18 0 0 1-3.69 4.65a5.72 5.72 0 0 0-3.7-1.15l-7.75.36a7.15 7.15 0 0 1-6.63-3.82a6.68 6.68 0 0 1-.65-1.9l-.4-2a4.66 4.66 0 0 0-4.16-3.73c-1.66-.15-4.36.58-5.32 1.94L7 13.22l-3.39.9a1.11 1.11 0 0 0-.87 1.34l.73 3.32a1.15 1.15 0 0 0 .72.81L8.2 21a2.88 2.88 0 0 1 1.86 2.27l.94 6.16a7.12 7.12 0 0 0 .87 2.48l-.68 8.86a2.14 2.14 0 0 0-1.9 2.13a1.1 1.1 0 0 0 1.1 1.1h3.71a1.12 1.12 0 0 0 1-.7l3-7.36a13.89 13.89 0 0 0 6.69 0l3.47-.86a12.15 12.15 0 0 1 3.94-.21A14.37 14.37 0 0 0 33.46 37a5.18 5.18 0 0 1 .74 3.17l-.05.6a2.15 2.15 0 0 0-2.22 2.15A1.1 1.1 0 0 0 33 44h4a1.12 1.12 0 0 0 1-.8l1.78-5.91c.66-1.92-1-2.51-1-5.48l.21-.57a9 9 0 0 0-.48-7.4c8.37-.1 9.78-8.84 5.99-12.3Z" />
          <path fill="#fff" stroke="#45413c" stroke-linecap="round" stroke-linejoin="round"
            d="m18.07 35.94l1.25-3.13" />
          <path fill="none" stroke="#45413c" stroke-linecap="round" stroke-linejoin="round"
            d="m31.54 29.45l-.19 2a7 7 0 0 0 .82 3.4" />
          <path fill="#fff5e3" stroke="#45413c" stroke-linecap="round" stroke-linejoin="round"
            d="M12.6 10.42a19.46 19.46 0 0 1 1.12-3.91c.35-.63 2.45 1.18 2.24 5.59" />
          <path fill="#45413c" d="M11.08 13.89a.9.9 0 1 1-.89-.89a.89.89 0 0 1 .89.89Z" />
          <path fill="#ffaa54" d="M12.6 15.52c0 .25.4.45.9.45s.89-.2.89-.45s-.4-.45-.89-.45s-.9.2-.9.45Z" />
        </svg>
      </div>
    </div>

    <div class="flex flex-col gap-6 px-4">
     
      <div class="h-full max-h-[150px] overflow-y-auto">
        <div v-if="breeds && breeds.length"
          class="flex flex-wrap gap-3 overflow-x-auto mx-auto w-[300px] md:w-full h-48 md:h-auto">
          <div v-for="(breed, id) in breeds" :key="breed">
            <button
              class="py-1 px-2 bg-yellow-400 hover:bg-yellow-300 text-yellow-900 font-thin tracking-wide  flex justify-center items-center rounded-lg transition-all"
              @click="onSelectBreed(breed)">
              {{ breed }}
            </button>
          </div>
        </div>
       
      </div>

      <div class="flex flex-col justify-center items-center">
        <TransitionGroup name="fade">
          <div v-if="!searchBreed" class="text-gray-500 my-6   flex justify-center items-center" data-test="dog-no-selection">
              Select or input a breed name
          </div>
          <div v-else-if="breedImageError && !breedImagePending && !currentBreed" class="text-gray-500 my-6   flex justify-center items-center" data-test="dog-selected-not-found">
              Not found, try another bread :/
          </div>
          <div v-else class="space-y-6">
            <p class="text-center text-2xl text-yellow-900">A <span class="font-semibold" data-test="dog-selected">{{ currentBreed
            }}</span> !</p>
            <Doggo v-if="!breedImagePending" :src="breedImage" />
            <div v-else class="flex items-center justify-center  h-56 w-56  text-yellow-900 text-xs font-medium rounded-base">
              <div role="status">
                  <svg aria-hidden="true" class="w-8 h-8 text-yellow-400 animate-spin fill-brand" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/><path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/></svg>
                  <span class="sr-only">Loading...</span>
              </div>
            </div>
          </div>
        </TransitionGroup>
      </div>
    </div>
  </div>
</template>
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
