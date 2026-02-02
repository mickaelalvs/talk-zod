---
layout: center
class: relative overflow-hidden
transition: fade-out
---

<style>
.path-slide-1 {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: #1a1a2e;
}

.path-img-1 {
  height: 100vh;
  width: 100%;
  object-fit: contain;
  transform: translateY(-20px);
  animation: moveUp1 20s linear forwards;
}

@keyframes moveUp1 {
  0% {
    transform: scale(1.1) translateY(-20px);
  }
  100% {
    transform: scale(1.3) translateY(20px);
  }
}

.subtitle-box-1 {
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

.subtitle-box-1 strong {
  color: var(--oz-gold);
}
</style>

<div class="path-slide-1">
  <img src="../assets/typescript.png" class="path-img-1" />
  
  <v-switch>
    <template #1>
      <div class="subtitle-box-1">
        Un royaume où régnait l'ordre et la sérénité.
      </div>
    </template>
    <template #2>
      <div class="subtitle-box-1">
        Les développeurs y vivaient heureux, protégés par une <strong>magie ancienne</strong>.
      </div>
    </template>
    <template #3>
      <div class="subtitle-box-1">
        Cette magie s'appelait <strong>TypeScript</strong>.
      </div>
    </template>
    <template #4>
      <div class="subtitle-box-1">
        Elle veillait sur eux, les avertissant du danger avant même qu'il n'arrive.
      </div>
    </template>
    <template #5>
      <div class="subtitle-box-1">
        <strong>Tout semblait parfait...</strong>
      </div>
    </template>
  </v-switch>
</div>
