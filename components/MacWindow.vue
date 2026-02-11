<script setup lang="ts">
interface Props {
  title?: string
  height?: string
  label?: string
}

const props = withDefaults(defineProps<Props>(), {
  title: 'code.ts',
  height: '170px',
  label: ''
})
</script>

<template>
  <div class="mac-window">
    <div class="mac-titlebar">
      <span class="mac-btn mac-close"></span>
      <span class="mac-btn mac-minimize"></span>
      <span class="mac-btn mac-maximize"></span>
      <span class="mac-title">{{ props.title }}</span>
      <span v-if="props.label" class="mac-label">{{ props.label }}</span>
      <slot name="titlebar-actions" />
    </div>
    <div class="mac-content" :style="{ height: props.height }">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.mac-window {
  border-radius: 6px;
  overflow: visible;
  background: #F5F5F5;
  border: 1px solid #ddd;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
}

.mac-titlebar {
  background: linear-gradient(to bottom, #f6f6f6, #e8e8e8);
  padding: 8px 10px 4px;
  display: flex;
  align-items: center;
  gap: 6px;
  border-bottom: 1px solid #d0d0d0;
  border-radius: 6px 6px 0 0;
}

.mac-btn {
  width: 8px;
  height: 8px;
  border-radius: 50%;
}

.mac-close {
  background: #ff5f56;
}

.mac-minimize {
  background: #ffbd2e;
}

.mac-maximize {
  background: #27ca40;
}

.mac-title {
  margin-left: 6px;
  color: #666;
  font-size: 11px;
  font-weight: 600;
  font-family: -apple-system, BlinkMacSystemFont, sans-serif;
  flex: 1;
}

.mac-label {
  font-size: 9px;
  color: #888;
  background: #e0e0e0;
  border: 1px solid #ccc;
  padding: 1px 6px;
  border-radius: 3px;
  font-family: -apple-system, BlinkMacSystemFont, sans-serif;
}

.mac-content {
  background: #F5F5F5;
  overflow: visible;
  border-radius: 0 0 6px 6px;
}

.mac-content :deep(.slidev-monaco-container),
.mac-content :deep(.monaco-editor),
.mac-content :deep(.shiki) {
  border-radius: 0 0 6px 6px;
}
</style>
