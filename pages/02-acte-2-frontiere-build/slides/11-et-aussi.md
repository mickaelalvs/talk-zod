---
---

# Et aussi...

<div class="grid grid-cols-2 gap-4 mt-15">

<div 
  v-click
  v-motion
  :initial="{ opacity: 0, scale: 0.8 }"
  :enter="{ opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 400, damping: 15 } }"
  class="flex flex-col">
<MacWindow title="upload.ts" height="100px">

```ts
const file = input.files[0]
const size: number = file.size
const type: string = file.type
// file.type = "image/png" ?
```

</MacWindow>
<div class="text-center text-sm font-bold text-[#2D3748] mt-3">Fichiers uploadés</div>
</div>

<div 
  v-click
  v-motion
  :initial="{ opacity: 0, scale: 0.8 }"
  :enter="{ opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 400, damping: 15 } }"
  class="flex flex-col">
<MacWindow title="config.ts" height="100px">

```ts
const port = process.env.PORT
const key = process.env.API_KEY
// string | undefined
```

</MacWindow>
<div class="text-center text-sm font-bold text-[#2D3748] mt-3">Variables d'environnement</div>
</div>

</div>

<div class="grid grid-cols-2 gap-4 mt-6">

<div 
  v-click
  v-motion
  :initial="{ opacity: 0, scale: 0.8 }"
  :enter="{ opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 400, damping: 15 } }"
  class="flex flex-col">
<MacWindow title="storage.ts" height="100px">

```ts
const user = localStorage.getItem("user")
const prefs = JSON.parse(user)
// null ? string ? object ?
```

</MacWindow>
<div class="text-center text-sm font-bold text-[#2D3748] mt-3">Données stockées</div>
</div>

<div 
  v-click
  v-motion
  :initial="{ opacity: 0, scale: 0.8 }"
  :enter="{ opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 400, damping: 15 } }"
  class="flex flex-col">
<MacWindow title="router.ts" height="100px">

```ts
const params = new URLSearchParams(location.search)
const page = params.get("page")
// string | null
```

</MacWindow>
<div class="text-center text-sm font-bold text-[#2D3748] mt-3">Paramètres d'URL</div>
</div>

</div>
