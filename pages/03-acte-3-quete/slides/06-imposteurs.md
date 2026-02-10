---
punctuation: "..."
---

# Les imposteurs du runtime

<div class="grid grid-cols-2 gap-10 mt-12">
  <div v-click v-motion :initial="{ opacity: 0, scale: 0.8 }" :enter="{ opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 400, damping: 15 } }" class="relative bg-[#F5F5F5] border-l-4 border-[#2D3748] px-6 py-4 rounded-r-lg">
    <span class="text-xl italic text-[#2D3748]">"C'est typé"</span>
    <span class="absolute -bottom-5 left-2 text-xs text-gray-400">Sauf pour les devs JS...</span>
  </div>
  <div v-click v-motion :initial="{ opacity: 0, scale: 0.8 }" :enter="{ opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 400, damping: 15 } }" class="bg-[#F5F5F5] border-l-4 border-[#2D3748] px-6 py-4 rounded-r-lg">
    <span class="text-xl italic text-[#2D3748]">"C'est validé en HTML"</span>
  </div>
  <div v-click v-motion :initial="{ opacity: 0, scale: 0.8 }" :enter="{ opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 400, damping: 15 } }" class="bg-[#F5F5F5] border-l-4 border-[#2D3748] px-6 py-4 rounded-r-lg">
    <span class="text-xl italic text-[#2D3748]">"On a mis des <code class="px-2 py-0.5 rounded" style="background: #E7F4FD">if</code>"</span>
  </div>
  <div v-click v-motion :initial="{ opacity: 0, scale: 0.8 }" :enter="{ opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 400, damping: 15 } }" class="bg-[#F5F5F5] border-l-4 border-[#2D3748] px-6 py-4 rounded-r-lg">
    <span class="text-xl italic text-[#2D3748]">"On a un validator maison"</span>
  </div>
</div>

<div v-click v-motion :initial="{ opacity: 0, x: -30 }" :enter="{ opacity: 1, x: 0, transition: { type: 'spring', stiffness: 300, damping: 20 } }" class="flex items-center gap-8 mt-12 ml-20">
  <img src="../assets/arrow.svg" class="h-36" />
  <div class="px-6 py-4 rounded-r-lg">
    <div class="mt-3 text-xl text-[#2D3748] font-semibold">
      Ils rassurent la personne qui écrit le code. <span class="font-black">Pas l'application.</span>
    </div>
    <div class="text-xl italic text-[#D45656] mt-3 font-semibold">La dette technique déguisée en magie.</div>
  </div>
</div>
