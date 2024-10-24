<template>
  <div :class="customContainerClass" class="relative w-full min-h-screen bg-gradient-to-r from-gradient1 to-gradient2 overflow-hidden lg:flex lg:items-center lg:min-h-0 lg:h-screen lg:max-h-limit">
    <Pattern class="absolute top-0 left-0 w-80 h-full" />

    <div class="py-8 flex flex-col w-full min-h-screen lg:flex-row lg:min-h-0" :style="{}">
      <div class="flex flex-col lg:mr-1/10">
        <div class="text-white font-semibold text-base bg-primary w-fit rounded-md py-1 px-2">Vaše klientela</div>
        <h1 class="text-white font-semibold text-4xl leading-tight mt-4 font-jakarta xl:text-6xl ">Více zákazníků <br> Větší tržby</h1>
        <div class="text-whiteText text-xl mt-4" :style="{maxWidth: '430px'}">
          Zvyšte viditelnost vašeho salonu! 
          Díky online profilu a snadné správě rezervací 
          <span class="font-bold">zvýšíte vaše tržby, přilákáte nové zákazníky</span>  
          a budete mít o všem lepší přehled.
        </div>

        <button class="bg-white text-lg rounded-lg font-semibold text-btnColor h-14 mt-6 max-w-48">
          Registrovat salon
        </button>
      </div>
      
      <div class="relative mt-12 min-h-img lg:mt-0 lg:min-h-0" :style="{flexGrow: 1, height: '100%' }">
        <img class="absolute top-0 left-0 h-auto max-w-none" :style="{ width: '180%' }" src="./../../public/img.png" alt="">
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { customContainerClass } from '../helpers'
import Pattern from './Pattern.vue'

// TODO: 
// - tag has opacity
// - refactor colors
// - dont forget pattern
// - fix gradient to match design
// - button component
// - img max width unset globally
// - layout responsivity on desktop

defineProps<{}>()
</script>

<style scoped></style>
