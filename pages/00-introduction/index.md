---
layout: center
class: relative overflow-hidden
transition: fade-out
---

<style>
.path-slide-intro {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.path-img-intro {
  height: 100vh;
  width: 100vw;
  object-fit: contain;
  animation: panIntro 15s linear forwards;
  transform: scale(1.2) translateX(30px);
}

@keyframes panIntro {
  0% {
    transform: scale(1.2) translateX(30px);
  }
  100% {
    transform: scale(1.2) translateX(-30px);
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

<div class="path-slide-intro">
  <img src="./assets/typescript.png" class="path-img-intro" />
  
  <v-switch>
    <template #1>
      <div class="subtitle-box">
        Vous a-t-on déjà parlé du merveilleux royaume de <strong>TypeScript</strong> ?
      </div>
    </template>
    <template #2>
      <div class="subtitle-box">
        Un monde enchanté où les types règnent en maîtres...
      </div>
    </template>
    <template #3>
      <div class="subtitle-box">
        Mais cette magie a une limite fatale…
      </div>
    </template>
    <template #4>
      <div class="subtitle-box">
        À la frontière du <strong>build</strong>, elle disparaît.
      </div>
    </template>
    <template #5>
      <div class="subtitle-box">
        <strong>C'est là que commence notre histoire.</strong>
      </div>
    </template>
  </v-switch>
</div>
