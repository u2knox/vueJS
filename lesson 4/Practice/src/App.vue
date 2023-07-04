<template>
  <div>
    <user-task v-for="task in tasks" :key="task.id" :title="task.title" :content="task.content"></user-task>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import UserTask from '@/components/UserTask.vue'

const tasks = ref([
  {
    id:1,
    title:'title1',
    content: 'content1',
  },
  {
    id:2,
    title:'title2',
    content: 'content2',
  },
  {
    id:3,
    title:'title3',
    content: 'content3',
  },
  {
    id:4,
    title:'title4',
    content: 'content4',
  },
  {
    id:5,
    title:'title5',
    content: 'content5',
  },
])
</script>

<style scoped></style>