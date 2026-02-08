---
layout: act
actNumber: VII
---

La Sorcière de l'Ouest

---
layout: story
---

Mais toute magie a un prix...

<v-click>

La **Sorcière de l'Ouest** rode.

</v-click>

<v-click>

Elle murmure des vérités dérangeantes :

</v-click>

<v-click>

*"Ce magicien n'est pas parfait..."*

</v-click>

<v-click>

*"Il a des faiblesses..."*

</v-click>

<v-click>

**Et elle n'a pas tort.**

</v-click>

---

# Ce n'est pas de la magie


<div class="grid grid-cols-3 gap-8 mt-30">
  <div
    v-click
    v-motion
    :initial="{ opacity: 0, scale: 0.8 }"
    :enter="{ opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 300, damping: 15 } }"
    class="flex flex-col items-center gap-4"
  >
    <img src="./assets/low-performance.png" class="h-28" />
    <div class="text-center">
      <div class="text-lg font-semibold text-[#3168B7] mb-1">Performance</div>
      <span class="text-sm text-[#2D3748]">Le parsing n'est pas gratuit</span>
    </div>
  </div>

  <div
    v-click
    v-motion
    :initial="{ opacity: 0, scale: 0.8 }"
    :enter="{ opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 300, damping: 15 } }"
    class="flex flex-col items-center gap-4"
  >
    <img src="./assets/bundle-size.png" class="h-28" />
    <div class="text-center">
      <div class="text-lg font-semibold text-[#3168B7] mb-1">Bundle Size</div>
      <span class="text-sm text-[#2D3748]">~50kb minifié</span>
    </div>
  </div>

  <div
    v-click
    v-motion
    :initial="{ opacity: 0, scale: 0.8 }"
    :enter="{ opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 300, damping: 15 } }"
    class="flex flex-col items-center gap-4"
  >
    <img src="./assets/alzheimer.png" class="h-28" />
    <div class="text-center">
      <div class="text-lg font-semibold text-[#3168B7] mb-1">Complexité DX</div>
      <span class="text-sm text-[#2D3748]">Un outil de plus à maîtriser</span>
    </div>
  </div>
</div>

---

# Zod ne remplace pas TypeScript

<div class="grid grid-cols-2 gap-12 mt-12">

<div v-click v-motion :initial="{ opacity: 0, x: -30 }" :enter="{ opacity: 1, x: 0, transition: { duration: 500 } }">
  <div class="flex justify-center mb-4">
    <img src="/assets/images/ts.png" class="h-20" />
  </div>
  <div class="bg-[#F5F5F5] border border-[#2D3748] rounded-lg p-5">
    <ul class="space-y-3 text-[#2D3748]">
      <li class="flex items-start gap-2">
        <span class="text-[#3168B7]">→</span>
        <span>Validation <strong>statique</strong> (compile-time)</span>
      </li>
      <li class="flex items-start gap-2">
        <span class="text-[#3168B7]">→</span>
        <span>S'efface à la compilation</span>
      </li>
      <li class="flex items-start gap-2">
        <span class="text-[#3168B7]">→</span>
        <span>Protège le <strong>code interne</strong></span>
      </li>
    </ul>
  </div>
</div>

<div v-click v-motion :initial="{ opacity: 0, x: 30 }" :enter="{ opacity: 1, x: 0, transition: { duration: 500 } }">
  <div class="flex justify-center mb-4">
    <img src="./assets/zod.webp" class="h-20" />
  </div>
  <div class="bg-[#F5F5F5] border border-[#2D3748] rounded-lg p-5">
    <ul class="space-y-3 text-[#2D3748]">
      <li class="flex items-start gap-2">
        <span class="text-[#3168B7]">→</span>
        <span>Validation <strong>dynamique</strong> (runtime)</span>
      </li>
      <li class="flex items-start gap-2">
        <span class="text-[#3168B7]">→</span>
        <span>S'exécute dans le bundle</span>
      </li>
      <li class="flex items-start gap-2">
        <span class="text-[#3168B7]">→</span>
        <span>Protège les <strong>frontières</strong></span>
      </li>
    </ul>
  </div>
