---
punctuation: "?"
---

# Mais le HTML valide déjà ça non

<div class="mt-20">

<div class="grid grid-cols-4 gap-8">
  <div 
    v-click
    v-motion
    :initial="{ opacity: 0, scale: 0.8 }"
    :enter="{ opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 400, damping: 15 } }"
    class="flex flex-col items-center gap-4">
    <div class="h-20 flex items-center justify-center overflow-hidden px-1">
      <span class="text-[15px] text-[#3168B7] leading-tight break-all text-center font-black">/^[\w.!#$%&'*+/=?^`{|}~-]+@[a-z\d](?:[a-z\d-]{0,61}[a-z\d])?(?:\.[a-z\d](?:[a-z\d-]{0,61}[a-z\d])?)*$/i;</span>
    </div>
    <span class="text-base text-center font-bold text-[#2D3748] mt-2">Format email</span>
  </div>
  <div 
    v-click
    v-motion
    :initial="{ opacity: 0, scale: 0.8 }"
    :enter="{ opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 400, damping: 15 } }"
    class="flex flex-col items-center gap-4">
    <div class="h-20 flex items-center justify-center">
      <img src="../assets/icon-require.png" class="h-20" />
    </div>
    <span class="text-base text-center font-bold text-[#2D3748] mt-2">Champ requis</span>
  </div>
  <div 
    v-click
    v-motion
    :initial="{ opacity: 0, scale: 0.8 }"
    :enter="{ opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 400, damping: 15 } }"
    class="flex flex-col items-center gap-4">
    <div class="h-20 flex items-center justify-center">
      <img src="../assets/icon-min-max.svg" class="h-20" />
    </div>
    <span class="text-base text-center font-bold text-[#2D3748] mt-2">Min/max</span>
  </div>
  <div 
    v-click
    v-motion
    :initial="{ opacity: 0, scale: 0.8 }"
    :enter="{ opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 400, damping: 15 } }"
    class="flex flex-col items-center gap-4">
    <div class="h-20 flex items-center justify-center">
      <span class="text-5xl text-[#2D3748]">...</span>
    </div>
    <span class="text-base text-center text-[#2D3748] font-bold mt-2">etc.</span>
  </div>
</div>

</div>

<div class="mt-20">

<div v-click class="text-center text-xl text-[#2D3748] mt-4">
  Mais même avec tout ça...<br/>
  <span class="text-[#D45656] font-bold">on ne sait jamais vraiment ce qu'on va recevoir...</span>
</div>

<div v-click="6" class="text-center text-3xl text-[#2D3748] mt-6 italic font-black">
  <span v-mark="{ at: 7, color: '#2D3748', type: 'underline' }">Ne jamais faire confiance au navigateur</span>
</div>

</div>
