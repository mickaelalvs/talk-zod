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
  text-wrap: balance;
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
    <img src="../assets/path.png" class="max-h-[70vh] max-w-[95vw] object-cover path-img-3" />
  </div>
  
  <v-switch>
    <template #1>
      <div class="subtitle-box">
        Les données du runtime sont <strong>imprévisibles</strong>.
      </div>
    </template>
    <template #2>
      <div class="subtitle-box">
        Nous réalisons que nous avons besoin d'aide.
      </div>
    </template>
    <template #3>
      <div class="subtitle-box">
        On nous parle d'une <strong>route de briques jaunes</strong>...
      </div>
    </template>
    <template #4>
      <div class="subtitle-box">
        Elle mène vers un <strong>magicien</strong> capable de protéger le runtime.
      </div>
    </template>
    <template #5>
      <div class="subtitle-box">
        Mais avant, nous croiserons des <strong>imposteurs</strong>.
      </div>
    </template>
    <template #6>
      <div class="subtitle-box">
        <strong>La quête commence.</strong>
      </div>
    </template>
  </v-switch>
</div>
