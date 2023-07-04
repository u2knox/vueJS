<template>
  <div>
    <my-input v-model="user.name" label="Name" ></my-input>
    <my-input v-model="user.surname" label="Surname"></my-input>
    <p>{{ user }}</p>
  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue';
  import MyInput from '@/components/MyInput.vue';
  const user = ref({
    name:'',
    surname:''
  })

</script>

<style scoped>

</style>
