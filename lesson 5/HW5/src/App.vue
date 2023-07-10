<template>
  <div>
    <slide-card
      v-for="slide in content"
      @prev="(slideId:any)=>prevSlide(slideId)"
      @next="(slideId:any)=>nextSlide(slideId)"
      v-show="slide.view"
      :key="slide.id"
      :slideId="slide.id"
      :title="slide.title"
      :body="slide.body"
    ></slide-card>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import SlideCard from '@/components/SlideCard.vue'
const content = ref([
  {
    id: 1,
    view: true,
    title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
    body: 'quia et suscipitsuscipit recusandae consequuntur expedita et cumreprehenderit molestiae ut ut quas totamnostrum rerum est autem sunt rem eveniet architecto'
  },
  {
    id: 2,
    view: false,
    title: 'qui est esse',
    body: 'est rerum tempore vitaesequi sint nihil reprehenderit dolor beatae ea dolores nequefugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla'
  },
  {
    id: 3,
    view: false,
    title: 'ea molestias quasi exercitationem repellat qui ipsa sit aut',
    body: 'et iusto sed quo iurevoluptatem occaecati omnis eligendi aut advoluptatem doloribus vel accusantium quis pariaturmolestiae porro eius odio et labore et velit aut'
  }
])
function prevSlide(id:number) {
  if (id != 1) {
    content.value[id-2].view = true
    content.value[id-1].view = false
  }else{
    content.value[content.value.length-1].view = true
    content.value[id-1].view = false
  }
}
function nextSlide(id:number){
  if(id != content.value.length){
    content.value[id].view = true
    content.value[id-1].view = false
  }else{
    content.value[0].view = true
    content.value[id-1].view = false
  }
}
</script>

<style scoped></style>
