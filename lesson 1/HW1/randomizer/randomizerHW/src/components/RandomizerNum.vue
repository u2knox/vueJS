<template>
  <div>
    <p>Rundom num: {{ randomNum }}</p>
    <input id="end" type="number" placeholder="end">
    <button @click="startRandom">GO</button>
  </div>
</template>

<script setup>
    import {ref} from "vue"
    let randomNum = ref()
    const startRandom = () =>{
      let endpoint = +document.querySelector('#end').value
      let random = Math.floor(Math.random()*endpoint)
      randomNum.value = random
    }
</script>

<style scoped></style>
