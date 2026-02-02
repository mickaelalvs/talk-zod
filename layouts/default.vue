<script setup>
import { computed } from 'vue'

const props = defineProps({
  punctuation: {
    type: String,
    default: '.'
  }
})

const spacing = computed(() => props.punctuation === '.' ? '0' : '0.20em')
</script>

<template>
  <div class="slidev-layout default" :style="{ '--punct': `'${punctuation}'`, '--punct-spacing': spacing }">
    <slot />
  </div>
</template>

<style>
.slidev-layout.default h1 {
  font-weight: 700;
  margin-bottom: 2rem !important;
}

.slidev-layout.default h1::after {
  content: var(--punct, '.');
  color: var(--oz-zod-blue);
  margin-left: var(--punct-spacing, 0);
}

.slidev-layout.default h2 {
  font-weight: 700;
}

.slidev-layout.default h3 {
  font-weight: 600;
}

.punct {
  color: var(--oz-zod-blue);
}
</style>
