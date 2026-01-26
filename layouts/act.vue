<script setup lang="ts">
import CloudBackground from '../components/CloudBackground.vue'

defineProps({
  actNumber: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <div class="act-slide">
    <CloudBackground />
    <div class="content">
      <!-- Numéro d'acte -->
      <div class="act-label">
        Acte {{ actNumber }}
      </div>
      
      <!-- Titre de l'acte -->
      <div class="act-title">
        <slot />
      </div>
    </div>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Noticia+Text:wght@400;700&display=swap');

.act-slide {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.act-slide .content {
  position: relative;
  z-index: 1;
  text-align: center;
  color: #F6E3D3;
  text-shadow: 0.5px 0.5px 0 #251007, 1px 1px 0 #251007, 1.5px 1.5px 0 #251007, 2px 2px 0 #251007, 2.5px 2.5px 0 #251007, 3px 3px 0 #251007, 3.5px 3.5px 0 #251007, 4px 4px 0 #251007, 4.5px 4.5px 0 #251007, 5px 5px 0 #251007;
}

.act-label {
  font-family: 'Dancing Script', cursive;
  font-size: 10rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.act-title {
  font-family: 'Noticia Text', serif;
  font-size: 2rem;
  font-weight: 700;
  white-space: nowrap;
  margin: 0 auto;
  opacity: 0.8;
}
</style>
