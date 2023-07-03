<template>
  <div>
    <!-- <label for="number">Число</label>
    <input type="text" v-model="numb" id="number" />
    <label for="power">Степень</label>
    <input type="text" id="power" v-model="power"> -->
    <!-- <p>Number: {{ numb }}</p>
      <p>Squre: {{ squre }}</p> -->
    <label for="color">Цвет</label>
    <input type="text" id="color" v-model="color" /><br>
    <label for="height">Ширина</label>
    <input type="text" id="height" v-model="width" /><br>
    <label for="width">Высота</label>
    <input type="text" id="width" v-model="height" /><br>
    <label for="select">Единица измерения</label>
    <select id="select" v-model="select">
      <option value="px">Пиксели</option>
      <option value="em">Адаптив(em)</option>
      <option value="rem">Адаптив(rem)</option>
      <option value="%">Процент</option>
    </select> <br>
    <label for="border">Границы</label>
    <input type="text" id="border" v-model="border">
    <label for="radius">Закругленность</label>
    <input type="text" id="radius" v-model="borderRadius">
    <div class="block" :style="style"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
// const numb = ref(2)
// const power = ref(1)
// const squre = computed(() => numb.value ** power.value)

const color = ref("teal") 
const width = ref("100")
const height = ref("100")
const select = ref("px")
const border = ref("1px solid black")
const borderRadius = ref("15")
const style = computed(()=>({
  background:color.value,
  width:`${width.value+select.value}`,
  height:`${height.value+select.value}`,
  border:`${border.value}`,
  borderRadius:`${borderRadius.value}px`,
}))
</script>

<style scoped>
.block {
  height: 100px;
  width: 100px;
}
</style>
