---
layout: act
actNumber: I
---

Le royaume enchanté de TypeScript

---
layout: story
---

Un royaume où régnait l'ordre et la sérénité.

<v-click>

Les développeurs y vivaient heureux, protégés par une **magie ancienne**.

</v-click>

<v-click>

Cette magie s'appelait **TypeScript**.

</v-click>

<v-click>

Elle veillait sur eux, les avertissant du danger avant même qu'il n'arrive.

</v-click>

<v-click>

**Tout semblait parfait...**

</v-click>

---

# Le monde TypeScript

TypeScript nous offre :

<v-clicks>

- l'autocomplétion
- la détection d'erreurs au build
- des refactorings sûrs
- une excellente DX

</v-clicks>

<v-click>

C'est un royaume stable, ordonné et rassurant.

</v-click>

---

# Comment fonctionne la magie TypeScript

TypeScript repose sur une **analyse statique**.

```ts
type User = {
  id: string
  email: string
}
```

<v-clicks>

Ce type :

- est connu de l'IDE
- est vérifié à la compilation
- n'existe pas au runtime

</v-clicks>

---

# La disparition des types

```ts
// TypeScript
type User = { id: string }
```

<v-click>

devient :

```js
// JavaScript
{}
```

</v-click>

<v-click>

Les types sont **effacés**.

TypeScript protège uniquement jusqu'au build.

</v-click>

