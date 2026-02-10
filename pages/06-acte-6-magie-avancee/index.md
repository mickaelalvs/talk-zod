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
    v-click="1"
    :initial="{ opacity: 0, scale: 0.5 }" 
    :enter="{ opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 300, damping: 15, delay: 200 } }"
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
    v-click="1"
    :initial="{ opacity: 0, scale: 0.5 }" 
    :enter="{ opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 300, damping: 15, delay: 400 } }"
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
    v-click="1"
    :initial="{ opacity: 0, scale: 0.5 }" 
    :enter="{ opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 300, damping: 15, delay: 600 } }"
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
    v-click="1"
    :initial="{ opacity: 0, scale: 0.5 }" 
    :enter="{ opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 300, damping: 15, delay: 800 } }"
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
    v-click="1"
    :initial="{ opacity: 0, scale: 0.5 }" 
    :enter="{ opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 300, damping: 15, delay: 1000 } }"
    :duration="500"
  >
    <div class="font-semibold text-base mb-1" style="color: var(--oz-zod-blue);">
      Record, Maps & Sets
    </div>
    <div class="text-sm text-gray-700">
      S'adapte à toutes les structures de données
    </div>
  </div>
  <div 
    class="absolute bg-white/60 backdrop-blur-sm rounded-lg p-4 shadow-lg border border-gray-200/50 w-max"
    style="bottom: 50%; left: 50%; translate: -50% 25%"
    v-motion
    v-click="2"
    :initial="{ opacity: 0, scale: 0.5 }" 
    :enter="{ opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 300, damping: 15 } }"
    :duration="500"
  >
    <div class="font-semibold text-7xl mb-1 p-6" style="color: var(--oz-zod-blue);">
      Et bien d'autre !
    </div>
  </div>
</div>

---

# L'écosystème Zod

<div class="flex gap-22 pt-15">
  <div 
    class="flex-1"
    v-click="1"
    v-motion
    :initial="{ opacity: 0, x: -30 }" 
    :enter="{ opacity: 1, x: 0, transition: { type: 'spring', stiffness: 300, damping: 20 } }"
  >
    <div class="text-xl font-semibold mb-6 text-gray-700">
      Permet de générer ... :
    </div>
    <div class="flex flex-col gap-4">
      <div class="bg-white/50 backdrop-blur-sm rounded-xl p-4 shadow-md border border-gray-200/50">
        <div class="font-semibold text-lg mb-1" style="color: var(--oz-zod-blue);">
            zod-to-openapi
        </div>
        <div class="text-sm text-gray-600">
            générer des specs OpenAPI
        </div>
      </div>
      <div class="bg-white/50 backdrop-blur-sm rounded-xl p-4 shadow-md border border-gray-200/50">
        <div class="font-semibold text-lg mb-1" style="color: var(--oz-zod-blue);">
            nestjs-graphql-zod
        </div>
        <div class="text-sm text-gray-600">
            générer des requêtes GraphQL
        </div>
      </div>
    </div>
  </div>
  <div 
    class="flex-1"
    v-click="2"
    v-motion
    :initial="{ opacity: 0, x: 30 }" 
    :enter="{ opacity: 1, x: 0, transition: { type: 'spring', stiffness: 300, damping: 20 } }"
  >
    <div class="text-xl font-semibold mb-6 text-gray-700">
      Et peut être généré par ... :
    </div>
    <div class="flex flex-col gap-4">
      <div class="bg-white/50 backdrop-blur-sm rounded-xl p-4 shadow-md border border-gray-200/50">
        <div class="font-semibold text-lg mb-1" style="color: var(--oz-emerald);">
            openapi-zod-client
        </div>
        <div class="text-sm text-gray-600">
            générer un client typé depuis OpenAPI
        </div>
      </div>
      <div class="bg-white/50 backdrop-blur-sm rounded-xl p-4 shadow-md border border-gray-200/50">
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