</div>

</div>

<v-click>
<div class="mt-12 text-center text-2xl text-[#2D3748]">
  Ils sont <strong class="text-[#3168B7]">complémentaires</strong>, pas concurrents.
</div>
</v-click>

---

# Les alternatives

<div class="flex justify-center items-center gap-15 mt-15">
  <div v-click v-motion :initial="{ opacity: 0, scale: 0 }" :enter="{ opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 300, damping: 15 } }" class="flex flex-col items-center gap-3">
    <img src="./assets/zod.webp" class="h-20" />
    <span class="text-sm font-bold text-[#2D3748] border border-[#2D3748] rounded px-3 py-1">Zod Mini</span>
  </div>
  <div v-click v-motion :initial="{ opacity: 0, scale: 0 }" :enter="{ opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 300, damping: 15 } }" class="flex flex-col items-center gap-3">
    <img src="./assets/valibot.svg" class="h-20" />
    <span class="text-sm font-bold text-[#2D3748] border border-[#2D3748] rounded px-3 py-1">Valibot</span>
  </div>
  <div v-click v-motion :initial="{ opacity: 0, scale: 0 }" :enter="{ opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 300, damping: 15 } }" class="flex flex-col items-center gap-3">
    <img src="./assets/typebox.svg" class="h-20" />
    <span class="text-sm font-bold text-[#2D3748] border border-[#2D3748] rounded px-3 py-1">TypeBox</span>
  </div>
  <div v-click v-motion :initial="{ opacity: 0, scale: 0 }" :enter="{ opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 300, damping: 15 } }" class="flex flex-col items-center gap-3">
    <img src="./assets/arktype.png" class="h-20" />
    <span class="text-sm font-bold text-[#2D3748] border border-[#2D3748] rounded px-3 py-1">ArkType</span>
  </div>
  <div v-click v-motion :initial="{ opacity: 0, scale: 0 }" :enter="{ opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 300, damping: 15 } }" class="flex flex-col items-center gap-3">
    <img src="./assets/typia.png" class="h-20" />
    <span class="text-sm font-bold text-[#2D3748] border border-[#2D3748] rounded px-3 py-1">Typia</span>
  </div>
</div>

 

<v-click>
<div class="grid grid-cols-3 gap-x-8 gap-y-2 mt-15 text-[#2D3748] max-w-4xl mx-auto">
  <div class="flex items-center gap-2"><span class="text-[#3168B7]">→</span> Performances au Runtime</div>
  <div class="flex items-center gap-2"><span class="text-[#3168B7]">→</span> Taille du bundle</div>
  <div class="flex items-center gap-2"><span class="text-[#3168B7]">→</span> Facilité d'écriture</div>
  <div class="flex items-center gap-2"><span class="text-[#3168B7]">→</span> Intégration IDE</div>
  <div class="flex items-center gap-2"><span class="text-[#3168B7]">→</span> Écosystème TypeScript</div>
  <div class="flex items-center gap-2"><span class="text-[#3168B7]">→</span> Features additionnelles</div>
</div>
</v-click>

<v-click>
<div class="mt-12 text-center text-xl text-[#2D3748] italic font-bold">
  Des philosophies et des fonctionnements <span v-mark="{ at: 7, type: 'underline', color: '#3168B7' }">très différents</span>.
</div>
</v-click> 
<v-click>
<div class="mt-4 text-center text-lg text-[#2D3748]">
  Mais un <strong class="text-[#3168B7]">objectif commun</strong> : valider les données au runtime !
</div>
</v-click>

---

# La naissance d'un standard

<div v-click class="flex justify-center items-center gap-16 mt-16">
  <div class="grid grid-cols-2 gap-6">
    <img src="./assets/zod.webp" class="h-16" />
    <img src="./assets/valibot.svg" class="h-20" />
    <img src="./assets/arktype.png" class="h-16" />
    <img src="./assets/typebox.svg" class="h-18" />
  </div>
  <span class="text-6xl text-[#3168B7]">→</span>
  <img src="./assets/standard_schema.png" class="h-40" />
