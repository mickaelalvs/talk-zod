---
transition: view-transition
---

# Query Params

<div class="grid grid-cols-2 gap-8">
<EditableMacWindow title="http://books.com/books?page=4&releaseDate=02/13/2026" />
<div>

<MacWindow title="query params schema">
<<< ./components/queryParams/query-params-schema.ts {monaco-write} {height: 'auto'}
</MacWindow>

</div>
</div>

<!--
la validation passe, mais on a des strings à l'arrivée

En ajoutant des .coerce on peut arriver à un number et une Date
-->

---

# Coercition de type

<MacWindow title="Coercition de type disponible" height="fit-content" v-click>

```ts
z.coerce.string();  // String(value)
z.coerce.number();  // Number(value)
z.coerce.bigInt();  // BigInt(value)
z.coerce.date();    // new Date(value)
z.coerce.boolean(); // Boolean(value)
```

</MacWindow>

<div class="flex items-center justify-around pt-8" style="scale: 0.8">
  <div 
    class="flex flex-col items-center gap-8"
    v-click="2"
    v-motion
    :initial="{ opacity: 0, scale: 0.5 }"
    :enter="{ opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 300, damping: 15 } }"
  >
    <img src="./assets/validation.png" class="h-40" alt="" />
    <span class="text-2xl font-semibold text-black">Validation</span>
  </div>
    <div
        v-click="3"
        v-motion
        :initial="{ opacity: 0, scale: 0.5, rotate: -180 }"
        :enter="{ opacity: 1, scale: 1, rotate: 0, transition: { type: 'spring', stiffness: 300, damping: 15 } }"
        :leave="{ opacity: 0, scale: 0, rotate: 180, transition: { type: 'spring', stiffness: 300, damping: 20 } }"
        class="text-9xl"
    >
    🤝
    </div>
  <div
    v-click="2"
    v-motion
    :initial="{ opacity: 0, scale: 0.5 }"
    :enter="{ opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 300, damping: 15 } }"
    class="flex flex-col items-center gap-4"
  >
    <img src="./assets/transformation.png" class="h-46" alt="" />
    <span class="text-2xl font-semibold text-black">Transformation</span>
  </div>
</div>

<!--
Mettre en dessous dans la slide d'avant
-->

---
transition: view-transition
---

# Query Params

<div class="grid grid-cols-2 gap-8">
<EditableMacWindow title="http://books.com/books?genres=romance,poetry,essays" schema="filters" />
<div>

<MacWindow title="query params schema">
<<< ./components/queryParams/query-params-filter-schema.ts {monaco-write} {height: 'auto'}
</MacWindow>

</div>
</div>

<!--
Voir si je peux pas faire le preprocess en code
-->

---

# Transformation et pre-processing

<MacWindow title="Transform" class="-mt-6" height="fit-content">

```ts {monaco-run} {showOutputAt: ['+1', '+1']}
import z from 'zod'

const TransformSchema = z.object({
    genre: z.string().transform(value => value.split(',')),
    pageCount: z.coerce.number(),
    keywords: z.preprocess((value: string) => value.split(',') , z.array(z.string()))
})

console.log(TransformSchema.parse({
    genre: 'fantasy,horror',
    pageCount: '180',
    keywords: 'book,novel',
}));
```

</MacWindow>

<div class="font-semibold text-2xl mt-4" v-click="2">

<span class="text-4xl inline-block mr-3">⚠️</span> `.preprocess` et `.coerce` s'effectue avant la validation

Alors que `.transform` s'effectue après !

</div>

<!--
Revoir le display en deux fenetre

Revoir design phrase de fin
-->

---

# Et l'inférence ?

<MacWindow title="" height="fit-content">

````md magic-move
```ts
const Schema = z.object({
  page: z.coerce.number(),
  releaseDate: z.coerce.date(),
  genre: z.string.transform(value => value.split(','))
})
```
```ts
const Schema = z.object({
  page: z.coerce.number(),
  releaseDate: z.coerce.date(),
  genre: z.string.transform(value => value.split(','))
})

type Input = z.input<typeof Schema>;   // { page: string, releaseDate: string, genre: string }
type Output = z.output<typeof Schema>; // { page: number, releaseDate: Date, genre: string[] }
```

````

</MacWindow>

<v-click>

*Peut s'avérer très utile dans le cas d'un formulaire !*

</v-click>

<!--
Ajouter twoslash

Voir design phrase de fin (Logo Form)
-->
