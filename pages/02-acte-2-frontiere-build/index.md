---
layout: act
actNumber: II
---

La frontière du build

---
layout: story
---

Un jour, une terrible **tornade** s'abattit sur le royaume.

<v-click>

Elle emporta nos héros au-delà des frontières connues...

</v-click>

<v-click>

Dans un monde où les types n'existaient plus.

</v-click>

<v-click>

**Le runtime.**

</v-click>

---

# La tornade du runtime

Au runtime, on rencontre :

<v-clicks>

- des réponses d'API
- des formulaires utilisateurs
- des variables d'environnement
- des JSON externes

</v-clicks>

<v-click>

Toutes ces données échappent à TypeScript.

</v-click>

---

# La frontière invisible

```ts
async function getUser() {
  const user: User = await fetch("/api/user")
    .then(r => r.json())
  return user
}
```

<v-clicks>

Ici :

- TypeScript est satisfait
- aucune validation n'a lieu
- le type est une promesse non vérifiée

</v-clicks>

---

# Les bugs du monde réel

```ts
user.email.toLowerCase()
```

<v-click>

Erreur en production :

```
Cannot read properties of undefined
```

</v-click>

<v-click>

Le bug n'est pas une surprise, il est **inévitable** sans validation runtime.

</v-click>

---

# Le vent se lève...

Les données du runtime sont **imprévisibles**.

<v-click>

Nos héros réalisent qu'ils ont besoin d'aide.

</v-click>

<v-click>

On leur parle d'un **magicien**...

</v-click>

<v-click>

Un magicien capable de protéger le runtime.

</v-click>
