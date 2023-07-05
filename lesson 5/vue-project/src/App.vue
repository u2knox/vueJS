<template>
  <div>
    <add-task @add-task="(task:any)=>createTask(task)">

    </add-task>
    <my-select>
      <option value="waitin">В ожидании</option>
      <option value="inProcess">В работе</option>
      <option value="completed">Выполнено</option>
    </my-select>
    <user-task
      v-for="task in tasksReversed"
      @delete="(taskId:any)=>deleteTask(taskId)"
      :style="{borderColor: color(task.status)}"
      :key="task.id"
      :task-id="task.id"
      :title="task.title"
      :content="task.content"
      >
    <template v-slot:btn="{title}">
    <button @click="deleteTask(task.id)">Удалить {{ title }}</button>
  </template></user-task>
  </div>
</template>

<script setup lang="ts">
import { ref,computed } from 'vue'

import UserTask from '@/components/UserTask.vue'
import AddTask from '@/components/AddTask.vue'
import MySelect from '@/components/MySelect.vue'

const tasks = ref([
  {
    id: 1,
    title: 'task1',
    content: 'content1',
    status:'completed',
  },
  {
    id: 2,
    title: 'task2',
    content: 'content2',
    status:'process',
  },
  {
    id: 3,
    title: 'task3',
    content: 'content3',
    status:'waiting'
  }
])
const tasksReversed = computed(()=>{
  const tmpArr = [...tasks.value]
  return tmpArr.reverse()
})

const createTask = (task:any)=>{
  task.id = (new Date().getTime()),
  tasks.value.push(task)
}

const deleteTask = (taskId:number)=>{
  tasks.value=tasks.value.filter((task)=>task.id !== taskId)
}

function color(status:string){
  switch(status){
    case 'waiting' : return 'yellow'
    case 'process' : return 'blue'
    case 'completed' : return 'teal'
  }
  
}
</script>

<style scoped></style>
