---
layout: center
class: relative overflow-hidden
transition: fade-out
---

<style>
.slide-acte2 {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: #1a1a2e;
}

.img-acte2 {
  height: vh;
  width: auto;
  object-fit: contain;
  animation: tornadoVibrate 0.15s ease-in-out infinite;
}

@keyframes tornadoVibrate {
  0%, 100% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(3px);
  }
}

.sub-acte2 {
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
  text-wrap: balance;
}

.sub-acte2 strong {
  color: var(--oz-gold);
}
</style>

<div class="slide-acte2">
  <img src="../assets/tornado.png" class="img-acte2" />
  
  <v-switch>
    <template #1>
      <div class="sub-acte2">
        Un jour, une terrible <strong>tornade</strong> s'abattit sur le royaume.
      </div>
    </template>
    <template #2>
      <div class="sub-acte2">
        <strong>La tornade du build...</strong>
      </div>
    </template>
    <template #3>
      <div class="sub-acte2">
        Elle nous emporta au-delà des frontières connues...
      </div>
    </template>
    <template #4>
      <div class="sub-acte2">
        Dans un monde où les types n'existaient plus.
      </div>
    </template>
    <template #5>
      <div class="sub-acte2">
        <strong>Le runtime.</strong>
      </div>
    </template>
  </v-switch>
</div>
