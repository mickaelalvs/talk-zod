---
punctuation: "?"
---

# Quand (ne pas) utiliser <img src="/assets/images/zod.webp" class="inline h-10 align-middle" />

<div class="flex flex-col gap-4 mt-6 max-w-3xl mx-auto">

<div v-click v-motion :initial="{ opacity: 0, scale: 0.8 }" :enter="{ opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 400, damping: 15 } }" class="flex items-center gap-3 bg-[#F5F5F5] border border-[#2D3748] px-4 py-4 rounded">
  <img src="../assets/icon-check.png" class="h-8" />
  <div class="text-base font-bold text-[#2D3748] flex-1">Des inputs que vous ne contrôlez pas</div>
  <div class="flex items-center gap-2 text-sm">→ <strong class="text-[#3168B7]">Utilisez</strong> <img src="../assets/zod.webp" class="inline h-4" /></div>
</div>

<div v-click v-motion :initial="{ opacity: 0, scale: 0.8 }" :enter="{ opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 400, damping: 15 } }" class="flex items-center gap-3 bg-[#F5F5F5] border border-[#2D3748] px-4 py-4 rounded">
  <img src="../assets/icon-check.png" class="h-8" />
  <div class="text-base font-bold text-[#2D3748] flex-1">Des inputs de confiance mais externes</div>
  <div class="flex items-center gap-2 text-sm">→ <strong class="text-[#3168B7]">Validez avec</strong> <img src="../assets/zod.webp" class="inline h-4" /></div>
</div>

<div v-click v-motion :initial="{ opacity: 0, scale: 0.8 }" :enter="{ opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 400, damping: 15 } }" class="flex items-center gap-3 bg-[#F5F5F5] border border-[#2D3748] px-4 py-4 rounded">
  <img src="../assets/icon-cross.png" class="h-8" />
  <div class="text-base font-bold text-[#2D3748] flex-1">Des inputs internes et contrôlés</div>
  <div class="flex items-center gap-2 text-sm">→ <strong>Pas besoin de</strong> <img src="../assets/zod.webp" class="inline h-4" /></div>
</div>

<div v-click v-motion :initial="{ opacity: 0, scale: 0.8 }" :enter="{ opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 400, damping: 15 } }" class="flex items-center gap-3 bg-[#F5F5F5] border border-[#2D3748] px-4 py-4 rounded">
  <img src="../assets/icon-cross.png" class="h-8" />
  <div class="text-base font-bold text-[#2D3748] flex-1">Des données passées entre vos fonctions</div>
  <div class="flex items-center gap-2 text-sm">→ <img src="/assets/images/ts.png" class="inline h-4" /> <strong>suffit</strong></div>
</div>

<div v-click v-motion :initial="{ opacity: 0, scale: 0.8 }" :enter="{ opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 400, damping: 15 } }" class="flex items-center gap-3 bg-[#F5F5F5] border border-[#2D3748] px-4 py-4 rounded">
  <img src="../assets/icon-cross.png" class="h-8" />
  <div class="text-base font-bold text-[#2D3748] flex-1">Des boucles critiques en performance</div>
  <div class="flex items-center gap-2 text-sm">→ <strong>Pas besoin de</strong> <img src="../assets/zod.webp" class="inline h-4" /></div>
</div>

</div>
