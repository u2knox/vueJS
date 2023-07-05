<template>
  <div>
    <div v-for="post in posts" :key="post.id">
      <label for="color">Text color</label>
      <input type="text" v-model="color" id="color" /><br />
      <label for="background">background</label>
      <input type="text" v-model="background" id="background" /><br />
      <label for="fonstSize">Fonst Size</label>
      <input type="text" v-model="fonstSize" id="fonstSize" /><br />
      <label for="fontFamaly">Fonst Famaly</label>
      <input type="text" v-model="fontFamaly" id="fontFamaly" /><br />
      <label for="fontStyle">Fonst Style</label>
      <input type="text" v-model="fontStyle" id="fontStyle" /><br />
      <div class="{{post.id}}" :style="style">
        <h1>{{ post.title }}</h1>
        <p>{{ post.content }}</p>
      </div>
      <label for="redact"></label>
      <textarea id="redact" cols="30" rows="3" v-on:input="setText(post.id)" v-model="newText"></textarea>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
const posts = ref([
  {
    id: '1',
    title: 'title1',
    content: 'content1'
  },
  {
    id: '2',
    title: 'title2',
    content: 'content2'
  },
  {
    id: '3',
    title: 'title3',
    content: 'content3'
  },
  {
    id: '4',
    title: 'title4',
    content: 'content4'
  },
  {
    id: '5',
    title: 'title5',
    content: 'content5'
  }
])  
const color = ref('black')
const background = ref('white')
const fonstSize = ref('16px')
const fontFamaly = ref('Arial, Helvetica, sans-serif')
const fontStyle = ref('normal')
const style = computed(() => ({
  color: `${color.value}`,
  background: `${background.value}`,
  fontSize: `${fonstSize.value}`,
  fontFamaly: `${fontFamaly.value}`,
  fontStyle: `${fontStyle.value}`
}))
const newText = ref(``)
function setText(id){
  for(let post of posts.value){
    if(post.id == id){
      post.content = newText.value
    }
  }
}
</script>

<style scoped>
</style>
