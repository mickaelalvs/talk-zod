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

```ts
type User = z.infer<typeof UserSchema>
```

<v-click>

Une seule source de vérité :

</v-click>

<v-clicks>

- Zod protège au runtime
- TypeScript comprend au build

</v-clicks>

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

`z.infer` = `z.output` (le type après transformation)

</v-click>
