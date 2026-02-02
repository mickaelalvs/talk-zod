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
  }, 1500)
}

const reset = () => {
  loading.value = false
  showResponse.value = false
  showError.value = false
}
</script>

<template>
  <div class="flex flex-col gap-6 mt-4">
    <div class="grid grid-cols-2 gap-8">
      <div class="flex flex-col gap-4">
        <MacWindow title="Notre code TypeScript">
          <div class="font-mono text-sm p-2">
            <div><span class="text-purple-400">interface</span> <span class="text-green-400">User</span> {</div>
            <div class="pl-4"><span class="text-blue-300">id</span>: <span class="text-green-400">string</span></div>
            <div class="pl-4"><span class="text-blue-300">name</span>: <span class="text-green-400">string</span></div>
            <div class="pl-4"><span class="text-blue-300">email</span>: <span class="text-green-400">string</span></div>
            <div>}</div>
            <div class="mt-2">
              <span class="text-purple-400">const</span>
              <span class="text-blue-300">user</span>:
              <span class="text-green-400">User</span> =
              <span class="text-purple-400">await</span>
              <span class="text-yellow-300">response</span>.<span class="text-yellow-300">json</span>()
            </div>
            <div class="mt-2">
              <span class="text-blue-300">user</span>.<span class="text-blue-300">name</span>.<span
                class="text-yellow-300">toUpperCase</span>()
            </div>
          </div>
        </MacWindow>

        <button @click="simulateFetch" :disabled="loading"
          class="px-6 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-800 disabled:cursor-wait rounded-lg font-semibold text-white transition-colors flex items-center justify-center gap-2">
          <span v-if="loading" class="animate-spin">⏳</span>
          <span v-else>🚀</span>
          {{ loading ? 'Fetching...' : 'Simuler fetch("/api/user")' }}
        </button>

        <button v-if="showResponse" @click="reset"
          class="px-4 py-2 bg-gray-600 hover:bg-gray-700 rounded-lg text-sm text-white transition-colors">
          🔄 Reset
        </button>
      </div>

      <div class="flex flex-col gap-4">
        <MacWindow title="Réponse de l'API">
          <div class="font-mono text-sm p-2 min-h-[180px] flex items-center justify-center">
            <div v-if="!loading && !showResponse" class="text-gray-400 text-center">
              <div class="text-4xl mb-2">📡</div>
              <div>Cliquez pour simuler l'appel API</div>
            </div>

            <div v-if="loading" class="text-blue-400 text-center">
              <div class="text-4xl mb-2 animate-bounce">📡</div>
              <div>Fetching /api/user...</div>
            </div>

            <div v-if="showResponse && !loading" class="w-full">
              <div class="text-yellow-300">{</div>
              <div class="pl-4">
                <span class="text-blue-300">"id"</span>:
                <span class="text-orange-400">42</span>,
                <span class="text-red-400 text-xs ml-2">← number!</span>
              </div>
              <div class="pl-4">
                <span class="text-blue-300">"name"</span>:
                <span class="text-purple-400">null</span>,
                <span class="text-red-400 text-xs ml-2">← null!</span>
              </div>
              <div class="pl-4">
                <span class="text-blue-300">"mail"</span>:
                <span class="text-green-400">"dorothy@oz.com"</span>
                <span class="text-red-400 text-xs ml-2">← mail ≠ email</span>
              </div>
              <div class="text-yellow-300">}</div>
            </div>
          </div>
        </MacWindow>
      </div>
    </div>

    <div v-if="showError" class="text-center text-xl text-red-400 font-semibold bg-red-900/30 rounded-lg py-4 px-6">
      💥 Cannot read properties of null (reading 'toUpperCase')
    </div>
  </div>
</template>
