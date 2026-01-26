---
layout: act
actNumber: VI
---

Magie avancée

---
layout: story
---

Le magicien ouvre son **grimoire**.

<v-click>

Il contient des sorts plus puissants encore...

</v-click>

<v-click>

Des incantations pour **transformer** les données.

</v-click>

<v-click>

Des formules pour **affiner** les validations.

</v-click>

<v-click>

**Prêts à devenir de vrais sorciers ?**

</v-click>

---

# Sorts puissants

```ts
z.string().transform(v => v.trim())
```

<v-click>

```ts
z.object({...}).refine(data => data.age >= 18)
```

</v-click>

<v-click>

**Zod devient un outil de design de contrats.**

</v-click>

---

# Coercion automatique

Convertir les données avant validation :

```ts
const Schema = z.coerce.number()

Schema.parse("42")  // ✅ 42
Schema.parse(42)    // ✅ 42
```

<v-click>

Utile pour :

</v-click>

<v-clicks>

- Query params (toujours strings)
- Formulaires HTML
- Variables d'environnement

</v-clicks>

---

# Autres outils

<v-clicks>

- **discriminated unions** : unions typées par discriminant
- **safeParse** : pas d'exception, retourne un Result
- **passthrough / strict** : gestion des clés inconnues
- **lazy** : schémas récursifs

</v-clicks>

---

# L'écosystème Zod

<v-clicks>

- **zod-to-openapi** : générer des specs OpenAPI
- **openapi-zod-client** : générer un client typé depuis OpenAPI
- **zod-prisma** : générer des schémas depuis Prisma
- **@tanstack/react-form** : intégration formulaires

</v-clicks>

<v-click>

Zod s'intègre partout.

</v-click>
