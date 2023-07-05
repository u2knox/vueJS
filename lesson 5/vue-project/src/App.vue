<template>
  <div>
    <add-task>
      
    </add-task>
    <user-task
      v-for="task in tasksReversed"
      :key="task.id"
      :title="task.title"
      :content="task.content"
    ></user-task>
  </div>
</template>

<script setup lang="ts">
import { ref,computed } from 'vue'

import UserTask from '@/components/UserTask.vue'
import AddTask from '@/components/AddTask.vue'


const tasks = ref([
  {
    id: 1,
    title: 'task1',
    content: 'content1'
  },
  {
    id: 2,
    title: 'task2',
    content: 'content2'
  },
  {
    id: 3,
    title: 'task3',
    content: 'content3'
  }
])
const tasksReversed = computed(()=>{
  const tmpArr = [...tasks.value]
  return tmpArr.reverse()
})
</script>

<style scoped></style>
