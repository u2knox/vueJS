<template>
  <div>
    <!-- <label for="number">Число</label>
    <input type="text" v-model="numb" id="number" />
    <label for="power">Степень</label>
    <input type="text" id="power" v-model="power"> -->
    <!-- <p>Number: {{ numb }}</p>
      <p>Squre: {{ squre }}</p> -->

    <!-- <label for="color">Цвет</label>
    <input type="text" v-bind:value="color" id="color" v-on:input="setColor" /><br />
    <label for="height">Ширина</label>
    <input type="text" id="height" v-model="width" /><br />
    <label for="width">Высота</label>
    <input type="text" id="width" v-model="height" /><br />
    <label for="select">Единица измерения</label>
    <select id="select" v-model="select">
      <option value="px">Пиксели</option>
      <option value="em">Адаптив(em)</option>
      <option value="rem">Адаптив(rem)</option>
      <option value="%">Процент</option>
    </select>
    <br /> -->

    <!-- <label for="border">Границы</label>
    <input type="text" id="border" v-model="border" />
    <label for="radius">Закругленность</label>
    <input type="text" id="radius" v-model="borderRadius" />
    <div class="block" :style="style"></div> -->
    
      <label for="name">Name</label>
      <input type="text" name="name" id="name" v-model="name"><br>
      <label for="surname">Surname</label>
      <input type="text" name="surname" id="surname" v-model="surname"><br>
      <label for="email">Email</label>
      <input type="email" name="email" id="email" v-model="email"><br>
      <label for="birth">Birthday</label>
      <input min="1900-01-01" max="2023-07-03" type="date" name="birthday" id="birth" v-model="data"><br>
      <button :disabled="isDisabled" @click="createUser">Register</button><br>
      <table>
        <tr>
          <td>Name</td>
          <td>Surname</td>
          <td>Age</td>
          <td>Email</td>
        </tr>
        <tr>
          <td>{{users.name}}</td>
          <td>{{users.surname}}</td>
          <td>{{users.data}}</td>
          <td>{{users.email}}</td>
        </tr>
      </table>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
// const numb = ref(2)
// const power = ref(1)
// const squre = computed(() => numb.value ** power.value)
// const isVisible = ref<number>(false)
// const color = ref('teal')
// const width = ref('100')
// const height = ref('100')
// const select = ref('px')
// const border = ref('1px solid black')
// const borderRadius = ref('15')
// const style = computed(() => ({
//   background: color.value,
//   width: `${width.value + select.value}`,
//   height: `${height.value + select.value}`,
//   border: `${border.value}`,
//   borderRadius: `${borderRadius.value}px`
// }));

// const setColor = function (event: any) {
//   color.value = event.target.value;
// }

let date = '2023-07-06'
const name = ref("")
const surname = ref("")
const email = ref("")
const data = ref("")
const isDisabled = computed(()=>{
  if (!name.value.trim().length) return true;
  if (!surname.value.trim().length) return true;
  if (!email.value.trim().length) return true;
  if (((new Date().getTime() - new Date(date).getTime())/1000/3600/24)>=18) return true
  return false;
})
const users = ref({});
const createUser = ()=>{
  users.value = {
    name:name.value,
    surname:surname.value,
    email:email.value,
    data:data.value
  }

}
</script>

<style scoped>
</style>
