<script setup>
import { ref, onMounted, watch } from 'vue'
import { useSlideContext } from '@slidev/client/context.ts'

const props = defineProps({
  src: {
    type: String,
    required: true
  },
  class: {
    type: String,
    default: ''
  }
})

const svgContainer = ref(null)
const { $slidev } = useSlideContext()

const loadSvg = async () => {
  if (!svgContainer.value) return
  
  try {
    const response = await fetch(props.src)
    if (!response.ok) throw new Error(`Failed to load SVG: ${response.status}`)
    const svgContent = await response.text()
    svgContainer.value.innerHTML = svgContent
  } catch (err) {
    console.error('AnimatedSvg error:', err)
  }
}

onMounted(() => {
  loadSvg()
})

// Reload SVG when navigating to this slide to restart animations
watch(() => $slidev.nav.currentPage, () => {
  loadSvg()
})
</script>

<template>
  <div ref="svgContainer" :class="props.class"></div>
</template>
