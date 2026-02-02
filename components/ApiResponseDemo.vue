<script setup>
import { ref } from 'vue'
import MacWindow from './MacWindow.vue'

const loading = ref(false)
const showResponse = ref(false)
const showError = ref(false)

const simulateFetch = () => {
  loading.value = true
  showResponse.value = false
  showError.value = false

  setTimeout(() => {
    loading.value = false
    showResponse.value = true

    setTimeout(() => {
      showError.value = true
    }, 800)
  }, 1200)
}

const reset = () => {
  loading.value = false
  showResponse.value = false
  showError.value = false
}
</script>

<template>
  <div class="flex flex-col gap-4">
    <MacWindow title="Réponse de l'API">
      <div class="p-3 min-h-[200px] flex items-center justify-center font-mono text-sm">
        <div v-if="!loading && !showResponse" class="text-gray-400 text-center">
          <div class="text-4xl mb-2">📡</div>
          <div>Cliquez sur le bouton</div>
        </div>

        <div v-if="loading" class="text-blue-400 text-center">
          <div class="text-4xl mb-2 animate-bounce">📡</div>
          <div>Fetching...</div>
        </div>

        <pre v-if="showResponse && !loading" class="w-full text-left"><code>{
  <span class="text-red-400">"id": 42,</span>         <span class="text-gray-500">// number!</span>
  <span class="text-red-400">"name": null,</span>      <span class="text-gray-500">// null!</span>
  <span class="text-red-400">"mail": "d@oz.com"</span> <span class="text-gray-500">// mail ≠ email</span>
}</code></pre>
      </div>
    </MacWindow>

    <button @click="simulateFetch" :disabled="loading"
      class="px-6 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-800 disabled:cursor-wait rounded-lg font-semibold text-white transition-colors flex items-center justify-center gap-2">
      <span v-if="loading" class="animate-spin">⏳</span>
      <span v-else>🚀</span>
      {{ loading ? 'Fetching...' : 'fetch("/api/user")' }}
    </button>

    <button v-if="showResponse" @click="reset"
      class="px-4 py-2 bg-gray-600 hover:bg-gray-700 rounded-lg text-sm text-white transition-colors">
      🔄 Reset
    </button>

    <div v-if="showError" class="text-center text-lg text-red-400 font-semibold bg-red-900/30 rounded-lg py-3 px-4">
      💥 Cannot read properties of null
    </div>
  </div>
</template>
