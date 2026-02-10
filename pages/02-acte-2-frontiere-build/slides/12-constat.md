<div class="h-[90%] flex flex-col items-center justify-center gap-6">

<div class="flex flex-col items-center gap-3">
  <div class="text-xl text-[#2D3748] italic font-bold">
    Au moment de la compilation, le type est une <span class="text-[#3168B7] font-semibold">promesse</span>...
  </div>
  <div class="text-2xl font-bold bg-green-100 text-green-700 px-8 py-4 rounded-lg border-2 border-green-300 whitespace-nowrap">✓ TypeScript OK</div>
</div>

<div v-click v-motion :initial="{ opacity: 0, y: 20 }" :enter="{ opacity: 1, y: 0, transition: { type: 'spring', stiffness: 300, damping: 20 } }" class="flex flex-col items-center gap-3">
  <div class="text-xl text-[#2D3748] italic font-bold">
    ...mais à l'exécution plus rien n'est <span class="text-[#D45656] font-semibold">garanti</span>...
  </div>
  <div class="text-2xl font-bold bg-red-100 text-red-700 px-8 py-4 rounded-lg border-2 border-red-300 whitespace-nowrap">✗ Crash</div>
</div>

</div>