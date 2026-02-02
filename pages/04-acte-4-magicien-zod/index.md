---
layout: act
actNumber: IV
---

Le Magicien Zod

---
layout: center
class: relative overflow-hidden
transition: fade-out
---

<style>
.path-slide-4 {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  top: -1Opx;
}

.path-wrapper-4 {
  animation: walkBob4 1.2s ease-in-out infinite;
}

.path-img-4 {
  animation: pathMove4 30s linear forwards;
}

@keyframes pathMove4 {
  0% {
    transform: scale(1.0) translate(-30px, 50px);
  }
  100% {
    transform: scale(2.2) translate(-50px, 100px);
  }
}

@keyframes walkBob4 {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(6px);
  }
}

.subtitle-box {
  position: absolute;
  bottom: 3rem;
  left: 50%;
  transform: translateX(-50%);
  color: #F6E3D3;
  font-family: 'Noticia Text', serif;
  font-size: 1.5rem;
  text-align: center;
  max-width: 85%;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.9), 0 0 10px rgba(0,0,0,0.7);
  z-index: 20;
}

.subtitle-box strong {
  color: var(--oz-gold);
}
</style>

<div class="path-slide-4">
  <div class="path-wrapper-4">
    <img src="./assets/path.png" class="max-h-[70vh] max-w-[95vw] object-cover path-img-4" />
  </div>
  
  <v-switch>
    <template #1>
      <div class="subtitle-box">
        Après un long voyage sur la route de briques jaunes...
      </div>
    </template>
    <template #2>
      <div class="subtitle-box">
        Nos héros arrivent devant les portes de la <strong>Cité d'Émeraude</strong>.
      </div>
    </template>
    <template #3>
      <div class="subtitle-box">
        Derrière ces portes, un magicien les attend.
      </div>
    </template>
    <template #4>
      <div class="subtitle-box">
        On dit qu'il peut <strong>unifier deux mondes</strong> : celui du build et celui du runtime.
      </div>
    </template>
    <template #5>
      <div class="subtitle-box">
        Son nom ? <strong>Zod</strong>.
      </div>
    </template>
  </v-switch>
</div>

---

# L'apparition de Zod

Zod est :

<v-clicks>

- un système de schémas exécutables
- un validateur runtime
- un générateur de types TypeScript

</v-clicks>

<v-click>

**Un seul artefact pour deux mondes.**

</v-click>

---

# Le sort de protection

```ts
import { z } from "zod"

const UserSchema = z.object({
  id: z.string(),
  email: z.string().email(),
})
```

<v-clicks>

Ce schéma :

- existe au runtime
- valide les données
- sert de base aux types TypeScript

</v-clicks>

---

# Validation en action

```ts
const user = UserSchema.parse(data)
```

<v-click>

Résultat :

</v-click>

<v-clicks>

- données fiables si valides
- erreur explicite sinon

</v-clicks>

<v-click>

**Plus de données fantômes.**

</v-click>

---

# La route devient sûre

Zod peut sécuriser :

<v-clicks>

- les APIs
- les formulaires
- les variables d'environnement
- les fichiers de configuration

</v-clicks>

<v-click>

**Le runtime redevient prévisible.**

</v-click>
