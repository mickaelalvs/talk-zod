---
punctuation: ":"
---

# Au runtime, on rencontre

<div class="h-[90%] flex flex-col items-center justify-center gap-24">
  <div class="grid grid-cols-4 gap-16">
    <div v-click class="flex flex-col items-center gap-6">
      <img src="../assets/icon-apis.png" class="h-20" />
      <span class="text-xl font-bold">Réponses d'API</span>
    </div>
    <div v-click class="flex flex-col items-center gap-6">
      <img src="../assets/icon-forms.png" class="h-20" />
      <span class="text-xl font-bold">Formulaires</span>
    </div>
    <div v-click class="flex flex-col items-center gap-6">
      <img src="../assets/icon-env.png" class="h-20" />
      <span class="text-xl font-bold">Variables d'env</span>
    </div>
    <div v-click class="flex flex-col items-center gap-6">
      <img src="../assets/icon-json.png" class="h-20" />
      <span class="text-xl font-bold">JSON externes</span>
    </div>
  </div>

  <div v-click="5" class="text-center text-3xl font-bold">
    <p>Dès que la donnée n'est pas créée par TypeScript,</p>
    <p><span v-mark.underline.blue="5" class="text-[#3168B7] font-semibold">elle n'est plus digne de confiance.</span></p>
  </div>
</div>
