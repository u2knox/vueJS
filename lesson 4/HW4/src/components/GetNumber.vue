<template>
    <div>
        <label for="name">Discription</label>
        <p>{{ props.body }}</p>
        <label for="percantage">Percantage</label>
        <input type="number" id="percantage" 
        :value="props.modelValue"
        @input="$emit('update:modelValue', $event.target?.value)">
    </div>
</template>

<script setup lang="ts">
interface Props{
    body:string;
    modelValue:number;
}
const props = defineProps<Props>()
</script>

<style scoped>

</style>