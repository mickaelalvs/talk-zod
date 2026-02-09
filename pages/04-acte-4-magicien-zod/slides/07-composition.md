# La composition, votre meilleur ami

<div class="grid grid-cols-2 gap-8 mt-14">

<div v-click v-motion :initial="{ opacity: 0, scale: 0.8 }" :enter="{ opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 400, damping: 15 } }">

<div class="text-lg font-semibold text-[#3168B7] mb-2">Imbriquer des schémas</div>

<MacWindow title="composition.ts" height="200px">

```ts
const ContactSchema = z.object({
  name: z.string(),
  email: z.string().email(),
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
