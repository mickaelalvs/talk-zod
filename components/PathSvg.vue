<script setup>
import { ref, onMounted } from 'vue'

const props = defineProps({
  showZod: {
    type: Boolean,
    default: false
  }
})

const svgContent = ref('')

onMounted(async () => {
  const response = await fetch('/pages/04-acte-4-magicien-zod/assets/path.svg')
  svgContent.value = await response.text()
})
</script>

<template>
  <div 
    class="path-svg-container" 
    :class="{ 'show-zod': showZod }"
    v-html="svgContent"
  />
</template>

<style>
.path-svg-container {
  overflow: hidden;
}

.path-svg-container svg {
  max-height: 60vh;
  max-width: 90vw;
  transform: scale(2) translateX(-80px) translateY(50px);
}

.path-svg-container #img2 {
  transform: scale(0);
  transform-origin: 3601px 1469px;
  transition: transform 0.8s ease-in;
}

.path-svg-container.show-zod #img2 {
  transform: scale(1);
}
</style>
