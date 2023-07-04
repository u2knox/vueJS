<template>
  <div>
    <label :for="`input${inputId}`">{{ props.label }}</label>
    <input
      :value="props.modelValue"
      @input="$emit('update:modelValue', $event.target?.value)"
      type="text"
      :id="`input${inputId}`"
      :placeholder="props.placeholder"
    />
  </div>
</template>

<script setup lang="ts">

interface Props {
  label: string
  placeholder?: string
  modelValue: string
}
const props = defineProps<Props>()

const inputId = Math.round(Math.random() * 10000000)
</script>

<style scoped>
input {
  background-color: cadetblue;
  border-radius: 8px;
  border: none;
  width: 200px;
  height: 25px;
  font-size: medium;
  color: white;
}
::-webkit-input-placeholder {
  /* WebKit browsers */
  color: rgb(0, 0, 0);
}
:-moz-placeholder {
  /* Mozilla Firefox 4 to 18 */
  color: rgb(0, 0, 0);
}
::-moz-placeholder {
  /* Mozilla Firefox 19+ */
  color: rgb(0, 0, 0);
}
:-ms-input-placeholder {
  /* Internet Explorer 10+ */
  color: rgb(0, 0, 0);
}
</style>
