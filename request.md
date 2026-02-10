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

<div v-click="4" class="text-center text-3xl font-bold pt-10">
  <h2>Le schéma devient la <span v-mark="{ at: 4, type: 'highlight', color: '#3168B7' }" class="text-white">source de vérité</span></h2>
  <p class="text-lg">Zod nous protège au <span v-mark="{ at: 4, type: 'underline', color: '#3168B7' }" class="text-[#3168B7] font-semibold">Runtime</span> ET au <span v-mark="{ at: 4, type: 'underline', color: '#3168B7' }" class="text-[#3168B7] font-semibold">BuildTime</span></p>
</div>

<!--
+ Ajouter slide ecosystème
-->
