# Réponse d'API

<script setup>
import { ref } from 'vue'
const fetched = ref(false)
const showError = ref(false)
const showAnnotation = ref(false)

const doFetch = () => {
  fetched.value = true
  setTimeout(() => { showError.value = true }, 600)
}
</script>

<div class="absolute top-2 right-2 text-xs bg-green-100 text-green-700 px-2 py-1 rounded border border-green-300">
    ✓ TypeScript OK
  </div>

<div class="grid grid-cols-2 gap-8 mt-6">

<div class="relative">
<MacWindow title="Notre code TypeScript" height="210px">

```ts {*}{lines:true} twoslash
interface User {
  id: string
  name: string
  email: string
}

const response = await fetch("/api/user")
const user: User = await response.json()

user.name.toUpperCase()
```

</MacWindow>

<div v-click="1" class="absolute left-[30px] bottom-[12px] flex flex-col items-start gap-0">
  <span v-mark="{ at: 1, color: '#D45656', type: 'circle' }" class="text-lg font-bold opacity-0">user.name.toUpperCase()</span>
</div>
</div>

<div class="flex flex-col gap-4">

<MacWindow title="Réponse de l'API" height="210px">
  <div v-show="!fetched" class="h-[160px] flex items-center justify-center">
    <button @click="doFetch"
      class="px-4 py-2 bg-[#E7F4FD] hover:bg-[#d4ebfc] rounded text-gray-700 text-sm font-mono transition-colors cursor-pointer border border-[#374151]">
      ▶ fetch("/api/user")
    </button>
  </div>
  <div v-show="fetched">

```json
{
  "id": 42,
  "name": null,
  "mail": "dorothy@oz.com"
}
```

  </div>
</MacWindow>

</div>

</div>

<div v-if="showError" class="w-full text-left text-xs text-[#D45656] bg-[#F1E1E1] border-l-4 border-[#D45656] py-2 px-4 mt-10" style="font-family: 'Fira Code', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace">
  Cannot read properties of null (reading 'toUpperCase')
</div>

<div 
  v-click="2"
  v-motion
  :initial="{ opacity: 0, y: 20 }"
  :enter="{ opacity: 1, y: 0, transition: { type: 'spring', stiffness: 300, damping: 20 } }"
  class="mt-4 w-full flex justify-center">
  <span class="text-2xl font-bold px-5 py-3">Pourtant avant on était sûr, TypeScript a rien dit...</span>
</div>

<!--
"Typescript n'a rien dit"
-->
