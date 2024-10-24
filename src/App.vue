<template>
  <div class="font-inter">
    <HelloWorld />

    <div class="mt-4" :class="customContainerClass">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Quia blanditiis explicabo illum aperiam in ipsum maiores aut commodi ad obcaecati soluta molestiae sint reiciendis dolore officia deleniti,
      rem aspernatur porro numquam animi tempora iure. Rerum expedita pariatur dicta odio earum a temporibus, sit praesentium eius. Natus quis quo vel non?
    </div>
  </div>
</template>

<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import { customContainerClass } from './helpers'
</script>

<style scoped></style>
