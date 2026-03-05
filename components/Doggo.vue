<script setup lang="ts">
defineProps({
  image: {
    type: String,
  }
})
</script>

<template>
  <img :src="image" class="size-64 ring ring-yellow-400  object-cover transition-all rounded-lg"/>
</template>

