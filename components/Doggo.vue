<script setup>
defineProps({
  image: {
    type: String,
  }
})
</script>

<template>
  <img :src="image" class="max-w-[250px] md:max-w-[700px] max-h-[300px] md:max-h-[500px] object-contain transition-all rounded-xl border-teal-500 border-8 p-2"/>
</template>

