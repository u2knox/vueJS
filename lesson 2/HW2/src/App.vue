<template>
  <div>
    <div class="block" id="first" v-show="blockStat.first">First</div>
    <div class="block" id="second" v-show="blockStat.second">Second</div>
    <div class="block" id="thierd" v-show="blockStat.thierd">Thierd</div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const blockStat = ref({
  first: true,
  second: true,
  thierd: true
})
let firstDiv
let secondDiv
let thierdDiv
setTimeout(() => {
  firstDiv = document.querySelector('#first')
  secondDiv = document.querySelector('#second')
  thierdDiv = document.querySelector('#thierd')
  console.log(firstDiv, secondDiv, thierdDiv)
  firstDiv.addEventListener('click',()=>{
  if(blockStat.value.second && blockStat.value.thierd){
    blockStat.value.second = false
    blockStat.value.thierd = false
  }else{
    blockStat.value.second = true
    blockStat.value.thierd = true
  }
})
secondDiv.addEventListener('click',()=>{
  blockStat.value.first ? blockStat.value.first = false : blockStat.value.first = true
})
thierdDiv.addEventListener('click',()=>{
  blockStat.value.thierd ? blockStat.value.thierd = false : blockStat.value.thierd = true
})
}, 0)

</script>

<style scoped>
.block {
  width: 100px;
  height: 50px;
  border-radius: 15px;
  background-color: gray;
  border: 1px black solid;
  text-align: center ;
}
</style>
