<template>
  <div>
    <h1>About page</h1>
    <router-link :to="{ name: 'HomePage' }">Home page</router-link>
    <button @click="router.go(-2)">Назад на 2 шага</button>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();
</script>

<style scoped>

</style>