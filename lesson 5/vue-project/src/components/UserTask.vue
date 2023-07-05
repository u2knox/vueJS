<template>
  <div class="task">
    <h2>{{ props.title }} {{ taskId }}</h2>
    <p>{{ props.content }}</p>
    <slot name="btn" :title="props.taskId"></slot>
    <!-- <button @click="emits('delete', props.taskId)">Удалить</button> -->
  </div>
</template>

<script setup lang="ts">
interface Props {
  title: string
  content: string
  taskId: number
  status?:string
}
const props = defineProps<Props>()
// interface Emits{
//   (e:'delete', id:number):void
// }
// const emits = defineEmits<Emits>()
</script>

<style scoped>
.task {
  border: 1px solid rgb(0, 0, 0);
  border-radius: 8px;
  margin: 10px;
}
</style>
