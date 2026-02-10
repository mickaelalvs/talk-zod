# Ce n'est pas de la magie


<div class="grid grid-cols-3 gap-8 mt-30">
  <div
    v-click
    v-motion
    :initial="{ opacity: 0, scale: 0.8 }"
    :enter="{ opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 300, damping: 15 } }"
    class="flex flex-col items-center gap-4"
  >
    <img src="../assets/low-performance.png" class="h-28" />
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
    <img src="../assets/bundle-size.png" class="h-28" />
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
    <img src="../assets/alzheimer.png" class="h-28" />
    <div class="text-center">
      <div class="text-lg font-semibold text-[#3168B7] mb-1">Complexité DX</div>
      <span class="text-sm text-[#2D3748]">Un outil de plus à maîtriser</span>
    </div>
  </div>
</div>

<!--
Verifier bundle size avec la v4
-->
