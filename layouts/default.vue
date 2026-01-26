<script setup>
const props = defineProps({
  punctuation: {
    type: String,
    default: '.'
  }
})
</script>

<template>
  <div class="slidev-layout default" :style="{ '--punct': `'${punctuation}'` }">
    <slot />
  </div>
</template>

<style>
.slidev-layout.default h1 {
  font-weight: 700;
}

.slidev-layout.default h1::after {
  content: var(--punct, '.');
  color: var(--oz-zod-blue);
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
