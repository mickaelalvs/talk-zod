<script setup lang="ts">
import { ref, watch, computed } from 'vue'
import { queryParamsSchema } from './query-params-schema'
import { queryParamsFilterSchema } from './query-params-filter-schema'
import { codeToHtml } from 'shiki'

interface Props {
  title?: string
  height?: string
  schema?: 'base' | 'filter'
}

const props = withDefaults(defineProps<Props>(), {
  title: 'code.ts',
  height: '170px',
  schema: 'base'
})

const editedTitle = ref(props.title)
const titleInput = ref<HTMLInputElement | null>(null)
const highlightedJson = ref('')

watch(() => props.title, (newTitle) => {
  editedTitle.value = newTitle
})

const handleKeydown = (e: KeyboardEvent) => {
  if (e.key === 'Enter') {
    titleInput.value?.blur()
  } else if (e.key === 'Escape') {
    editedTitle.value = props.title
    titleInput.value?.blur()
  }
}

const parsedResult = computed(() => {
  try {
    const url = new URL(editedTitle.value)
    const params: Record<string, string> = {}

    url.searchParams.forEach((value, key) => {
      params[key] = value
    })

    const result = props.schema === 'base' ? queryParamsSchema.parse(params) : queryParamsFilterSchema.parse(params)
    return { success: true, data: result, error: null, errorDetails: null }
  } catch (error: any) {
    let errorMessage = 'Invalid URL or query parameters'
    let errorDetails: Array<{ field?: string; message: string }> = []

    if (error.issues && Array.isArray(error.issues)) {
      // Zod validation error
      errorDetails = error.issues.map((issue: any) => ({
        field: issue.path?.join('.') || undefined,
        message: issue.message
      }))
      errorMessage = errorDetails.length === 1
        ? errorDetails[0].message
        : `${errorDetails.length} validation error${errorDetails.length > 1 ? 's' : ''}`
    } else if (error.message) {
      errorMessage = error.message
    }

    return { success: false, data: null, error: errorMessage, errorDetails }
  }
})

const jsonString = computed(() => {
  if (parsedResult.value.success && parsedResult.value.data) {
    return JSON.stringify(parsedResult.value.data, null, 2)
  }
  return ''
})

watch(jsonString, async (json) => {
  if (json) {
    try {
      highlightedJson.value = await codeToHtml(json, {
        lang: 'json',
        theme: 'one-light'
      })
    } catch (error) {
      // Fallback to plain text if highlighting fails
      highlightedJson.value = `<pre class="fallback-json">${json}</pre>`
    }
  } else {
    highlightedJson.value = ''
  }
}, { immediate: true })
</script>

<template>
  <div class="mac-window">
    <div class="mac-titlebar">
      <span class="mac-btn mac-close"></span>
      <span class="mac-btn mac-minimize"></span>
      <span class="mac-btn mac-maximize"></span>
      <input ref="titleInput" v-model="editedTitle" class="mac-title" @keydown="handleKeydown" />
      <div class="status-indicator">
        <img v-if="parsedResult.success" src="/assets/images/icon-check.png" class="status-icon" />
        <img v-else src="/assets/images/icon-cross.png" class="status-icon" />
      </div>
    </div>
    <div class="mac-content" :style="{ height: 'fit-content' }">
      <div v-if="parsedResult.success" class="parsed-result" v-html="highlightedJson"></div>
      <div v-else class="parsed-error">
        <div class="error-header">
          <svg class="error-icon" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18Z"
              fill="currentColor" />
            <path
              d="M15.7071 4.29289C16.0976 4.68342 16.0976 5.31658 15.7071 5.70711L11.4142 10L15.7071 14.2929C16.0976 14.6834 16.0976 15.3166 15.7071 15.7071C15.3166 16.0976 14.6834 16.0976 14.2929 15.7071L10 11.4142L5.70711 15.7071C5.31658 16.0976 4.68342 16.0976 4.29289 15.7071C3.90237 15.3166 3.90237 14.6834 4.29289 14.2929L8.58579 10L4.29289 5.70711C3.90237 5.31658 3.90237 4.68342 4.29289 4.29289C4.68342 3.90237 5.31658 3.90237 5.70711 4.29289L10 8.58579L14.2929 4.29289C14.6834 3.90237 15.3166 3.90237 15.7071 4.29289Z"
              fill="white" />
          </svg>
          <span class="error-title">Validation Error</span>
        </div>
        <div class="error-message">{{ parsedResult.error }}</div>
        <div v-if="parsedResult.errorDetails && parsedResult.errorDetails.length > 0" class="error-details">
          <div v-for="(detail, index) in parsedResult.errorDetails" :key="index" class="error-item">
            <span v-if="detail.field" class="error-field">{{ detail.field }}:</span>
            <span class="error-text">{{ detail.message }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.mac-window {
  border-radius: 6px;
  overflow: hidden;
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
  position: relative;
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
  background: transparent;
  border: none;
  outline: none;
  padding: 0;
  margin: 0;
  cursor: text;
  min-width: 50px;
  width: auto;
  flex: 1;
}

.mac-title:focus {
  outline: none;
  border: none;
  background: transparent;
}

.status-indicator {
  margin-left: auto;
  margin-right: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 3px;
}

.status-icon {
  width: 16px;
  height: 16px;
  flex-shrink: 0;
}

.mac-content {
  background: #F5F5F5;
  overflow: visible;
  padding: 16px;
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
  font-size: 13px;
}

.parsed-result {
  margin: 0;
}

.parsed-result :deep(pre) {
  margin: 0;
  padding: 0;
  background: transparent !important;
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
  font-size: 13px;
  line-height: 1.6;
  white-space: pre-wrap;
  word-wrap: break-word;
}

.parsed-result :deep(code) {
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
  font-size: 13px;
}

.fallback-json {
  color: #333;
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
  font-size: 13px;
  margin: 0;
  padding: 0;
}

.parsed-error {
  color: #d32f2f;
  background: #ffebee;
  border: 1px solid #ffcdd2;
  border-radius: 6px;
  padding: 16px;
}

.error-header {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;
}

.error-icon {
  width: 20px;
  height: 20px;
  color: #d32f2f;
  flex-shrink: 0;
}

.error-title {
  font-weight: 600;
  font-size: 14px;
  color: #c62828;
}

.error-message {
  font-size: 13px;
  margin-bottom: 12px;
  color: #d32f2f;
  line-height: 1.5;
}

.error-details {
  margin-top: 12px;
  padding-top: 12px;
  border-top: 1px solid #ffcdd2;
}

.error-item {
  display: flex;
  gap: 8px;
  margin-bottom: 8px;
  font-size: 12px;
  line-height: 1.6;
}

.error-item:last-child {
  margin-bottom: 0;
}

.error-field {
  font-weight: 600;
  color: #c62828;
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
}

.error-text {
  color: #d32f2f;
  flex: 1;
}

.mac-content :deep(.slidev-monaco-container),
.mac-content :deep(.monaco-editor),
.mac-content :deep(.shiki) {
  border-radius: 0 0 6px 6px;
}
</style>
