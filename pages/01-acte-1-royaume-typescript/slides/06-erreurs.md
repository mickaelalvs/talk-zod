---
class: flex flex-col
---

# Les erreurs avant l'exécution

<div
  v-click
  v-motion
  :initial="{ opacity: 0, y: 20 }"
  :enter="{ opacity: 1, y: 0, transition: { type: 'spring', stiffness: 200, damping: 20 } }"
>

<MacWindow title="greet.ts" height="170px">

```ts {*}{lines:true} twoslash
// @errors: 2345
function greet(name: string) {
  return `Hello, ${name}!`
}

greet(42)
```

</MacWindow>

</div>

<div class="flex-1 grid grid-cols-3 text-center items-end">
  <div
    v-click
    v-motion
    :initial="{ opacity: 0, scale: 0.5 }"
    :enter="{ opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 300, damping: 15 } }"
    class="flex flex-col items-center gap-6"
  >
    <img src="../assets/icon-error.png" class="h-20" />
    <span class="text-base font-semibold text-black">Éviter<br/>les erreurs</span>
  </div>
  <div
    v-click
    v-motion
    :initial="{ opacity: 0, scale: 0.5 }"
    :enter="{ opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 300, damping: 15 } }"
    class="flex flex-col items-center gap-6"
  >
    <img src="../assets/icon-bugs.png" class="h-20" />
    <span class="text-base font-semibold text-black">Détecter<br/>les bugs</span>
  </div>
  <div
    v-click
    v-motion
    :initial="{ opacity: 0, scale: 0.5 }"
    :enter="{ opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 300, damping: 15 } }"
    class="flex flex-col items-center gap-6"
  >
    <img src="../assets/icon-refactoring.png" class="h-20" />
    <span class="text-base font-semibold text-black">Refactoring<br/>fiable</span>
  </div>
</div>
