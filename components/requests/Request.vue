<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue'
import { requestSchema } from './request-schema'
import MacWindow from '../MacWindow.vue'

interface Props {
  method?: 'POST' | 'PATCH'
}

const props = withDefaults(defineProps<Props>(), {
  method: 'POST'
})

const getDefaultRequestBody = (method: 'POST' | 'PATCH'): string => {
  if (method === 'PATCH') {
    return `{
  "hasBeenRead": true
}`
  }
  return `{
  "id": "123e4567-e89b-12d3-a456-426614174000",
  "title": "The Great Gatsby",
  "pageCount": 180,
  "thumbnail": "https://example.com/thumbnail.jpg"
}`
}

const loading = ref(false)
const parsedData = ref<Record<string, any> | null>(null)
const sentFields = ref<string[]>([])
const error = ref<string | null>(null)
const errorDetails = ref<Array<{ field?: string; message: string }>>([])
const requestBody = ref<string>(getDefaultRequestBody(props.method))
const rawRequest = ref<string>('')
const showConfetti = ref(false)

const prettifyJSON = (json: string): string => {
  try {
    const parsed = JSON.parse(json)
    return JSON.stringify(parsed, null, 2)
  } catch {
    return json
  }
}

const formatBody = () => {
  const formatted = prettifyJSON(requestBody.value)
  if (formatted !== requestBody.value) {
    requestBody.value = formatted
  }
}

const formatValue = (value: any): string => {
  if (value === null) {
    return 'null'
  }
  if (typeof value === 'string') {
    return `"${value}"`
  }
  return String(value)
}

const displayedDataEntries = computed(() => {
  if (!displayedData.value) return []
  return Object.entries(displayedData.value)
})

const windowTitle = computed(() => {
  return `${props.method} /api/books`
})

const submitButtonLabel = computed(() => {
  return props.method === 'PATCH' ? 'Modifier un livre' : 'Ajouter un livre'
})

const resetButtonLabel = computed(() => {
  return props.method === 'PATCH' ? 'Modifier un autre livre' : 'Ajouter un autre livre'
})

const displayedData = computed(() => {
  if (!parsedData.value) return null
  
  if (props.method === 'PATCH') {
    // For PATCH, only show fields that were sent (including null values)
    const filtered: Record<string, any> = {}
    sentFields.value.forEach(field => {
      // Include field even if value is null
      if (field in parsedData.value!) {
        filtered[field] = parsedData.value![field as keyof typeof parsedData.value]
      }
    })
    return filtered
  }
  
  // For POST, show all fields (including null values)
  return parsedData.value as Record<string, any>
})

const triggerConfetti = () => {
  showConfetti.value = true
  setTimeout(() => {
    showConfetti.value = false
  }, 4000)
}

const makeRequest = () => {
  loading.value = true
  parsedData.value = null
  error.value = null
  sentFields.value = []
  
  rawRequest.value = requestBody.value
  
  setTimeout(() => {
    try {
      // Parse JSON body
      let bodyData: any
      try {
        bodyData = JSON.parse(requestBody.value)
      } catch (jsonError: any) {
        throw new Error('Invalid JSON format')
      }
      
      // Track which fields were sent in the request
      sentFields.value = Object.keys(bodyData)
      
      // Convert date string to Date object if present
      if (bodyData.releaseDate && typeof bodyData.releaseDate === 'string') {
        bodyData.releaseDate = new Date(bodyData.releaseDate)
      }
      
      // Parse using Zod schema
      const result = requestSchema.parse(bodyData)
      parsedData.value = result
      error.value = null
      errorDetails.value = []
      triggerConfetti()
    } catch (e: any) {
      let errorMessage = 'Parsing failed'
      const details: Array<{ field?: string; message: string }> = []
      
      if (e.issues && Array.isArray(e.issues)) {
        // Zod validation error
        details.push(...e.issues.map((issue: any) => ({
          field: issue.path?.join('.') || undefined,
          message: issue.message
        })))
        errorMessage = details.length === 1 
          ? details[0].message
          : `${details.length} validation error${details.length > 1 ? 's' : ''}`
      } else if (e.message) {
        errorMessage = e.message
      }
      
      error.value = errorMessage
      errorDetails.value = details
      parsedData.value = null
      sentFields.value = []
    } finally {
      loading.value = false
    }
  }, 800)
}

const reset = () => {
  loading.value = false
  parsedData.value = null
  sentFields.value = []
  error.value = null
  errorDetails.value = []
  rawRequest.value = ''
  showConfetti.value = false
}

// Session storage key based on method
const getStorageKey = () => {
  return `request-body-${props.method}`
}

// Flag to prevent saving during initial load
const isInitialLoad = ref(true)

// Load from session storage
const loadFromStorage = () => {
  if (typeof window !== 'undefined' && window.sessionStorage) {
    const stored = sessionStorage.getItem(getStorageKey())
    if (stored) {
      requestBody.value = stored
      return true
    }
  }
  return false
}

// Load from session storage on mount
onMounted(() => {
  if (!loadFromStorage()) {
    // If no stored value, format the default
    requestBody.value = prettifyJSON(requestBody.value)
  } else {
    // Format the loaded value
    requestBody.value = prettifyJSON(requestBody.value)
  }
  // Allow saving after initial load
  isInitialLoad.value = false
})

// Watch method prop to reload from storage when it changes
watch(() => props.method, () => {
  isInitialLoad.value = true
  if (!loadFromStorage()) {
    // If no stored value for new method, use default
    requestBody.value = getDefaultRequestBody(props.method)
  }
  requestBody.value = prettifyJSON(requestBody.value)
  isInitialLoad.value = false
})

