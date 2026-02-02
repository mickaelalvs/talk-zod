---
---

# Les `if` magiques

<MacWindow title="validation.ts" height="70px">

```ts
if (typeof age === "number" && age >= 18) {
  // 🤞 on espère que tout va bien
}
```

</MacWindow>

<div class="mt-10"></div>

<div v-click>

### Mais aussi...

</div>

<div v-click v-motion :initial="{ opacity: 0, scale: 0.8 }" :enter="{ opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 400, damping: 15 } }" class="mt-6 space-y-4">
  <div class="grid grid-cols-2 gap-4">
    <div class="flex items-center gap-3 bg-[#F5F5F5] border border-[#2D3748] px-4 py-2 rounded">
      <span class="text-2xl">🔐</span>
      <code class="text-sm text-[#2D3748] bg-[#E7F4FD] px-2 py-0.5 rounded">password === confirmPassword</code>
    </div>
    <div class="flex items-center gap-3 bg-[#F5F5F5] border border-[#2D3748] px-4 py-2 rounded">
      <span class="text-2xl">📅</span>
      <code class="text-sm text-[#2D3748] bg-[#E7F4FD] px-2 py-0.5 rounded">dateFin > dateDebut</code>
    </div>
  </div>
  <div class="grid grid-cols-2 gap-4">
    <div class="flex items-center gap-3 bg-[#F5F5F5] border border-[#2D3748] px-4 py-2 rounded">
      <span class="text-2xl">⏱️</span>
      <code class="text-sm text-[#2D3748]">Validation temps réel</code>
    </div>
    <div class="flex items-center gap-3 bg-[#F5F5F5] border border-[#2D3748] px-4 py-2 rounded">
      <span class="text-2xl">📁</span>
      <code class="text-sm text-[#2D3748] px-2 py-0.5 rounded">fileSize ≤ 5MB</code>
    </div>
    <div class="flex items-center gap-3 bg-[#F5F5F5] border border-[#2D3748] px-4 py-2 rounded">
      <span class="text-2xl">📊</span>
      <code class="text-sm text-[#2D3748]">Validation JSON structuré</code>
    </div>
    <div class="flex items-center gap-3 bg-[#F5F5F5] border border-[#2D3748] px-4 py-2 rounded">
      <span class="text-2xl">🔤</span>
      <code class="text-[#2D3748] px-2 py-0.5 rounded" style="font-size: 15px">/^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/</code>
    </div>
  </div>
</div>
