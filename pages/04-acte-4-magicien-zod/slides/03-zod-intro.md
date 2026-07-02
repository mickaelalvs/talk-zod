<div class="flex flex-col items-center">
  <img src="../assets/zod.webp" class="h-42" />
</div>

<div class="mt-10 text-center text-xl text-[#2D3748] italic font-bold">
  Validation par <span v-mark="{ at: 4, color: '#3168B7', type: 'circle' }">schémas</span>, TypeScript-first, avec inférence de types statiques
</div>

<div class="flex justify-center gap-8 mt-12">
  <div v-click v-motion :initial="{ opacity: 0, scale: 0.8 }" :enter="{ opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 400, damping: 15 } }" class="flex flex-col items-center gap-4 bg-[#F5F5F5] border border-[#2D3748] p-6 rounded-lg w-40 h-40 justify-center">
    <img src="../assets/stars.webp" class="h-20" />
    <span class="text-sm font-bold text-[#2D3748] text-center">43k+ stars</span>
  </div>
  <div v-click v-motion :initial="{ opacity: 0, scale: 0.8 }" :enter="{ opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 400, damping: 15 } }" class="flex flex-col items-center gap-4 bg-[#F5F5F5] border border-[#2D3748] p-6 rounded-lg w-40 h-40 justify-center">
    <img src="../assets/tsjs.png" class="h-20" />
    <span class="text-sm font-bold text-[#2D3748] text-center">TypeScript + JS</span>
  </div>
  <div v-click v-motion :initial="{ opacity: 0, scale: 0.8 }" :enter="{ opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 400, damping: 15 } }" class="flex flex-col items-center gap-4 bg-[#F5F5F5] border border-[#2D3748] p-6 rounded-lg w-40 h-40 justify-center">
    <span class="text-7xl">📦</span>
    <span class="text-sm font-bold text-[#2D3748] text-center">0 dépendance</span>
  </div>
</div>
