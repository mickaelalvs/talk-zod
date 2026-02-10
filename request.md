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
Ajouter label Backend
Renomer le schéma
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
Changer le schéma pour ajouter de la composition

import z from "zod";

export const postRequestSchema = z.object({
  id: z.uuid(),
  title: z.string().min(4).max(100),
  pageCount: z.number().min(1),
  thumbnail: z.url(),
  hasBeenRead: z.boolean(),
});


export const requestSchema = postRequestSchema.extend({
  thumbnail: z.url().nullable() 
}).partial()
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

<!--
ENLEVER
-->

---

# Inférence automatique


<MacWindow title="Inférence de type" height="fit-content">

````md magic-move
```ts
export const PostRequestBodySchema = z.object({
  id: z.uuid(),
  title: z.string().min(4).max(100),
  pageCount: z.number().min(1),
  thumbnail: z.url(),
  hasBeenRead: z.boolean(),
})
```
```ts
export const PostRequestBodySchema = z.object({
  id: z.uuid(),
  title: z.string().min(4).max(100),
  pageCount: z.number().min(1),
  thumbnail: z.url(),
  hasBeenRead: z.boolean(),
})

const body: [???] = {...}
```
```ts
export const PostRequestBodySchema = z.object({
  id: z.uuid(),
  title: z.string().min(4).max(100),
  pageCount: z.number().min(1),
  thumbnail: z.url(),
  hasBeenRead: z.boolean(),
})

type PostRequestBody = z.infer<typeof PostRequestBodySchema>;

const body: PostRequestBody = {...}
```
````

</MacWindow>

<v-click>
<h2 class="pt-10">

Le schéma deviens la source de vérité ! 🗺️

</h2>
</v-click>

<v-click>

Zod nous protège au **Runtime** ET au **BuildTime**

</v-click>

<!--
TwoSlash avec Highlight

+ Ajouter slide ecosystème
-->
