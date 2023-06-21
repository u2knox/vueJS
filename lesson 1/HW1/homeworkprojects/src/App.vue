<template>
  <div>
    <p class="name">Name: {{ user.name }}</p>
    <p class="surname">Surname: {{ user.surname }}</p>
    <p class="age">Age: {{ user.age }}</p>
    <p class="mail">Email: {{ user.mail }}</p>
    <p class="country">Country: {{ user.country }}</p>
    <p class="id">User ID: {{ user.id }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
let user = ref({
  id: 1,
  name: 'Ahmar',
  surname: 'Kakimov',
  age: 18,
  mail: 'ahmarkakimov@gmail.com',
  country: 'Kazakhstan'
})
</script>

<style scoped>
body {
  background-color: gray;
}
</style>
