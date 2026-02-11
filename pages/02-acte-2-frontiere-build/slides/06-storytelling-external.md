---
layout: center
class: relative overflow-hidden
transition: fade-out
---

<style>
.slide-external {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: #604D40;
}

.img-external {
  height: 100%;
  width: 100%;
  object-fit: contain;
  display: flex;
  align-items: center;
  justify-content: center;
}

.img-external :deep(svg) {
  height: 100vh;
  width: auto;
  max-width: none;
  transform: translateY(2px);
}

.sub-external {
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

.sub-external strong {
  color: var(--oz-gold);
}
</style>

<div class="slide-external">
  <AnimatedSvg src="/external.svg" class="img-external" />
  
  <v-switch>
    <template #1>
      <div class="sub-external">
        Et tant que nous restons dans ce monde-là… <strong>tout va bien.</strong>
      </div>
    </template>
    <template #2>
      <div class="sub-external">
        Le problème commence quand des données arrivent de <strong>l'extérieur</strong>...
      </div>
    </template>
  </v-switch>
</div>
