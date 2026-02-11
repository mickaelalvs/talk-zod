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
  height: 70vh;
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
  text-wrap: balance;
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
