---
layout: act
actNumber: V
---

Les compagnons évoluent

---
layout: story
---

Le magicien a tenu sa promesse.

<v-click>

Le **lion** n'a plus peur — `any` disparaît.

</v-click>

<v-click>

L'**homme de fer-blanc** a un cœur — les interfaces sont validées.

</v-click>

<v-click>

L'**épouvantail** a un cerveau — la sécurité est réelle.

</v-click>

<v-click>

**Nos compagnons sont enfin complets.**

</v-click>

---

# Des héros transformés

Grâce à Zod :

<v-clicks>

- fini le `any`
- confiance réelle dans les données
- refactoring sans peur

</v-clicks>

<v-click>

**Zod renforce TypeScript, il ne le remplace pas.**

</v-click>

---

# Inférence automatique
Une source de vérité unique !


````md magic-move
```ts
const UserSchema = z.object({
    id: z.number(),
    name: z.string(),
    permission: z.array(z.string()),
})
```
```ts
const UserSchema = z.object({
    id: z.number(),
    name: z.string(),
    permission: z.array(z.string()),
})

const user: [???] = {...}
```
```ts
const UserSchema = z.object({
    id: z.number(),
    name: z.string(),
    permission: z.array(z.string()),
})

type User = z.infer<typeof UserSchema>;

const user: User = {...}
```
````

<v-click>
<h2 class="pt-10">

Le schéma deviens la source de vérité ! 🗺️

</h2>
</v-click>

<v-click>

<br />

Zod nous protège au **Runtime** ET au **BuildTime**

</v-click>

---

# Input vs Output

Quand un schéma **transforme** les données :

```ts
const Schema = z.string().transform(v => v.length)
```

<v-click>

```ts
type Input = z.input<typeof Schema>   // string
type Output = z.output<typeof Schema> // number
```

</v-click>

<v-click>

*Peut s'avérer très utile dans le cas d'un formulaire !*

</v-click>