<template>
  <div>
    <label :for="`input${inputId}`">{{ props.label }}{{ value }}</label>
    <input
      :value="props.modelValue"
      @input="emits('update:modelValue', $event.target?.value)"
      type="text"
      :id="`input${inputId}`"
      :placeholder="props.placeholder"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface Props {
  label: string
  placeholder?: string
  modelValue?: string
}
const props = defineProps<Props>()
interface Emits {
  (e: 'update:modelValue', value: string): void
}
const emits = defineEmits<Emits>();

const value = ref<string>('')

const inputId = Math.round(Math.random() * 1000000)
</script>

<style scoped>
input {
  border-radius: 4px;
  border: teal solid 2px;
}
</style>
