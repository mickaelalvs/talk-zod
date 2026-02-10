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

<!--
Ajouter les validations HTML

Ajouter le bouton pour remplir le form
-->

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

# Sort de validation avancée
Quand le schéma ne suffit plus

Si l'API native de Zod ne suffit plus, `.refine()` est la pour vous

<MacWindow title="Refinement" height="fit-content">
````md magic-move
```ts
const PasswordSchema = z.object({
    password: z.string().min(12),
    passwordConfirmation: z.string().min(12)
});
```
```ts
const PasswordSchema = z.object({
    password: z.string().min(12),
    passwordConfirmation: z.string().min(12)
}).refine(data => data.password === data.passwordConfirmation, {
    message: "Les mots de passe ne correspondent pas",
    path: ["passwordConfirmation"]
})
```
````
</MacWindow>

<v-click>

<h3 class="pt-4">

Avec le `.refine()`, l’imagination est votre seul limite !

</h3>

</v-click>

<v-click>

<h3 class="pt-4">

⚠️ Cette validation s'effectue après celle du schéma

</h3>

</v-click>

<!--
ENLEVER + Ajouter slide librarie de formulaire
-->
