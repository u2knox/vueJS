<template>
  <div>
    <select id="random">
      <option value="list">By the list</option>
      <option value="random">Random</option>
    </select>
    <div class="block" v-random="materials"></div>
  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'
const materials = ref({
  img: [
    'https://blog.emandarine.net/grille/templates/all-css/imgTest/2.jpg',
    'https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    'https://upload.wikimedia.org/wikipedia/commons/0/00/500x500.jpg',
    'https://2.bp.blogspot.com/-CmBgofK7QzU/TVj3u3N1h2I/AAAAAAAADN8/OszBhGvvXRU/s640/tumblr_lg7h9gpbtP1qap9qio1_500.jpeg'
  ],
  timeout: 3000
})
 console.log(materials.value)
</script>

<style scoped>
.block{
  width: 500px;
  height: 500px;
  background-color: red;
  border: 1px solid black;
  background-image: url('https://lespetitespensees.com/wp-content/uploads/2013.bak/10/500x500.gif');
}

</style>