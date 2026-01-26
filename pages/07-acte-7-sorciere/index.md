---
layout: act
actNumber: VII
---

La Sorcière de l'Ouest

---
layout: story
---

Mais toute magie a un prix...

<v-click>

La **Sorcière de l'Ouest** rode.

</v-click>

<v-click>

Elle murmure des vérités dérangeantes :

</v-click>

<v-click>

*"Ce magicien n'est pas parfait..."*

</v-click>

<v-click>

*"Il a des faiblesses..."*

</v-click>

<v-click>

**Et elle n'a pas tort.**

</v-click>

---

# Ce n'est pas de la magie

Zod a un coût :

<v-clicks>

- **Performance** : parsing à chaque appel
- **Bundle size** : ~50kb minifié
- **Complexité** : API à apprendre

</v-clicks>

---

# Le coût de la validation

```ts
// ❌ Ne pas faire dans une boucle hot path
for (const item of millionsOfItems) {
  const validated = Schema.parse(item) // Coût à chaque itération
}
```

<v-click>

```ts
// ✅ Valider une fois à l'entrée
const validatedItems = Schema.array().parse(millionsOfItems)
for (const item of validatedItems) {
  // Déjà validé, pas de coût supplémentaire
}
```

</v-click>

---

# Benchmarks

| Librairie | ops/sec | Taille |
|-----------|---------|--------|
| Zod | ~300k | ~50kb |
| Valibot | ~500k | ~5kb |
| TypeBox | ~800k | ~30kb |
| ArkType | ~1M | ~40kb |

<v-click>

**En pratique** : la différence est négligeable aux frontières (API, forms).

</v-click>

<v-click>

Optimisez là où ça compte, pas partout.

</v-click>

---

# Quand NE PAS utiliser Zod

<v-clicks>

- Données internes déjà typées
- Hot paths critiques en performance
- Projets très légers (overkill)
- Validation simple → `typeof` suffit

</v-clicks>

---

# Les alternatives

<v-clicks>

- **Valibot** : plus léger (~5kb), tree-shakable
- **TypeBox** : génère aussi des JSON Schemas
- **ArkType** : syntaxe plus proche de TypeScript
- **Zod Mini** : version allégée officielle (expérimental)

</v-clicks>

<v-click>

Choisissez l'outil adapté à votre contexte.

</v-click>

---

# La sorcière n'a pas gagné

<v-click>

Ces limites sont **connues et acceptables** :

</v-click>

<v-clicks>

- Le coût est payé aux frontières, pas partout
- La sécurité runtime vaut le prix
- Les alternatives existent si besoin

</v-clicks>

<v-click>

**Zod reste le choix pragmatique pour la plupart des cas.**

</v-click>
