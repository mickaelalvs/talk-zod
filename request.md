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
    <MacWindow title="Request schema" label="Backend" style="min-width: 400px">
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

---
transition: view-transition
---

# Request

<div class="flex justify-center items-stretch gap-8">
    <div class="request-window-container">
        <Request method="PATCH" />
    </div>
    <MacWindow title="Request schema" label="Backend" style="min-width: 400px">
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
transition: fade
---

# Inférence automatique


<MacWindow title="Inférence de type" height="fit-content">

```ts {1-7|11|9}{lines:true} twoslash
// @noErrors
import { z } from 'zod'
// ---cut---
export const PostRequestBodySchema = z.object({
  id: z.string().uuid(),
  title: z.string().min(4).max(100),
  pageCount: z.number().min(1),
  thumbnail: z.string().url(),
  hasBeenRead: z.boolean(),
})

type PostRequestBody = z.infer<typeof PostRequestBodySchema>

const body: PostRequestBody = {...}
```

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
+ Ajouter slide ecosystème
-->
