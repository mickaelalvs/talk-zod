---
layout: default
---

# Le piège TypeScript avec les formulaires

<script setup>
import { ref } from 'vue'
const submitted = ref(false)
const showError = ref(false)

const doSubmit = () => {
  submitted.value = true
  setTimeout(() => { showError.value = true }, 800)
}
</script>

<div class="grid grid-cols-2 gap-8 mt-4">

<div class="flex flex-col gap-8">
  <MacWindow title="Formulaire" height="170px">
    <form @submit.prevent="doSubmit" class="p-3 space-y-2 text-xs">
      <div>
        <label class="block text-gray-600 mb-1 font-medium">Email</label>
        <input type="email" value="john@example.com" required class="w-full px-2 py-1 border border-gray-300 rounded bg-white text-black" />
      </div>
      <div>
        <label class="block text-gray-600 mb-1 font-medium">Âge</label>
        <input type="number" value="25" required min="0" max="150" class="w-full px-2 py-1 border border-gray-300 rounded bg-white text-black" />
      </div>
      <button v-show="!submitted" type="submit" class="w-full bg-blue-500 text-white py-1.5 rounded hover:bg-blue-600 cursor-pointer transition text-sm">
        Envoyer →
      </button>
      <div v-show="submitted" class="w-full bg-green-100 text-green-700 py-1.5 rounded text-center border border-green-300">
        ✓ Envoyé
      </div>
    </form>
  </MacWindow>

  <MacWindow title="Console" height="90px">
    <div v-show="!submitted" class="h-full flex items-center justify-center text-gray-400 text-sm">
    </div>
    <div v-show="submitted" class="p-3 text-sm font-mono">
      <div><span class="text-gray-500">typeof data.age:</span> <span class="text-orange-600">"string"</span></div>
      <div class="mt-4"><span class="text-gray-500">ageNextYear:</span> <span class="text-[#D45656] font-bold">"251"</span> <span class="text-gray-400">❌</span></div>
    </div>
  </MacWindow>
</div>

<MacWindow title="login.ts" height="300px">
  <div class="absolute top-2 right-2 text-xs bg-green-100 text-green-700 px-2 py-1 rounded border border-green-300">
    ✓ TypeScript OK
  </div>

```ts {*}{lines:true} twoslash
interface FormData {
  email: string
  age: number
}

function handleSubmit(event: SubmitEvent) {
  const form = event.target as HTMLFormElement
  
  const data = {
    email: form.email.value,
    age: form.age.value,
  } as FormData
  
  const ageNextYear = data.age + 1
}
```

</MacWindow>

<div v-click="1" class="absolute right-[300px] bottom-[170px] flex flex-col items-start gap-0">
  <span v-mark="{ at: 1, color: '#D45656', type: 'circle' }" class="text-lg font-bold opacity-0">as FormData</span>
</div>

</div>

<!--
Rename FormData en UserFormData ou UserData
-->
