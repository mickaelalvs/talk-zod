---
layout: act
actNumber: V
---

La Magie en Action

---
layout: center
class: relative overflow-hidden
transition: fade-out
---

<style>
.path-slide-5 {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: #1a1a2e;
}

.path-img-5 {
  height: 60vh;
  width: 100%;
  object-fit: contain;
  animation: pathMove5 25s linear forwards;
}

@keyframes pathMove5 {
  0% {
    transform: scale(1.1) translateY(-10px);
  }
  100% {
    transform: scale(1.2) translateY(100px);
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

<div class="path-slide-5">
  <img src="./assets/background.png" class="path-img-5" />
  
  <v-switch>
    <template #1>
      <div class="subtitle-box">
        Le magicien a révélé ses secrets.
      </div>
    </template>
    <template #2>
      <div class="subtitle-box">
        Mais connaître un sort ne suffit pas...
      </div>
    </template>
    <template #3>
      <div class="subtitle-box">
        Il faut <strong>l'appliquer</strong> dans le monde réel.
      </div>
    </template>
    <template #4>
      <div class="subtitle-box">
        Nous allons affronter les <strong>épreuves du quotidien</strong>.
      </div>
    </template>
    <template #5>
      <div class="subtitle-box">
        <strong>Que la magie opère !</strong>
      </div>
    </template>
  </v-switch>
</div>

---
src: ../../form.md
---
---
src: ../../request.md
---
---
src: ../../queryParams.md
---
---

# Récap

<div class="relative h-[400px] mt-8">
  <div 
    class="absolute bg-white/60 backdrop-blur-sm rounded-lg p-4 shadow-lg border border-gray-200/50 w-56"
    style="top: 3%; left: 8%; transform: rotate(-6deg);"
    v-motion
    v-click="1"
    :initial="{ opacity: 0, scale: 0.5 }" 
    :enter="{ opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 300, damping: 15 } }"
    :duration="500"
  >
    <div class="font-semibold text-base mb-1" style="color: var(--oz-emerald);">
      refine
    </div>
    <div class="text-sm text-gray-700">
      Validation plus poussée
    </div>
  </div>
    <div 
    class="absolute bg-white/60 backdrop-blur-sm rounded-lg p-4 shadow-lg border border-gray-200/50 w-56"
    style="top: -5%; right: 32%; transform: rotate(14deg);"
    v-motion
    v-click="1"
    :initial="{ opacity: 0, scale: 0.5 }" 
    :enter="{ opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 300, damping: 15, delay: 200 } }"
    :duration="500"
  >
    <div class="font-semibold text-base mb-1" style="color: var(--oz-emerald);">
      coerce / preprocess
    </div>
    <div class="text-sm text-gray-700">
      Transformation avant la validation
    </div>
  </div>
  <div 
    class="absolute bg-white/60 backdrop-blur-sm rounded-lg p-4 shadow-lg border border-gray-200/50 w-56"
    style="top: 28%; right: 2%; transform: rotate(-11deg);"
    v-motion
    v-click="1"
    :initial="{ opacity: 0, scale: 0.5 }" 
    :enter="{ opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 300, damping: 15, delay: 400 } }"
    :duration="500"
  >
    <div class="font-semibold text-base mb-1" style="color: var(--oz-emerald);">
      optional() / nullable()
    </div>
    <div class="text-sm text-gray-700">
      Optionalité pour un champ
    </div>
  </div>
  <div 
    class="absolute bg-white/60 backdrop-blur-sm rounded-lg p-4 shadow-lg border border-gray-200/50"
    style="bottom: 38%; left: 15%; transform: rotate(8deg);"
    v-motion
    v-click="1"
    :initial="{ opacity: 0, scale: 0.5 }" 
    :enter="{ opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 300, damping: 15, delay: 600 } }"
    :duration="500"
  >
    <div class="font-semibold text-base mb-1" style="color: var(--oz-emerald);">
        partial() / required()
    </div>
    <div class="text-sm text-gray-700">
      Optionalité au niveau du schéma
    </div>
  </div>
  <div 
    class="absolute bg-white/60 backdrop-blur-sm rounded-lg p-4 shadow-lg border border-gray-200/50 w-56"
    style="bottom: 5%; right: 12%; transform: rotate(-3deg);"
    v-motion
    v-click="1"
    :initial="{ opacity: 0, scale: 0.5 }" 
    :enter="{ opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 300, damping: 15, delay: 800 } }"
    :duration="500"
  >
    <div class="font-semibold text-base mb-1" style="color: var(--oz-emerald);">
    z.literal()
    </div>
    <div class="text-sm text-gray-700">
      Validation précise
    </div>
  </div>
    <div 
    class="absolute bg-white/60 backdrop-blur-sm rounded-lg p-4 shadow-lg border border-gray-200/50 w-56"
    style="bottom: 2%; left: 6%; transform: rotate(-13deg);"
    v-motion
    v-click="1"
    :initial="{ opacity: 0, scale: 0.5 }" 
    :enter="{ opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 300, damping: 15, delay: 1000 } }"
    :duration="500"
  >
    <div class="font-semibold text-base mb-1" style="color: var(--oz-emerald);">
      z.input / z.output
    </div>
    <div class="text-sm text-gray-700">
      Inférence de type gratuite
    </div>
  </div>
</div>
