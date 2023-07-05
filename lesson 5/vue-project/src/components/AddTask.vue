<template>
  <div>
    <my-input label="Заголовок" v-model="task.title"></my-input>
    <my-input label="Описание" v-model="task.content"></my-input>
    <button @click="emits('addTask', Object.assign({},task))">Сохранить</button>
    <!-- <button @click="emits('addTask', {
      title: task.title,
      content:task.content
    })">Сохранить</button> -->
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface Emits {
    (e:'addTask', task:Object):void
}

const emits = defineEmits<Emits>()

const task = ref({
    title:'',
    content:'',
    status:'waiting',
})


</script>

<style scoped></style>