// Save to session storage when requestBody changes (but not during initial load)
watch(requestBody, (newValue) => {
  if (!isInitialLoad.value && typeof window !== 'undefined' && window.sessionStorage) {
    sessionStorage.setItem(getStorageKey(), newValue)
  }
}, { deep: true })
</script>

<template>
  <div class="request-container flex flex-col gap-4" style="max-width: 400px;">
    <div v-if="showConfetti" class="confetti-container">
      <div
        v-for="i in 200"
        :key="i"
        class="confetti"
        :style="{
          left: Math.random() * 100 + '%',
          animationDelay: Math.random() * 2 + 's',
          '--drift': (Math.random() * 200 - 100) + 'px',
          '--duration': (1.2 + Math.random() * 0.6) + 's',
          width: Math.random() < 0.5 ? (6 + Math.random() * 4) + 'px' : (6 + Math.random() * 6) + 'px',
          height: Math.random() < 0.5 ? (6 + Math.random() * 4) + 'px' : (5 + Math.random() * 6) + 'px',
          backgroundColor: ['#007bff', '#28a745', '#ffc107', '#dc3545', '#17a2b8', '#6f42c1'][Math.floor(Math.random() * 6)]
        }"
      ></div>
    </div>
    <MacWindow :title="windowTitle" height="fit-content">
      <div class="p-3 min-h-[200px] font-mono text-sm" :class="{ 'flex items-center justify-center': loading }">
        <div v-if="!loading && !parsedData && !error" class="flex flex-col gap-2 w-full">
          <label class="text-xs text-gray-500 mb-1">Corps de la requête (JSON):</label>
          <textarea
            v-model="requestBody"
            @blur="formatBody"
            class="font-mono text-sm p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none w-full bg-white"
            rows="11"
            placeholder='{"id": "...", "title": "...", "genres": [...], "releaseDate": "...", "pageCount": 0, "thumbnail": "..."}'
          ></textarea>
        </div>

        <div v-if="loading" class="text-blue-400 text-center">
          <div class="text-4xl mb-2 animate-bounce">📡</div>
          <div>Chargement...</div>
        </div>

        <div v-if="parsedData && !loading" class="w-full text-left">
          <div class="text-gray-500 text-xs mb-2">Parsed data:</div>
          <pre class="w-full"><code>{
<span v-for="(entry, index) in displayedDataEntries" :key="entry[0]">  <span class="text-green-600">"{{ entry[0] }}"</span>: <span class="text-blue-600">{{ formatValue(entry[1]) }}</span><span v-if="index < displayedDataEntries.length - 1">,</span>
</span>}</code></pre>
        </div>

        <div v-if="error && !loading" class="w-full text-left">
          <div class="parsed-error">
            <div class="error-header">
              <svg class="error-icon" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18Z" fill="currentColor"/>
                <path d="M15.7071 4.29289C16.0976 4.68342 16.0976 5.31658 15.7071 5.70711L11.4142 10L15.7071 14.2929C16.0976 14.6834 16.0976 15.3166 15.7071 15.7071C15.3166 16.0976 14.6834 16.0976 14.2929 15.7071L10 11.4142L5.70711 15.7071C5.31658 16.0976 4.68342 16.0976 4.29289 15.7071C3.90237 15.3166 3.90237 14.6834 4.29289 14.2929L8.58579 10L4.29289 5.70711C3.90237 5.31658 3.90237 4.68342 4.29289 4.29289C4.68342 3.90237 5.31658 3.90237 5.70711 4.29289L10 8.58579L14.2929 4.29289C14.6834 3.90237 15.3166 3.90237 15.7071 4.29289Z" fill="white"/>
              </svg>
              <span class="error-title">Validation Error</span>
            </div>
            <div class="error-message">{{ error }}</div>
            <div v-if="errorDetails.length > 0" class="error-details">
              <div v-for="(detail, index) in errorDetails" :key="index" class="error-item">
                <span v-if="detail.field" class="error-field">{{ detail.field }}:</span>
                <span class="error-text">{{ detail.message }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MacWindow>

    <button v-if="!parsedData && !error && !loading" @click="makeRequest"
      class="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold text-white transition-colors flex items-center justify-center gap-2">
      <span>📚</span>
      {{ submitButtonLabel }}
    </button>

    <button v-if="loading" disabled
      class="px-6 py-3 bg-blue-800 cursor-wait rounded-lg font-semibold text-white transition-colors flex items-center justify-center gap-2">
      <span class="animate-spin">⏳</span>
      Chargement...
    </button>

    <button v-if="parsedData || error" @click="reset"
      class="px-6 py-3 bg-gray-600 hover:bg-gray-700 rounded-lg font-semibold text-white transition-colors flex items-center justify-center gap-2">
      🔄 {{ resetButtonLabel }}
    </button>
  </div>
</template>

<style scoped>
.request-container {
  min-width: 400px;
  position: relative;
}

.confetti-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 10000;
  overflow: hidden;
}

.confetti {
  position: absolute;
  top: -20px;
  opacity: 1;
  animation: confetti-fall var(--duration, 1.5s) linear forwards;
}

@keyframes confetti-fall {
  0% {
    top: 0;
    transform: translateX(0) rotate(0deg);
    opacity: 1;
  }
  50% {
    top: 50%;
    transform: translateX(var(--drift)) rotate(360deg);
  }
  100% {
    top: 100%;
    transform: translateX(calc(var(--drift) * 1.5)) rotate(720deg);
    opacity: 0;
  }
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
</style>
