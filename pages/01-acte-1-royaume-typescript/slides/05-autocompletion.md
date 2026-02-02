---
class: flex flex-col
---

# Autocomplétion et DX de luxe

<div
  v-click
  v-motion
  :initial="{ opacity: 0, y: 20 }"
  :enter="{ opacity: 1, y: 0, transition: { type: 'spring', stiffness: 200, damping: 20 } }"
>

<MacWindow title="user.ts" height="130px">

```ts {monaco}
const user = {
  name: "Dorothy",
  email: "dorothy@kansas.com"
}

console.log(user)
```

</MacWindow>

</div>

<div class="flex-1 grid grid-cols-4 text-center items-end">
  <div
    v-click
    v-motion
    :initial="{ opacity: 0, scale: 0.5 }"
    :enter="{ opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 300, damping: 15 } }"
    class="flex flex-col items-center gap-6"
  >
    <img src="../assets/icon-autocomplete.png" class="h-20" />
    <span class="text-base font-semibold text-black">Autocomplétion<br/>intelligente</span>
  </div>
  <div
    v-click
    v-motion
    :initial="{ opacity: 0, scale: 0.5 }"
    :enter="{ opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 300, damping: 15 } }"
    class="flex flex-col items-center gap-6"
  >
    <img src="../assets/icon-navigation.png" class="h-20" />
    <span class="text-base font-semibold text-black">Navigation<br/>dans le code</span>
  </div>
  <div
    v-click
    v-motion
    :initial="{ opacity: 0, scale: 0.5 }"
    :enter="{ opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 300, damping: 15 } }"
    class="flex flex-col items-center gap-6"
  >
    <img src="../assets/icon-documentation.png" class="h-20" />
    <span class="text-base font-semibold text-black">Documentation<br/>vivante</span>
  </div>
  <div
    v-click
    v-motion
    :initial="{ opacity: 0, scale: 0.5 }"
    :enter="{ opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 300, damping: 15 } }"
    class="flex flex-col items-center gap-6"
  >
    <img src="../assets/icon-ecosystem.png" class="h-20" />
    <span class="text-base font-semibold text-black">Écosystème<br/>moderne</span>
  </div>
</div>
