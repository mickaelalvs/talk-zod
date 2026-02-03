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

# Sorts de transformation
Au dela des limites de la validation

```ts {monaco-run} {showOutputAt: '+1'}
import z from 'zod'

const TransformSchema = z.object({
    keywords: z.string().transform(data => data.split(',')),
    age: z.coerce.number(),
})

const object = TransformSchema.parse({
    keywords: 'fullStack,frontend,Backend',
    age: '32',
})

console.log(object);
```
<!-- 
<v-click>

```ts
z.object({...}).refine(data => data.age >= 18)
```

</v-click>

<v-click>

**Zod devient un outil de design de contrats.**

</v-click> -->

---

# ⚠️ Attention cependant
Ils ne s'effectue pas au même moment

`z.coerce` est la pour faire des coercion automatique **avant** la validation

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

<v-click>

Contrairement à `.transform()` qui s'effectue **après** la validation

</v-click>

---

# Sort de validation avancée
Quand le schéma ne suffit plus

Si l'API native de Zod ne suffit plus, `.refine()` est la pour vous

````md magic-move
```ts
const PasswordSchema = z.object({
    password: z.string().min(12),
    passwordConfirmation: z.string().min(12)
});
```
```ts
const PasswordSchema = z.object({
    password: z.string().min(12),
    passwordConfirmation: z.string().min(12)
}).refine(data => data.password === data.passwordConfirmation, {
    message: "Les mots de passe ne correspondent pas",
    path: "passwordConfirmation"
})
```
````

<v-click>

<h3 class="pt-4">

Avec le `.refine()`, l’imagination est votre seul limite !

</h3>

</v-click>

<v-click>

<h3 class="pt-4">

⚠️ Cette validation s'effectue après celle du schéma

</h3>

</v-click>

---

# L'union fait la force !
La composition est votre meilleur ami

Vos schemas peuvent s'imbriquer les un les autres !

````md magic-move
```ts
const CustomerSchema = z.object({
    name: z.string(),
    siret: z.string().length(14),
    contacts: z.array(z.object({
        name: z.string(),
        phone: z.string(),
        email: z.email(),
    }))
})
```
```ts
const ContactSchema = z.object({
    name: z.string(),
    phone: z.string(),
    email: z.email(),
})

const CustomerSchema = z.object({
    name: z.string(),
    siret: z.string().length(14),
    contacts: z.array(ContactSchema)
})
```
````

---

# Composition is key
L'assemblage n'as pas de limite

Encore une fois, Zod fourni plusieurs outils pour aider à la composition

````md magic-move
```ts
const EmployeeSchema = z.object({
    id: z.string(),
    name: z.string(),
    manager: z.string(),
});

const ManagerSchema = z.object({
    id: z.string(),
    name: z.string(),
    employees: z.array(z.string()).min(1) 
});
```
```ts
const PersonSchema = z.object({
    id: z.string(),
    name: z.string(),
})

const EmployeeSchema = z.object({
    id: z.string(),
    name: z.string(),
    manager: z.string(),
});

const ManagerSchema = z.object({
    id: z.string(),
    name: z.string(),
    employees: z.array(z.string()).min(1) 
});
```
```ts
const PersonSchema = z.object({
    id: z.string(),
    name: z.string(),
})

const EmployeeSchema = PersonSchema.extends({
    manager: z.string(),
});

const ManagerSchema = PersonSchema.extends({
    employees: z.array(z.string()).min(1) 
});
```
````

---

# Autres outils

<div class="relative h-[400px] mt-8">
  <div 
    class="absolute bg-white/60 backdrop-blur-sm rounded-lg p-4 shadow-lg border border-gray-200/50 w-56"
    style="top: 10%; left: 5%; transform: rotate(-3deg);"
    v-motion
    v-click="1"
    :initial="{ opacity: 0, scale: 0.5 }" 
    :enter="{ opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 300, damping: 15 } }"
    :duration="500"
  >
    <div class="font-semibold text-base mb-1" style="color: var(--oz-zod-blue);">
      discriminated unions
    </div>
    <div class="text-sm text-gray-700">
      unions typées par discriminant
    </div>
  </div>
    <div 
    class="absolute bg-white/60 backdrop-blur-sm rounded-lg p-4 shadow-lg border border-gray-200/50 w-56"
    style="top: -12%; right: 27%; transform: rotate(-7deg);"
    v-motion
    v-click="2"
    :initial="{ opacity: 0, scale: 0.5 }" 
    :enter="{ opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 300, damping: 15 } }"
    :duration="500"
  >
    <div class="font-semibold text-base mb-1" style="color: var(--oz-zod-blue);">
      InstanceOf
    </div>
    <div class="text-sm text-gray-700">
      Validation de class
    </div>
  </div>
  <div 
    class="absolute bg-white/60 backdrop-blur-sm rounded-lg p-4 shadow-lg border border-gray-200/50 w-56"
    style="top: 25%; right: 10%; transform: rotate(4deg);"
    v-motion
    v-click="3"
    :initial="{ opacity: 0, scale: 0.5 }" 
    :enter="{ opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 300, damping: 15 } }"
    :duration="500"
  >
    <div class="font-semibold text-base mb-1" style="color: var(--oz-zod-blue);">
      Pipes
    </div>
    <div class="text-sm text-gray-700">
      créer des chaines de schéma
    </div>
  </div>
  <div 
    class="absolute bg-white/60 backdrop-blur-sm rounded-lg p-4 shadow-lg border border-gray-200/50"
    style="bottom: 35%; left: 30%; transform: rotate(-5deg);"
    v-motion
    v-click="4"
    :initial="{ opacity: 0, scale: 0.5 }" 
    :enter="{ opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 300, damping: 15 } }"
    :duration="500"
  >
    <div class="font-semibold text-base mb-1" style="color: var(--oz-zod-blue);">
        looseObject / strictObject
    </div>
    <div class="text-sm text-gray-700">
      gestion des clés inconnues
    </div>
  </div>
  <div 
    class="absolute bg-white/60 backdrop-blur-sm rounded-lg p-4 shadow-lg border border-gray-200/50 w-56"
    style="bottom: 15%; right: 5%; transform: rotate(6deg);"
    v-motion
    v-click="5"
    :initial="{ opacity: 0, scale: 0.5 }" 
    :enter="{ opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 300, damping: 15 } }"
    :duration="500"
  >
    <div class="font-semibold text-base mb-1" style="color: var(--oz-zod-blue);">
      lazy
    </div>
    <div class="text-sm text-gray-700">
      schémas récursifs
    </div>
  </div>
    <div 
    class="absolute bg-white/60 backdrop-blur-sm rounded-lg p-4 shadow-lg border border-gray-200/50 w-56"
    style="bottom: 4%; left: 1%; transform: rotate(15deg);"
    v-motion
    v-click="6"
    :initial="{ opacity: 0, scale: 0.5 }" 
    :enter="{ opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 300, damping: 15 } }"
    :duration="500"
  >
    <div class="font-semibold text-base mb-1" style="color: var(--oz-zod-blue);">
      Record, Maps & Sets
    </div>
    <div class="text-sm text-gray-700">
      S'adapte à toutes les structures de données
    </div>
  </div>
