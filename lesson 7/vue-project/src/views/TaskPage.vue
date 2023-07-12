<template>
  <div>
    <h1>Task page</h1>
    <h2>{{ props.id }}</h2>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

interface Props {
  id: number
}
const props = defineProps<Props>()

onMounted(async () => {
  const commentQuery = await fetch('https://jsonplaceholder.typicode.com/comments/1')
  const comments = await commentQuery.json()
  comments.forEach((comment: any) => {
    tasks.value.push({
      id: comment.id,
      title: comment.name,
      content: comment.body
    })
  })
})
</script>

<style scoped>
</style>