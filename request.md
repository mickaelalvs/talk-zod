---
transition: view-transition
---

# Request

<div class="flex justify-center items-stretch gap-8">
    <div class="request-window-container">
        <Request />
    </div>
</div>


<style>
.request-window-container {
  view-transition-name: animated-request;
}

::view-transition-old(animated-request),
::view-transition-new(animated-request) {
  animation: none;
}
</style>

---
transition: view-transition
---

# Request

<div class="flex justify-center items-stretch gap-8">
    <div class="request-window-container">
        <Request />
    </div>
    <MacWindow title="request schema" style="min-width: 400px">
<<< ./components/requests/request-schema.ts {monaco-write} {height: 'auto'}
    </MacWindow>
</div>

<style>
.request-window-container {
  view-transition-name: animated-request;
}

::view-transition-old(animated-request),
::view-transition-new(animated-request) {
  animation: none;
}
</style>

<!--
L'idée est d'ajouter un .optional() au champs "hasBeenRead", pour pouvoir faire un post sans le donner
Ensuite, on peut aussi montrer le .default(false) pour mettre une valeur par défaut
-->

---
transition: view-transition
---

# Request

<div class="flex justify-center items-stretch gap-8">
    <div class="request-window-container">
        <Request method="PATCH" />
    </div>
    <MacWindow title="request schema" style="min-width: 400px">
<<< ./components/requests/request-schema.ts {monaco-write} {height: 'auto'}
    </MacWindow>
</div>

<style>
.request-window-container {
  view-transition-name: animated-request;
}

::view-transition-old(animated-request),
::view-transition-new(animated-request) {
  animation: none;
}
</style>

<!--
Ici on montre le .partial(), pour transformer une validation d'un POST en PATCH
-->


---
transition: view-transition
---

# Request

<MacWindow title="Optionalité">
    <span class="pl-4 pt-2 block text-sm font-semibold">Zod nous fournis plusieurs outils pour gérer l'optionalité de nos schéma</span>

```ts
z.string().optional() // undefined
z.string().nullabel() // null
z.string().nullish()  // null || undefined

z.object().partial()  // Every field is optional
z.object().required() // Every field is required
```
</MacWindow>

<style>
.mac-content {
    padding: 1rem
}
</style>