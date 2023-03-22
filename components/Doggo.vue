<script setup>
defineProps({
  image: {
    type: String,
  }
})
</script>

<template>
  <img :src="image" />
</template>

