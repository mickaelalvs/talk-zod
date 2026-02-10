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
  <div 
    class="absolute bg-white/60 backdrop-blur-sm rounded-lg p-4 shadow-lg border border-gray-200/50 w-max"
    style="bottom: 50%; left: 50%; translate: -50% 25%"
    v-motion
    v-click="7"
    :initial="{ opacity: 0, scale: 0.5 }" 
    :enter="{ opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 300, damping: 15 } }"
    :duration="500"
  >
    <div class="font-semibold text-7xl mb-1 p-6" style="color: var(--oz-zod-blue);">
      Et bien d'autre !
    </div>
  </div>
</div>

<!--
Afficher d'un coup (avec un stagger)
-->

---

# L'écosystème Zod

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

<!--
Enlever les partie qu'on a mit dans les slides démo

Ajouter un exemple de zod-to-quelquechose

Enlever la phrase nulle
-->
