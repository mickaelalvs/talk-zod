---
---

# Le code a changé aussi

<div class="flex items-center justify-center gap-6 h-[70%]">

<div class="flex-1">
<MacWindow title="api.ts" height="190px">

```ts {*}{lines:true} twoslash
interface User {
  name: string
  email: string
}

async function getUser(): Promise<User> {
  const res = await fetch("/api/user")
  return res.json()
}
```

</MacWindow>
</div>

<div class="text-5xl text-gray-400 flex-shrink-0">→</div>

<div class="flex-1 relative">
<MacWindow title="api.js" height="190px">

```js {*}{lines:true}
async function getUser() {
  const res = await fetch("/api/user")
  return res.json()
}

// interface User ? Disparu.
```

</MacWindow>
<img
  v-click
  v-motion
  :initial="{ opacity: 0, scale: 0.5 }"
  :enter="{ opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 300, damping: 15 } }"
  src="../assets/check.png"
  class="absolute -bottom-4 -left-4 h-16"
/>
</div>

</div>
