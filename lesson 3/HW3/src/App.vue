<template>
  <div>
    <div v-for="post in posts" :key="post.id">
      <label for="color">Text color</label>
      <input type="text" v-model="post.color" id="color" /><br />
      <label for="background">background</label>
      <input type="text" v-model="post.background" id="background" /><br />
      <label for="fontSize">Fonst Size</label>
      <input type="text" v-model="post.fontSize" id="fontSize" /><br />
      <label for="fontFamaly">Fonst Famaly</label>
      <input type="text" v-model="post.fontFamaly" id="fontFamaly" /><br />
      <label for="fontStyle">Fonst Style</label>
      <input type="text" v-model="post.fontStyle" id="fontStyle" /><br />
      <div class="{{post.id}}" :style="style(post)">
        <h1>{{ post.title }}</h1>
        <p>{{ post.content }}</p>
      </div>
      <label for="redact"></label>
      <textarea id="redact" cols="30" rows="3" v-model="post.content"></textarea>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface Post {
  id: string;
  title: string;
  content: string;
  color?: string;
  background?: string;
  fontSize?: string;
  fontFamaly?: string;
  fontStyle?: string;
}

const posts = ref<Post[]>([
  {
    id: '1',
    title: 'title1',
    content: 'content1',
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
posts.value.forEach((post: Post) => {
  post.color = 'black';
  post.background = 'white';
  post.fontSize = '16px';
  post.fontFamaly = 'Arial, Helvetica, sans-serif';
  post.fontStyle = 'normal';
})
const style = (post: Post) => ({
  color: `${post.color}`,
  background: `${post.background}`,
  fontSize: `${post.fontSize}`,
  fontFamaly: `${post.fontFamaly}`,
  fontStyle: `${post.fontStyle}`
})
</script>

<style scoped>
</style>
