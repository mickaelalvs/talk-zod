# Un schéma c'est quoi ?

<div class="grid grid-cols-2 gap-8 mt-15">

<div>

<div class="text-lg font-semibold text-[#3168B7] mb-2">Ce qu'on veut valider</div>

<MacWindow title="types.ts" height="auto">

```ts
type User = {
  id: string;
  email: string;
  age: number;
  isActive: boolean;
  nickname?: string;
}
```

</MacWindow>

</div>

<div>

<div class="text-lg font-semibold text-[#3168B7] mb-2">Le schéma Zod</div>

<MacWindow title="schema.ts" height="auto">

````md magic-move
```ts
```
```ts
import { z } from "zod"
```
```ts
import { z } from "zod"

const UserSchema = z.object({})
```
```ts
import { z } from "zod"

const UserSchema = z.object({
  id: z.string(),
})
```
```ts
import { z } from "zod"

const UserSchema = z.object({
  id: z.string(),
  email: z.email(),
})
```
```ts
import { z } from "zod"

const UserSchema = z.object({
  id: z.string(),
  email: z.email(),
  age: z.number().min(0),
})
```
```ts
import { z } from "zod"

const UserSchema = z.object({
  id: z.string(),
  email: z.email(),
  age: z.number().min(0),
  isActive: z.boolean(),
})
```
```ts
import { z } from "zod"

const UserSchema = z.object({
  id: z.string(),
  email: z.email(),
  age: z.number().min(0),
  isActive: z.boolean(),
  nickname: z.string().optional(),
})
```
````

</MacWindow>

</div>

</div>

<v-click>

<div class="mt-12 text-center text-3xl text-[#2D3748] italic font-black">
  { Un schéma } → une description du format attendu 📏
</div>

</v-click>

<div v-click="9" class="absolute right-[190px] bottom-[183px] flex flex-col items-start gap-0">
  <span v-mark="{ at: 9, color: '#3168B7', type: 'circle' }" class="text-lg font-bold opacity-0">optional()+</span>
</div>

<div v-click="9" class="absolute right-[240px] bottom-[240px] flex flex-col items-start gap-0">
  <span v-mark="{ at: 9, color: '#3168B7', type: 'circle' }" class="text-lg font-bold opacity-0">email()</span>
</div>

<div v-click="9" class="absolute right-[260px] bottom-[220px] flex flex-col items-start gap-0">
  <span v-mark="{ at: 9, color: '#3168B7', type: 'circle' }" class="text-lg font-bold opacity-0">min(0)</span>
</div>

<!--
Replacer l'encerclement de l'email
-->
