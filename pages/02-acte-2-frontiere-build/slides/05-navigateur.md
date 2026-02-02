---
---

# Le navigateur ne comprend que...

<div class="flex flex-col items-center gap-8 pt-8">

<MacWindow title="Browser" height="auto">
  <div
    v-click
    v-motion
    :initial="{ opacity: 0, scale: 0.8 }"
    :enter="{ opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 300, damping: 15 } }"
    class="flex items-center justify-center gap-6 py-6 px-8"
  >
    <img src="../assets/logo-html.svg" class="h-20" />
    <span class="text-4xl font-bold text-blue-500">+</span>
    <img src="../assets/logo-css.svg" class="h-20" />
    <span class="text-4xl font-bold text-blue-500">+</span>
    <img src="../assets/logo-js.svg" class="h-20" />
  </div>
</MacWindow>

<div class="flex items-center gap-8 pt-8">
  <img
    v-click="2"
    v-motion
    :initial="{ opacity: 0, scale: 0.5 }"
    :enter="{ opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 300, damping: 15 } }"
    src="../assets/logo-ts.svg" class="h-34"
  />
  
  <div
    v-click="3"
    v-motion
    :initial="{ opacity: 0, x: -20 }"
    :enter="{ opacity: 1, x: 0, transition: { type: 'spring', stiffness: 300, damping: 15 } }"
    class="flex items-center gap-8"
  > 
    <span class="text-6xl font-bold text-blue-500">→</span>
    <div class="relative h-28 w-40 flex items-center justify-center">
      <img
        v-if="$clicks === 3"
        v-motion
        :initial="{ opacity: 0, scale: 0.5, rotate: -180 }"
        :enter="{ opacity: 1, scale: 1, rotate: 0, transition: { type: 'spring', stiffness: 300, damping: 15 } }"
        :leave="{ opacity: 0, scale: 0, rotate: 180, transition: { type: 'spring', stiffness: 300, damping: 20 } }"
        src="../assets/question.png"
        class="h-34 absolute"
      />
      <div
        v-if="$clicks >= 4"
        v-motion
        :initial="{ opacity: 0, scale: 0.5, rotate: -180 }"
        :enter="{ opacity: 1, scale: 1, rotate: 0, transition: { type: 'spring', stiffness: 300, damping: 15 } }"
        class="flex flex-col items-center gap-2 absolute"
      >
        <img src="../assets/swc.svg" class="h-14" />
        <div class="flex gap-3 justify-center">
          <img src="../assets/esbuild.svg" class="h-20" />
          <img src="../assets/tsc.png" class="h-20" />
        </div>
      </div>
    </div>
    <span class="text-6xl font-bold text-blue-500">→</span>
    <img src="../assets/logo-js.svg" class="h-34" />
  </div>
</div>

<div v-click="4" class="hidden"></div>

</div>
