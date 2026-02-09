# Les alternatives

<div class="flex justify-center items-center gap-15 mt-15">
  <div v-click v-motion :initial="{ opacity: 0, scale: 0 }" :enter="{ opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 300, damping: 15 } }" class="flex flex-col items-center gap-3">
    <img src="../assets/zod.webp" class="h-20" />
    <span class="text-sm font-bold text-[#2D3748] border border-[#2D3748] rounded px-3 py-1">Zod Mini</span>
  </div>
  <div v-click v-motion :initial="{ opacity: 0, scale: 0 }" :enter="{ opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 300, damping: 15 } }" class="flex flex-col items-center gap-3">
    <img src="../assets/valibot.svg" class="h-20" />
    <span class="text-sm font-bold text-[#2D3748] border border-[#2D3748] rounded px-3 py-1">Valibot</span>
  </div>
  <div v-click v-motion :initial="{ opacity: 0, scale: 0 }" :enter="{ opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 300, damping: 15 } }" class="flex flex-col items-center gap-3">
    <img src="../assets/typebox.svg" class="h-20" />
    <span class="text-sm font-bold text-[#2D3748] border border-[#2D3748] rounded px-3 py-1">TypeBox</span>
  </div>
  <div v-click v-motion :initial="{ opacity: 0, scale: 0 }" :enter="{ opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 300, damping: 15 } }" class="flex flex-col items-center gap-3">
    <img src="../assets/arktype.png" class="h-20" />
    <span class="text-sm font-bold text-[#2D3748] border border-[#2D3748] rounded px-3 py-1">ArkType</span>
  </div>
  <div v-click v-motion :initial="{ opacity: 0, scale: 0 }" :enter="{ opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 300, damping: 15 } }" class="flex flex-col items-center gap-3">
    <img src="../assets/typia.png" class="h-20" />
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
