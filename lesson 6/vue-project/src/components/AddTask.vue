<template>
  <div>
        <button v-my-dir="`check`" id="test1"></button>
    <my-input  label="Заголовок" v-model="task.title"></my-input>
    <my-input v-focus label="Описание" v-model="task.content"></my-input>
    <button @click="emits('addTask', Object.assign({},task))">Сохранить</button>
    <!-- <button @click="emits('addTask', {
      title: task.title,
      content:task.content
    })">Сохранить</button> -->
  </div>
</template>

<script setup lang="ts">
import { ref,onBeforeMount,onMounted  } from 'vue'

interface Emits {
    (e:'addTask', task:Object):void
}
onBeforeMount(()=>{
  console.log("before mount",document.getElementById('test1'))
})
onMounted(()=>{
  console.log("before mount",document.getElementById('test1'))
})
const isAddTask= ref<boolean>(false)
const emits = defineEmits<Emits>()

const task = ref({
    title:'',
    content:'',
})


</script>

<style scoped></style>
