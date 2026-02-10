---
layout: center
class: relative overflow-hidden
transition: fade-out
---

<style>
.path-slide-7 {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: #1a1a2e;
}

.path-img-7 {
  height: 100%;
  width: 100%;
  object-fit: contain;
  pointer-events: none;
  animation: moveUp7 30s linear forwards;
}

@keyframes moveUp7 {
  0% {
    transform: scale(1.0) translate(0, 0);
  }
  100% {
    transform: scale(1.1) translate(-30px, 20px);
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

<div class="path-slide-7">
  <img src="../assets/background.svg" class="path-img-7" />
  
  <v-switch>
    <template #1>
      <div class="subtitle-box">
        Mais toute magie a un prix...
      </div>
    </template>
    <template #2>
      <div class="subtitle-box">
        La <strong>Sorcière de l'Ouest</strong> rode.
      </div>
    </template>
    <template #3>
      <div class="subtitle-box">
        Elle murmure des vérités dérangeantes :
      </div>
    </template>
    <template #4>
      <div class="subtitle-box">
        <em>"Ce magicien n'est pas parfait..."</em>
      </div>
    </template>
    <template #5>
      <div class="subtitle-box">
        <em>"Il a des faiblesses..."</em>
      </div>
    </template>
    <template #6>
      <div class="subtitle-box">
        <strong>Et elle n'a pas tort.</strong>
      </div>
    </template>
  </v-switch>
</div>

<!--
Reset le zoom
-->
