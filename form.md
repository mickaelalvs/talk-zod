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
Essayer de voir si je peux faire le refine en code

Ajouter le warning validation après celle du schéma
-->

---

# Un écosystème adapté

<!--
Ajouter slide librarie de formulaire
-->
