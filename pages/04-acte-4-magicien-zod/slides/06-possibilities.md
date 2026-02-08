---
punctuation: "..."
---

# Tellement de possibilités

<div class="grid grid-cols-2 gap-8 mt-20">

<div v-click v-motion :initial="{ opacity: 0, scale: 0.8 }" :enter="{ opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 400, damping: 15 } }">
  <div class="text-lg font-semibold text-[#3168B7] mb-3">Des primitives</div>
  <div class="grid grid-cols-2 gap-2">
    <div class="flex justify-center bg-[#F5F5F5] border border-[#2D3748] px-3 py-2 rounded">
      <code class="text-sm text-[#2D3748] bg-[#E7F4FD] px-2 py-0.5 rounded">z.string()</code>
    </div>
    <div class="flex justify-center bg-[#F5F5F5] border border-[#2D3748] px-3 py-2 rounded">
      <code class="text-sm text-[#2D3748] bg-[#E7F4FD] px-2 py-0.5 rounded">z.number()</code>
    </div>
    <div class="flex justify-center bg-[#F5F5F5] border border-[#2D3748] px-3 py-2 rounded">
      <code class="text-sm text-[#2D3748] bg-[#E7F4FD] px-2 py-0.5 rounded">z.boolean()</code>
    </div>
    <div class="flex justify-center bg-[#F5F5F5] border border-[#2D3748] px-3 py-2 rounded">
      <code class="text-sm text-[#2D3748] bg-[#E7F4FD] px-2 py-0.5 rounded">z.date()</code>
    </div>
    <div class="flex justify-center bg-[#F5F5F5] border border-[#2D3748] px-3 py-2 rounded">
      <code class="text-sm text-[#2D3748] bg-[#E7F4FD] px-2 py-0.5 rounded">z.enum()</code>
    </div>
    <div class="flex justify-center bg-[#F5F5F5] border border-[#2D3748] px-3 py-2 rounded">
      <code class="text-sm text-[#2D3748] bg-[#E7F4FD] px-2 py-0.5 rounded">z.array()</code>
    </div>
    <div class="flex justify-center bg-[#F5F5F5] border border-[#2D3748] px-3 py-2 rounded">
      <code class="text-sm text-[#2D3748] bg-[#E7F4FD] px-2 py-0.5 rounded">z.object()</code>
    </div>
    <div class="flex justify-center bg-[#F5F5F5] border border-[#2D3748] px-3 py-2 rounded text-sm italic text-[#666]">
      ...
    </div>
  </div>
</div>

<div v-click v-motion :initial="{ opacity: 0, scale: 0.8 }" :enter="{ opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 400, damping: 15 } }">
  <div class="text-lg font-semibold text-[#3168B7] mb-3">Des utilitaires</div>
  <div class="grid grid-cols-2 gap-2">
    <div class="flex justify-center bg-[#F5F5F5] border border-[#2D3748] px-3 py-2 rounded">
      <code class="text-sm text-[#2D3748] bg-[#E7F4FD] px-2 py-0.5 rounded">.min() .max()</code>
    </div>
    <div class="flex justify-center bg-[#F5F5F5] border border-[#2D3748] px-3 py-2 rounded">
      <code class="text-sm text-[#2D3748] bg-[#E7F4FD] px-2 py-0.5 rounded">.length()</code>
    </div>
    <div class="flex justify-center bg-[#F5F5F5] border border-[#2D3748] px-3 py-2 rounded">
      <code class="text-sm text-[#2D3748] bg-[#E7F4FD] px-2 py-0.5 rounded">.positive()</code>
    </div>
    <div class="flex justify-center bg-[#F5F5F5] border border-[#2D3748] px-3 py-2 rounded">
      <code class="text-sm text-[#2D3748] bg-[#E7F4FD] px-2 py-0.5 rounded">.negative()</code>
    </div>
    <div class="flex justify-center bg-[#F5F5F5] border border-[#2D3748] px-3 py-2 rounded">
      <code class="text-sm text-[#2D3748] bg-[#E7F4FD] px-2 py-0.5 rounded">.optional()</code>
    </div>
    <div class="flex justify-center bg-[#F5F5F5] border border-[#2D3748] px-3 py-2 rounded">
      <code class="text-sm text-[#2D3748] bg-[#E7F4FD] px-2 py-0.5 rounded">.nullable()</code>
    </div>
    <div class="flex justify-center bg-[#F5F5F5] border border-[#2D3748] px-3 py-2 rounded">
      <code class="text-sm text-[#2D3748] bg-[#E7F4FD] px-2 py-0.5 rounded">.email()</code>
    </div>
    <div class="flex justify-center bg-[#F5F5F5] border border-[#2D3748] px-3 py-2 rounded text-sm italic text-[#666]">
      ...
    </div>
  </div>
</div>

</div>

<v-click>
<div class="mt-10 text-center text-xl text-[#2D3748] italic">
  Et si on veut aller plus loin ?
</div>
</v-click>
