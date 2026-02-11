---
transition: view-transition
---

# Form

<div class="flex justify-center items-stretch gap-8">
<div class="form-window-container">
<MacWindow title="Formulaire" height="fit-content">
    <PasswordHtmlForm />
</MacWindow>
</div>
</div>

<style>
.form-window-container {
  view-transition-name: animated-form;
}

::view-transition-old(animated-form),
::view-transition-new(animated-form) {
  animation: none;
}
</style>

---
transition: view-transition
---

# Form

<div class="flex justify-center items-stretch gap-8">
<div class="form-window-container">
<MacWindow title="Formulaire" height="fit-content">
    <PasswordForm />
</MacWindow>
</div>
<div class='w-1/2 z-0'>
<MacWindow title="Schema" height="fit-content">

<<< ./components/forms/password-schema.ts {monaco-write} {height: 'auto'}

</MacWindow>
</div>
</div>

<style>
.form-window-container {
  view-transition-name: animated-form;
}

::view-transition-old(animated-form),
::view-transition-new(animated-form) {
  animation: none;
}
</style>

<!--
Ajouter le warning validation après celle du schéma
-->

---

# Un écosystème adapté


<div class="flex justify-center items-center gap-20 mt-35">
  <div v-click v-motion :initial="{ opacity: 0, scale: 0 }" :enter="{ opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 300, damping: 15 } }" class="flex flex-col items-center gap-3">
    <img src="./assets/tanstack.png" class="w-30" />
    <span class="text-sm font-bold text-[#2D3748] border border-[#2D3748] rounded px-3 py-1">TanStack Form</span>
  </div>
  <div v-click v-motion :initial="{ opacity: 0, scale: 0 }" :enter="{ opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 300, damping: 15 } }" class="flex flex-col items-center gap-3">
    <img src="./assets/superforms.png" class="w-30 rounded-md" />
    <span class="text-sm font-bold text-[#2D3748] border border-[#2D3748] rounded px-3 py-1">sveltekit-superform</span>
  </div>
  <div v-click v-motion :initial="{ opacity: 0, scale: 0 }" :enter="{ opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 300, damping: 15 } }" class="flex flex-col items-center gap-3">
    <img src="./assets/react-hook-form.png" class="w-30" />
    <span class="text-sm font-bold text-[#2D3748] border border-[#2D3748] rounded px-3 py-1">react-hook-form</span>
  </div>
  <div v-click v-motion :initial="{ opacity: 0, scale: 0 }" :enter="{ opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 300, damping: 15 } }" class="flex flex-col items-center gap-3">
    <img src="./assets/regle.svg" class="w-30" />
    <span class="text-sm font-bold text-[#2D3748] border border-[#2D3748] rounded px-3 py-1">regle</span>
  </div>
</div>
