<template>
  <div class="card">
    <div @click="emits(`prev`, props.slideId)" class="button" id="prev">⏩</div>
    <div>
      <h3>{{ props.title }}</h3>
      <h5>{{ props.body }}</h5>
    </div>
    <div @click="emits('next', props.slideId)" class="button" id="next">⏩</div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title: string
  body: string
  slideId: number
}
const props = defineProps<Props>()

interface Emits{
  (e:'next', id:number):void
  (e:'prev', id:number):void
}
const emits = defineEmits<Emits>()
</script>

<style scoped>
.card {
  color: black;
  border: 1px solid red;
  border-radius: 15px;
  width: 400px;
  height: 200px;
  background-color: turquoise;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  top: 40%;
  left: 40%;
}
.button {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 15px;
  width: 40px;
  height: 40px;
  background-color: red;
  border-radius: 50px;
  cursor: pointer;
}
#prev{
    rotate: 180deg;
}
</style>
