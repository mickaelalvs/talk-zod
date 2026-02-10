---
transition: fade
---

# Query Params

<div class="grid grid-cols-2 gap-8">
<EditableMacWindow title="http://books.com/books?page=4&releaseDate=02/13/2026" />
<div>

<MacWindow title="Query params schema">
<<< ./components/queryParams/query-params-schema.ts {monaco-write} {height: 'auto'}
</MacWindow>

</div>
</div>

<div class="flex items-center justify-center mt-8">
  <MacWindow title="Coercition de type disponible" height="fit-content" style="min-width: 400px" v-click>

```ts
z.coerce.string();  // String(value)
z.coerce.number();  // Number(value)
z.coerce.bigInt();  // BigInt(value)
z.coerce.date();    // new Date(value)
z.coerce.boolean(); // Boolean(value)
```

  </MacWindow>
</div>

---
transition: fade
---

# Query Params

<div class="grid grid-cols-2 gap-8">
<EditableMacWindow title="http://books.com/books?genres=romance,poetry,essays" schema="filters" />
<div>

<MacWindow title="Query params schema">
<<< ./components/queryParams/query-params-filter-schema.ts {monaco-write} {height: 'auto'}
</MacWindow>

</div>
</div>

<!--
Voir si je peux pas faire le preprocess en code
-->

---

# Transformation et pre-processing


<div class="flex gap-4 justify-between">
  <MacWindow title="Transform" class="flex-1" height="fit-content" v-click>

```ts
const TransformSchema = z.object({
    genre: z.string().transform(value => value.split(',')),
    pageCount: z.coerce.number(),
    keywords: z.preprocess(
      (value: string) => value.split(','), 
      z.array(z.string())
    )
})

console.log(TransformSchema.parse({
    genre: 'fantasy,horror',
    pageCount: '180',
    keywords: 'book,novel',
}));
```

  </MacWindow>
  <MacWindow class="min-w-70" title="Console" v-click>
  
```ts
{
  "genre": [
    "fantasy",
    "horror"
  ],
  "pageCount": 180,
  "keywords": [
    "book",
    "novel"
  ]
}
```

  </MacWindow>
</div>

<div class="text-center text-2xl font-bold pt-4" v-click="3">
  <p><span class="text-3xl inline-block mr-3">⚠️</span> <span v-mark="{ at: 3, type: 'highlight', color: '#3168B7' }" class="text-white">.preprocess</span> et <span v-mark="{ at: 3, type: 'highlight', color: '#3168B7' }" class="text-white">.coerce</span> s'effectuent <span v-mark="{ at: 3, type: 'underline', color: '#3168B7' }" class="text-[#3168B7] font-semibold">avant</span> la validation</p>
  <p class="text-lg mt-2">Alors que <span v-mark="{ at: 3, type: 'highlight', color: '#3168B7' }" class="text-white">.transform</span> s'effectue <span v-mark="{ at: 3, type: 'underline', color: '#3168B7' }" class="text-[#3168B7] font-semibold">après</span> !</p>
</div>

---
punctuation: "?"
---

# Et l'inférence

<div class="relative mt-20">
  <MacWindow title="schema.ts" height="fit-content">

```ts {3-7|9|10|all} twoslash
import { z } from 'zod';

const Schema = z.object({
  page: z.coerce.number(),
  releaseDate: z.coerce.date(),
  genre: z.string().transform(value => value.split(','))
})

type Input = z.input<typeof Schema>;   // { page: unknown, releaseDate: unknown, genre: string }
type Output = z.output<typeof Schema>; // { page: number, releaseDate: Date, genre: string[] }
```

  </MacWindow>
  <div v-click v-motion :initial="{ opacity: 0, scale: 0.5, y: 20 }" :enter="{ opacity: 1, scale: 1.3, y: 0, transition: { type: 'spring', stiffness: 300, damping: 15 } }" class="absolute -bottom-10 -right-4 flex flex-col items-center gap-2">
    <img src="/assets/images/icon-forms.png" class="h-16" />
  </div>
</div>
