<script setup>
defineProps({
  image: {
    type: String,
  }
})
</script>

<template>
  <img :src="image" class="max-w-[700px] max-h-[500px] object-contain transition-all rounded-xl border-teal-500 border-8 p-2"/>
</template>

