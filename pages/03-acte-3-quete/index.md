---
layout: act
actNumber: III
---

La quête

---
layout: center
class: relative overflow-hidden
transition: fade-out
---

<style>
.path-slide-3 {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.path-wrapper-3 {
  animation: walkBob3 1.2s ease-in-out infinite;
}

.path-img-3 {
  animation: pathMove3 30s linear forwards;
}

@keyframes pathMove3 {
  0% {
    transform: scale(1) translateX(0);
  }
  100% {
    transform: scale(2) translateX(-80px);
  }
}

@keyframes walkBob3 {
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

<div class="path-slide-3">
  <div class="path-wrapper-3">
    <img src="./assets/path.png" class="max-h-[70vh] max-w-[95vw] object-cover path-img-3" />
  </div>
  
  <v-switch>
    <template #1>
      <div class="subtitle-box">
        Perdus dans ce nouveau monde, nos héros cherchent une solution.
      </div>
    </template>
    <template #2>
      <div class="subtitle-box">
        On leur parle d'une <strong>route de briques jaunes</strong>...
      </div>
    </template>
    <template #3>
      <div class="subtitle-box">
        Elle mène vers un magicien capable de résoudre tous leurs problèmes.
      </div>
    </template>
    <template #4>
      <div class="subtitle-box">
        Mais avant, ils croiseront des <strong>imposteurs</strong>.
      </div>
    </template>
    <template #5>
      <div class="subtitle-box">
        <strong>La quête commence.</strong>
      </div>
    </template>
  </v-switch>
</div>

---

# La route de briques jaunes

Objectifs :

<v-clicks>

- valider les données au runtime
- éviter la duplication types / validation
- conserver une seule source de vérité

</v-clicks>

---

# Les faux magiciens

Solutions courantes :

<v-clicks>

- des `if` partout
- des validateurs manuels
- des schémas séparés des types

</v-clicks>

<v-click>

Conséquences :

</v-click>

<v-clicks>

- incohérences
- dette technique
- bugs silencieux

</v-clicks>

<v-click>

**Il faut une autre approche.**

</v-click>

---

# Le HTML valide la forme, pas le sens

<div class="mt-6">

<!-- Comparaisons entre champs -->
<div v-click class="mb-6">
  <div class="text-sm font-semibold text-[#718096] mb-2">🔄 Comparaisons entre champs</div>
  <div class="grid grid-cols-2 gap-4">
    <div class="flex items-center gap-3 bg-purple-50 px-4 py-2 rounded">
      <span class="text-2xl">🔐</span>
      <code class="text-sm text-purple-600">password === confirmPassword</code>
    </div>
    <div class="flex items-center gap-3 bg-purple-50 px-4 py-2 rounded">
      <span class="text-2xl">📅</span>
      <code class="text-sm text-purple-600">dateFin > dateDebut</code>
    </div>
  </div>
</div>

<!-- Validations conditionnelles -->
<div v-click class="mb-6">
  <div class="text-sm font-semibold text-[#718096] mb-2">⚡ Validations conditionnelles</div>
  <div class="grid grid-cols-2 gap-4">
    <div class="flex items-center gap-3 bg-blue-50 px-4 py-2 rounded">
      <span class="text-2xl">🏢</span>
      <span class="text-sm">SIRET si <code class="text-xs">type === "entreprise"</code></span>
    </div>
    <div class="flex items-center gap-3 bg-blue-50 px-4 py-2 rounded">
      <span class="text-2xl">🔗</span>
      <span class="text-sm">Champ requis <em>si</em> un autre est rempli</span>
    </div>
  </div>
</div>

<!-- Validations de valeurs -->
<div v-click class="mb-6">
  <div class="text-sm font-semibold text-[#718096] mb-2">📏 Validations de valeurs</div>
  <div class="grid grid-cols-2 gap-4">
    <div class="flex items-center gap-3 bg-green-50 px-4 py-2 rounded">
      <span class="text-2xl">🎂</span>
      <code class="text-sm text-green-600">âge ≥ 18</code>
    </div>
    <div class="flex items-center gap-3 bg-green-50 px-4 py-2 rounded">
      <span class="text-2xl">📁</span>
      <code class="text-sm text-green-600">fileSize ≤ 5MB</code>
    </div>
    <div class="flex items-center gap-3 bg-green-50 px-4 py-2 rounded">
      <span class="text-2xl">💰</span>
      <code class="text-sm text-green-600">total ≤ budget</code>
    </div>
    <div class="flex items-center gap-3 bg-green-50 px-4 py-2 rounded">
      <span class="text-2xl">🔤</span>
      <span class="text-sm">1 maj + 1 chiffre + 1 spécial</span>
    </div>
  </div>
</div>

<!-- Validations avancées -->
<div v-click class="mb-6">
  <div class="text-sm font-semibold text-[#718096] mb-2">🚀 Validations avancées</div>
  <div class="grid grid-cols-2 gap-4">
    <div class="flex items-center gap-3 bg-orange-50 px-4 py-2 rounded">
      <span class="text-2xl">💳</span>
      <span class="text-sm">Validation IBAN / carte bancaire</span>
    </div>
    <div class="flex items-center gap-3 bg-orange-50 px-4 py-2 rounded">
      <span class="text-2xl">🌐</span>
      <span class="text-sm">Vérifier si l'email existe (API)</span>
    </div>
    <div class="flex items-center gap-3 bg-orange-50 px-4 py-2 rounded">
      <span class="text-2xl">📊</span>
      <span class="text-sm">Validation JSON structuré</span>
    </div>
    <div class="flex items-center gap-3 bg-orange-50 px-4 py-2 rounded">
      <span class="text-2xl">⏱️</span>
      <span class="text-sm">Validation temps réel</span>
    </div>
  </div>
</div>

</div>

<div 
  v-click
  v-motion
  :initial="{ opacity: 0, y: 20 }"
  :enter="{ opacity: 1, y: 0, transition: { type: 'spring', stiffness: 300, damping: 20 } }"
  class="mt-10 w-full flex justify-center">
  <div class="bg-gradient-to-r from-orange-50 to-red-50 border-l-4 border-orange-500 px-8 py-4 rounded-r-lg shadow-md">
    <div class="text-2xl font-bold text-[#2D3748] mb-1">
      Le HTML ne connaît pas vos règles métier
    </div>
    <div class="text-sm text-[#4A5568] italic">
      Il faut du code pour exprimer votre logique
    </div>
  </div>
</div>

<div 
  v-click
  class="mt-8 text-center">
  <div class="inline-flex items-center gap-3 bg-yellow-50 border border-yellow-300 px-6 py-3 rounded-lg">
    <span class="text-2xl">⚠️</span>
    <span class="text-base text-[#4A5568]">
      JavaScript obligatoire pour la logique... mais pas suffisant pour la sécurité
    </span>
  </div>
</div>

