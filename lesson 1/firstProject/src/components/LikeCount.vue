<template>
  <div>
    <span>Likes: {{ likes }} {{ Math.round((likes / (likes + dislikes)) * 100) || 0 }}%</span>
    <span
      >Dislikes: {{ dislikes }} {{ Math.round((dislikes / (likes + dislikes)) * 100) || 0 }}%</span
    >
    <button @click="addLike">like</button>
    <button @click="addDislike">Dislike</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const likes = ref(0)
const dislikes = ref(0)
const addLike = () => likes.value++
const addDislike = () => dislikes.value++
</script>

<style scoped></style>
