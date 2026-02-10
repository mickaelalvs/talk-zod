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
    <img src="../assets/zod.webp" class="h-20" />
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

<div v-click="3" class="mt-12 text-center text-2xl text-[#2D3748]">
  Ils sont <span v-mark="{ at: 3, type: 'highlight', color: '#3168B7' }" class="text-white font-bold">complémentaires</span>, pas concurrents.
</div>