</div>

<v-click>
<div class="mt-20 text-center text-lg text-[#2D3748] text-balance">
  Un standard pour permettre à <span v-mark="{ at: 2, type: 'highlight', color: '#3168B7' }" class="text-white">tous les outils</span> d'interagir avec <span v-mark="{ at: 2, type: 'highlight', color: '#3168B7' }" class="text-white">toutes les bibliothèques</span> de validation.
</div>
</v-click>

<div v-click="1" class="mt-18 text-center text-sm text-[#3168B7]">
  <a href="https://standardschema.dev/" target="_blank">standardschema.dev</a>
</div>


---

# Quand (ne pas) utiliser Zod ?

<div class="flex flex-col gap-4 mt-6 max-w-3xl mx-auto">

<div v-click v-motion :initial="{ opacity: 0, scale: 0.8 }" :enter="{ opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 400, damping: 15 } }" class="flex items-center gap-3 bg-[#F5F5F5] border border-[#2D3748] px-4 py-4 rounded">
  <img src="./assets/icon-check.png" class="h-8" />
  <div class="text-base font-bold text-[#2D3748] flex-1">Des inputs que vous ne contrôlez pas</div>
  <div class="flex items-center gap-2 text-sm">→ <strong class="text-[#3168B7]">Utilisez</strong> <img src="./assets/zod.webp" class="inline h-4" /></div>
</div>

<div v-click v-motion :initial="{ opacity: 0, scale: 0.8 }" :enter="{ opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 400, damping: 15 } }" class="flex items-center gap-3 bg-[#F5F5F5] border border-[#2D3748] px-4 py-4 rounded">
  <img src="./assets/icon-check.png" class="h-8" />
  <div class="text-base font-bold text-[#2D3748] flex-1">Des inputs de confiance mais externes</div>
  <div class="flex items-center gap-2 text-sm">→ <strong class="text-[#3168B7]">Validez avec</strong> <img src="./assets/zod.webp" class="inline h-4" /></div>
</div>

<div v-click v-motion :initial="{ opacity: 0, scale: 0.8 }" :enter="{ opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 400, damping: 15 } }" class="flex items-center gap-3 bg-[#F5F5F5] border border-[#2D3748] px-4 py-4 rounded">
  <img src="./assets/icon-cross.png" class="h-8" />
  <div class="text-base font-bold text-[#2D3748] flex-1">Des inputs internes et contrôlés</div>
  <div class="flex items-center gap-2 text-sm">→ <strong>Pas besoin de</strong> <img src="./assets/zod.webp" class="inline h-4" /></div>
</div>

<div v-click v-motion :initial="{ opacity: 0, scale: 0.8 }" :enter="{ opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 400, damping: 15 } }" class="flex items-center gap-3 bg-[#F5F5F5] border border-[#2D3748] px-4 py-4 rounded">
  <img src="./assets/icon-cross.png" class="h-8" />
  <div class="text-base font-bold text-[#2D3748] flex-1">Des données passées entre vos fonctions</div>
  <div class="flex items-center gap-2 text-sm">→ <img src="/assets/images/ts.png" class="inline h-4" /> <strong>suffit</strong></div>
</div>

<div v-click v-motion :initial="{ opacity: 0, scale: 0.8 }" :enter="{ opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 400, damping: 15 } }" class="flex items-center gap-3 bg-[#F5F5F5] border border-[#2D3748] px-4 py-4 rounded">
  <img src="./assets/icon-cross.png" class="h-8" />
  <div class="text-base font-bold text-[#2D3748] flex-1">Des boucles critiques en performance</div>
  <div class="flex items-center gap-2 text-sm">→ <strong>Pas besoin de</strong> <img src="./assets/zod.webp" class="inline h-4" /></div>
</div>

</div>