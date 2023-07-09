<template>
    <div class="column">
    </div>
</template>

<script setup lang="ts">
import {ref, computed} from 'vue';
interface Draws{
    modelValue: number;
}
const draws = defineProps<Draws>()

</script>

<style scoped>
    .column{
        height: 30px;
        width: 150px;
        background-color: red;
        display: flex;
        flex-direction: column;
        justify-content: end;
    }
    #static{
        border: none;
        background-color: red;
    }
</style>