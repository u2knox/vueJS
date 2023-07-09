<template>
  <div class="wrapper">
    <div class="block">
      <draw-column class="" v-model="percOne" :style="{height:`${percOne}%`}"></draw-column>
      <get-number body="First Column" v-model="percOne"></get-number>
    </div>
    <div class="block">
      <draw-column v-model="percTwo" :style="{height:`${percTwo}%`}"></draw-column>
      <get-number body="Second Column" v-model="percTwo"></get-number>
    </div>
    <div class="block">
      <draw-column v-model="percThree" :style="{height:`${percThree}%`}"></draw-column>
      <get-number body="Thierd Column" v-model="percThree"></get-number>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue';
  import GetNumber from '@/components/GetNumber.vue';
  import DrawColumn from '@/components/DrawColumn.vue';
  let percOne = ref(1)
  let percTwo = ref(1)
  let percThree = ref(1)
</script>

<style scoped>
.block{
  height: 500px;
  border: 1px solid black;
  margin: 10px;
  display: flex;
  flex-direction: column;
  justify-content: end;
}
.wrapper{
  display: flex;
}
</style>
