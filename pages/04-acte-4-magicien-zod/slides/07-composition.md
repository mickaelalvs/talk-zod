# La composition, votre meilleur ami

<div class="grid grid-cols-2 gap-8 mt-14">

<div v-click v-motion :initial="{ opacity: 0, scale: 0.8 }" :enter="{ opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 400, damping: 15 } }">

<div class="text-lg font-semibold text-[#3168B7] mb-2">Imbriquer des schémas</div>

<MacWindow title="composition.ts" height="200px">

```ts
const ContactSchema = z.object({
  name: z.string(),
  email: z.email(),
})

const CustomerSchema = z.object({
  name: z.string(),
  contacts: z.array(ContactSchema)
})
```

</MacWindow>

</div>

<div v-click v-motion :initial="{ opacity: 0, scale: 0.8 }" :enter="{ opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 400, damping: 15 } }">

<div class="text-lg font-semibold text-[#3168B7] mb-2">Étendre un schéma</div>

<MacWindow title="extends.ts" height="200px">

```ts
const PersonSchema = z.object({
  id: z.string(),
  name: z.string(),
})

const EmployeeSchema = PersonSchema.extend({
  manager: z.string(),
})
```

</MacWindow>

</div>

</div>

---
punctuation: "?"
---

# Et une fois que j'ai mon schéma

<div class="grid grid-cols-2 gap-8 mt-14">

<div v-click v-motion :initial="{ opacity: 0, scale: 0.8 }" :enter="{ opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 400, damping: 15 } }">

<MacWindow title="schema.parse()" height="auto">

```ts twoslash
import { z } from 'zod';

const UserSchema = z.object({
  name: z.string(),
  age: z.number().min(0),
})

try {
  const user = UserSchema.parse({ 
    name: "Alice", 
    age: -5 
  })
} catch (error) {
  console.error(error)
}
```

</MacWindow>

</div>

<div v-click v-motion :initial="{ opacity: 0, scale: 0.8 }" :enter="{ opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 400, damping: 15 } }">

<MacWindow title="schema.safeParse()" height="auto">

```ts twoslash
import { z } from 'zod';

const UserSchema = z.object({
  name: z.string(),
  age: z.number().min(0),
})

const result = UserSchema.safeParse({ 
  name: "Alice", 
  age: -5 
})

if (!result.success) {
  console.error(result.error.issues)
} else {
  console.log(result.data)
}
```

</MacWindow>

</div>

</div>

---

-

# Et une fois que j'ai mon schéma ?

<div class="grid grid-cols-2 gap-8 mt-14">

<div v-click v-motion :initial="{ opacity: 0, scale: 0.8 }" :enter="{ opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 400, damping: 15 } }">

<MacWindow title="schema.parse()" height="auto">

```ts twoslash
import { z } from 'zod';

const UserSchema = z.object({
  name: z.string(),
  age: z.number().min(0),
})

try {
  const user = UserSchema.parse({ 
    name: "Alice", 
    age: -5 
  })
} catch (error) {
  console.error(error)
}
```

</MacWindow>

</div>

<div v-click v-motion :initial="{ opacity: 0, scale: 0.8 }" :enter="{ opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 400, damping: 15 } }">

<MacWindow title="schema.safeParse()" height="auto">

```ts twoslash
import { z } from 'zod';

const UserSchema = z.object({
  name: z.string(),
  age: z.number().min(0),
})

const result = UserSchema.safeParse({ 
  name: "Alice", 
  age: -5 
})

if (!result.success) {
  console.error(result.error.issues)
} else {
  console.log(result.data)
}
```

</MacWindow>

</div>

</div>

---



# Et une fois que j'ai mon schéma ?

<div class="grid grid-cols-2 gap-8 mt-14">

<div v-click v-motion :initial="{ opacity: 0, scale: 0.8 }" :enter="{ opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 400, damping: 15 } }">

<MacWindow title="schema.parse()" height="auto">

```ts twoslash
import { z } from 'zod';

const UserSchema = z.object({
  name: z.string(),
  age: z.number().min(0),
})

try {
  const user = UserSchema.parse({ 
    name: "Alice", 
    age: -5 
  })
} catch (error) {
  console.error(error)
}
```

</MacWindow>

</div>

<div v-click v-motion :initial="{ opacity: 0, scale: 0.8 }" :enter="{ opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 400, damping: 15 } }">

<MacWindow title="schema.safeParse()" height="auto">

```ts twoslash
import { z } from 'zod';

const UserSchema = z.object({
  name: z.string(),
  age: z.number().min(0),
})

const result = UserSchema.safeParse({ 
  name: "Alice", 
  age: -5 
})

if (!result.success) {
  console.error(result.error.issues)
} else {
  console.log(result.data)
}
```

</MacWindow>

</div>

</div>

---

# Et une fois que j'ai mon schéma ?

<div class="grid grid-cols-2 gap-8 mt-14">

<div v-click v-motion :initial="{ opacity: 0, scale: 0.8 }" :enter="{ opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 400, damping: 15 } }">

<MacWindow title="schema.parse()" height="auto">

```ts twoslash
import { z } from 'zod';

const UserSchema = z.object({
  name: z.string(),
  age: z.number().min(0),
})

try {
  const user = UserSchema.parse({ 
    name: "Alice", 
    age: -5 
  })
} catch (error) {
  console.error(error)
}
```

</MacWindow>

</div>

<div v-click v-motion :initial="{ opacity: 0, scale: 0.8 }" :enter="{ opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 400, damping: 15 } }">

<MacWindow title="schema.safeParse()" height="auto">

```ts twoslash
import { z } from 'zod';

const UserSchema = z.object({
  name: z.string(),
  age: z.number().min(0),
})

const result = UserSchema.safeParse({ 
  name: "Alice", 
  age: -5 
})

if (!result.success) {
  console.error(result.error.issues)
} else {
  console.log(result.data)
}
```

</MacWindow>

</div>

</div>