</div>

<!--
Ajouter un "Et bien plus"
-->

---

# L'écosystème Zod
Le pouvoir de l'amitié

<div class="flex gap-8">
  <div class="flex-1">
    <div 
      class="text-xl font-semibold mb-6 text-gray-700"
      v-motion
      v-click
      :initial="{ opacity: 0, y: 10 }" 
      :enter="{ opacity: 1, y: 0 }"
      :duration="400"
    >
      Zod s'intègre dans :
    </div>
    <div class="flex flex-col gap-4">
        <div 
        class="bg-white/50 backdrop-blur-sm rounded-xl p-4 shadow-md border border-gray-200/50"
        v-motion
        v-click
        :initial="{ opacity: 0, x: -20 }" 
        :enter="{ opacity: 1, x: 0 }"
        :duration="500"
        >
        <div class="font-semibold text-lg" style="color: var(--oz-zod-blue);">
            react-hook-form
        </div>
        <div class="font-semibold text-lg mt-1" style="color: var(--oz-zod-blue);">
            @tanstack/react-form
        </div>
        <div class="text-sm text-gray-600 mt-1">
            Validation de formulaires
        </div>
    </div>

<div 
class="bg-white/50 backdrop-blur-sm rounded-xl p-4 shadow-md border border-gray-200/50"
v-motion
v-click
:initial="{ opacity: 0, x: -20 }" 
:enter="{ opacity: 1, x: 0 }"
:duration="500"
>
<div class="font-semibold text-lg" style="color: var(--oz-zod-blue);">
    tRPC
</div>
<div class="font-semibold text-lg" style="color: var(--oz-zod-blue);">
    nestjs-zod
</div>
<div class="font-semibold text-lg mt-1" style="color: var(--oz-zod-blue);">
    express-zod-api
</div>
       <div class="text-sm text-gray-600 mt-1">
            Validation de requêtes
        </div>
</div>
</div>
  </div>

  <div class="flex-1">
    <div 
      class="text-xl font-semibold mb-6 text-gray-700"
      v-motion
      v-click
      :initial="{ opacity: 0, y: 10 }" 
      :enter="{ opacity: 1, y: 0 }"
      :duration="400"
    >
      Et est dans les fondations de :
    </div>

<div class="flex flex-col gap-4">
    <div 
    class="bg-white/50 backdrop-blur-sm rounded-xl p-4 shadow-md border border-gray-200/50"
    v-motion
    v-click
    :initial="{ opacity: 0, x: 20 }" 
    :enter="{ opacity: 1, x: 0 }"
    :duration="500"
    >
    <div class="font-semibold text-lg mb-1" style="color: var(--oz-emerald);">
        zod-to-openapi
    </div>
    <div class="text-sm text-gray-600">
        générer des specs OpenAPI
    </div>
    </div>

<div 
class="bg-white/50 backdrop-blur-sm rounded-xl p-4 shadow-md border border-gray-200/50"
v-motion
v-click
:initial="{ opacity: 0, x: 20 }" 
:enter="{ opacity: 1, x: 0 }"
:duration="500"
>
<div class="font-semibold text-lg mb-1" style="color: var(--oz-emerald);">
    openapi-zod-client
</div>
<div class="text-sm text-gray-600">
    générer un client typé depuis OpenAPI
</div>
</div>

<div 
class="bg-white/50 backdrop-blur-sm rounded-xl p-4 shadow-md border border-gray-200/50"
v-motion
v-click
:initial="{ opacity: 0, x: 20 }" 
:enter="{ opacity: 1, x: 0 }"
:duration="500"
>
<div class="font-semibold text-lg mb-1" style="color: var(--oz-emerald);">
    zod-prisma
</div>
<div class="text-sm text-gray-600">
    générer des schémas depuis Prisma
</div>
</div>
</div>
  </div>
</div>

<v-click>

<h2 class="text-center mt-8">

Zod s'intègre partout

</h2>

</v-click>
