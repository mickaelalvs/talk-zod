<script setup>
import { ref, watch, onMounted } from 'vue'

const props = defineProps({
  clicks: {
    type: Number,
    default: 0
  },
  src: {
    type: String,
    required: true
  }
})

const svgContainer = ref(null)
const svgLoaded = ref(false)

const updateVisibility = () => {
  if (!svgContainer.value || !svgLoaded.value) return

  const svg = svgContainer.value.querySelector('svg')
  if (!svg) return

  // Get all groups and rects
  const groups = svg.querySelectorAll('g[clip-path]')
  const rects = svg.querySelectorAll('rect[fill]')

  // State: 0 = hidden, 1 = show TS, 2+ = show JS
  const showTs = props.clicks >= 1 && props.clicks < 2
  const showJs = props.clicks >= 2

  // Animate TS files (clip0-9)
  let tsIndex = 0
  groups.forEach(g => {
    const clipPath = g.getAttribute('clip-path') || ''
    const clipNum = clipPath.match(/clip(\d+)/)?.[1]
    if (clipNum !== undefined) {
      const num = parseInt(clipNum)
      if (num >= 0 && num <= 9) {
        // TS files
        const delay = tsIndex * 60
        if (showTs) {
          g.style.transition = `opacity 0.4s ease-out ${delay}ms`
          g.style.opacity = '1'
        } else if (showJs) {
          g.style.transition = 'opacity 0.3s ease-out'
          g.style.opacity = '0'
        } else {
          g.style.transition = 'none'
          g.style.opacity = '0'
        }
        tsIndex++
      } else if (num >= 10 && num <= 19) {
        // JS files
        if (showJs) {
          const jsDelay = (num - 10) * 60
          g.style.transition = `opacity 0.4s ease-out ${jsDelay}ms`
          g.style.opacity = '1'
        } else {
          g.style.transition = 'none'
          g.style.opacity = '0'
        }
      }
    }
  })

  // Animate badges (patterns)
  let tsBadgeIndex = 0
  rects.forEach(rect => {
    const fill = rect.getAttribute('fill') || ''
    const patternNum = fill.match(/pattern(\d+)/)?.[1]
    if (patternNum !== undefined) {
      const num = parseInt(patternNum)
      if (num >= 0 && num <= 9) {
        // TS badges
        const delay = tsBadgeIndex * 60
        if (showTs) {
          rect.style.transition = `opacity 0.4s ease-out ${delay}ms`
          rect.style.opacity = '1'
        } else if (showJs) {
          rect.style.transition = 'opacity 0.3s ease-out'
          rect.style.opacity = '0'
        } else {
          rect.style.transition = 'none'
          rect.style.opacity = '0'
        }
        tsBadgeIndex++
      } else if (num >= 10 && num <= 19) {
        // JS badges
        if (showJs) {
          const jsDelay = (num - 10) * 60
          rect.style.transition = `opacity 0.4s ease-out ${jsDelay}ms`
          rect.style.opacity = '1'
        } else {
          rect.style.transition = 'none'
          rect.style.opacity = '0'
        }
      }
    }
  })

  // Animate TypeScript text paths (blue paths outside of clip groups)
  // These are direct children of svg with fill="#3178C6"
  const textPaths = svg.querySelectorAll(':scope > path[fill="#3178C6"]')
  textPaths.forEach((path, index) => {
    const delay = index * 40
    if (showTs) {
      path.style.transition = `opacity 0.4s ease-out ${delay}ms`
      path.style.opacity = '1'
    } else if (showJs) {
      path.style.transition = 'opacity 0.3s ease-out'
      path.style.opacity = '0'
    } else {
      path.style.transition = 'none'
      path.style.opacity = '0'
    }
  })
}

onMounted(() => {
  fetch(props.src)
    .then(r => {
      if (!r.ok) throw new Error(`Failed to load SVG: ${r.status}`)
      return r.text()
    })
    .then(svgContent => {
      if (svgContainer.value) {
        svgContainer.value.innerHTML = svgContent
        svgLoaded.value = true
        updateVisibility()
      }
    })
    .catch(err => {
      console.error('SwapFiles error:', err)
      if (svgContainer.value) {
        svgContainer.value.innerHTML = `<div style="color: red; padding: 20px;">Erreur: ${err.message}<br/>Path: ${props.src}</div>`
      }
    })
})

watch(() => props.clicks, updateVisibility)
</script>

<template>
  <div ref="svgContainer" class="swap-files-container"></div>
</template>

<style scoped>
.swap-files-container {
  width: 500px;
  flex-shrink: 0;
}

.swap-files-container :deep(svg) {
  width: 100%;
  height: auto;
}
</style>
