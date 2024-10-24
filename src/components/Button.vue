<template>
  <button class="bg-white text-lg rounded-lg font-semibold text-btnColor h-14 mt-6 max-w-48 transition duration-300 hover:bg-primary hover:text-white">
    {{ label }}
  </button>
</template>

<script setup lang="ts">

interface Props {
  label: string
}

defineProps<Props>()

</script>

<style lang="scss" scoped>

</style>