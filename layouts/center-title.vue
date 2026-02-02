<script setup>
import { computed } from 'vue'

const props = defineProps({
  punctuation: {
    type: String,
    default: '.'
  }
})

const spacing = computed(() => props.punctuation === '.' ? '0' : '0.15em')
</script>

<template>
  <div class="slidev-layout center-title" :style="{ '--punct': `'${punctuation}'`, '--punct-spacing': spacing }">
    <slot />
  </div>
</template>

<style>
.slidev-layout.center-title {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  text-align: center;
}

.slidev-layout.center-title h1 {
  font-weight: 700;
}

.slidev-layout.center-title h1::after {
  content: var(--punct, '.');
  color: var(--oz-zod-blue);
  margin-left: var(--punct-spacing, 0);
}

.slidev-layout.center-title h2 {
  font-weight: 700;
}

.slidev-layout.center-title h3 {
  font-weight: 600;
}
</style>
