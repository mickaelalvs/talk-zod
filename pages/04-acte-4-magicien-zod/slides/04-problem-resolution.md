---
punctuation: "?"
---

<style>
@keyframes ball-form-app {
  0% { transform: translateX(0); opacity: 1; }
  80% { transform: translateX(70px); opacity: 1; }
  100% { transform: translateX(70px); opacity: 0; }
}

@keyframes ball-app-code {
  0% { transform: translateX(0); opacity: 0; }
  10% { transform: translateX(0); opacity: 1; }
  90% { transform: translateX(35px); opacity: 1; }
  100% { transform: translateX(35px); opacity: 0; }
}

.animate-ball-form-app {
  animation: ball-form-app 1s ease-out forwards;
}

.animate-ball-app-code {
  animation: ball-app-code 0.8s ease-out 0.8s forwards;
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

@keyframes loader-appear {
  0% { opacity: 0; }
  1% { opacity: 1; }
  99% { opacity: 1; }
  100% { opacity: 0; }
}

@keyframes cross-appear {
  0% { opacity: 0; scale: 0; }
  100% { opacity: 1; scale: 1; }
}

.animate-loader {
  animation: loader-appear 2s ease-out 1.6s forwards, spin 0.8s linear 1.6s 3;
}

.animate-cross {
  animation: cross-appear 0.3s ease-out 3.6s forwards;
}

/* Click 7 - API flow */
@keyframes ball-api-app {
  0% { transform: translateY(0); opacity: 1; }
  80% { transform: translateY(50px); opacity: 1; }
  100% { transform: translateY(50px); opacity: 0; }
}

@keyframes ball-app-code-2 {
  0% { transform: translateX(0); opacity: 0; }
  10% { transform: translateX(0); opacity: 1; }
  90% { transform: translateX(35px); opacity: 1; }
  100% { transform: translateX(35px); opacity: 0; }
}

@keyframes check-appear {
  0% { opacity: 0; scale: 0; }
  100% { opacity: 1; scale: 1; }
}

.animate-ball-api-app {
  animation: ball-api-app 1s ease-out forwards;
}

.animate-ball-app-code-2 {
  animation: ball-app-code-2 0.8s ease-out 0.8s forwards;
}

.animate-loader-2 {
  animation: loader-appear 2s ease-out 1.6s forwards, spin 0.8s linear 1.6s 3;
}

.animate-check {
  animation: check-appear 0.3s ease-out 3.6s forwards;
}
</style>

# En quoi ça résout le problème

<div class="flex items-center justify-center mt-10 mr-20">
  <!-- Colonne gauche : sources externes autour de Mon app -->
  <div class="flex flex-col items-end">
    <!-- API en haut à droite -->
    <div class="flex flex-col items-center">
      <div v-click="1" v-motion :initial="{ opacity: 0, scale: 0 }" :enter="{ opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 400, damping: 15 } }" class="bg-[#F5F5F5] border-2 border-[#2D3748] w-20 h-20 rounded-lg flex items-center justify-center mr-7">
        <img src="../assets/icon-apis.png" class="h-12" />
      </div>
      <div v-click="1" v-motion :initial="{ opacity: 0 }" :enter="{ opacity: 1, transition: { delay: 100 } }" class="relative w-0.5 h-14 bg-[#2D3748] mr-7 mb-2">
        <!-- Boule de données qui transite API → App (click 7) -->
        <div v-if="$clicks >= 7" class="absolute -left-1.5 top-0">
          <div class="w-3 h-3 bg-[#3168B7] rounded-full animate-ball-api-app"></div>
        </div>
      </div>
    </div>
    <!-- Formulaires à gauche + Mon app -->
    <div class="flex items-center">
      <div v-click="1" v-motion :initial="{ opacity: 0, scale: 0 }" :enter="{ opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 400, damping: 15, delay: 50 } }" class="bg-[#F5F5F5] border-2 border-[#2D3748] w-20 h-20 rounded-lg flex items-center justify-center">
        <img src="../assets/icon-forms.png" class="h-12" />
      </div>
      <div v-click="1" v-motion :initial="{ opacity: 0 }" :enter="{ opacity: 1, transition: { delay: 150 } }" class="relative w-20 h-0.5 bg-[#2D3748]">
        <!-- Boule de données qui transite Form → App -->
        <div v-if="$clicks >= 6" class="absolute -top-1.5 left-0">
          <div class="w-3 h-3 bg-[#3168B7] rounded-full animate-ball-form-app"></div>
        </div>
      </div>
      <div class="flex flex-col items-center justify-center">
        <img src="../assets/icon-app.png" class="h-30" />
      </div>
    </div>
    <!-- Fichiers en bas à droite -->
    <div class="flex flex-col items-center">
      <div v-click="1" v-motion :initial="{ opacity: 0 }" :enter="{ opacity: 1, transition: { delay: 100 } }" class="w-0.5 h-14 bg-[#2D3748] mr-7 mt-2"></div>
      <div v-click="1" v-motion :initial="{ opacity: 0, scale: 0 }" :enter="{ opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 400, damping: 15, delay: 100 } }" class="bg-[#F5F5F5] border-2 border-[#2D3748] w-20 h-20 rounded-lg flex items-center justify-center mr-7">
        <img src="../assets/icon-json.png" class="h-12" />
      </div>
    </div>
  </div>

  <div v-click="2" v-motion :initial="{ opacity: 0 }" :enter="{ opacity: 1 }" class="relative w-10 h-0.5 bg-[#2D3748]">
    <!-- Boule de données qui continue App → Code (click 6) -->
    <div v-if="$clicks >= 6 && $clicks < 7" class="absolute -top-1.5 left-0 w-3 h-3 bg-[#3168B7] rounded-full opacity-0 animate-ball-app-code"></div>
    <!-- Boule de données qui continue App → Code (click 7) -->
    <div v-if="$clicks >= 7" class="absolute -top-1.5 left-0 w-3 h-3 bg-[#3168B7] rounded-full opacity-0 animate-ball-app-code-2"></div>
  </div>

  <!-- Mon code avec Types et Schéma -->
  <div class="relative flex flex-col items-center">
    <!-- Types au dessus avec ❌ -->
    <div v-click="3" v-motion :initial="{ opacity: 0, y: 10 }" :enter="{ opacity: 1, y: 0 }" class="absolute -top-20 flex flex-col items-center">
      <div class="bg-red-100 border border-[#D45656] px-4 py-2 rounded-lg text-sm font-bold text-[#D45656]">Types ❌</div>
      <div class="w-0.5 h-10 bg-[#D45656]"></div>
    </div>
    <!-- Code icon -->
    <div v-click="2" v-motion :initial="{ opacity: 0, scale: 0 }" :enter="{ opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 400, damping: 15 } }" class="relative flex items-center">
      <img src="../assets/icon-code.png" class="h-8 ml-3 mb-1" />
      <div v-if="$clicks >= 4" v-motion :initial="{ opacity: 0, scale: 0 }" :enter="{ opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 300, damping: 15 } }" class="absolute -right-20 flex items-center gap-2">
        <span class="text-2xl font-bold text-[#3168B7]">+</span>
        <img src="../assets/zod.webp" class="h-10" />
      </div>
      <!-- Click 6: Loader puis Cross (positionné en absolu) -->
      <div v-if="$clicks >= 6 && $clicks < 7" class="absolute -right-32 flex items-center justify-center">
        <div class="relative w-8 h-8">
          <div class="absolute inset-0 w-8 h-8 border-3 border-[#3168B7] border-t-transparent rounded-full opacity-0 animate-loader"></div>
          <img src="../assets/icon-cross.png" class="absolute w-8 h-8 opacity-0 animate-cross" />
        </div>
      </div>
      <!-- Click 7: Loader puis Check (positionné en absolu) -->
      <div v-if="$clicks >= 7" class="absolute -right-32 flex items-center justify-center">
        <div class="relative w-8 h-8">
          <div class="absolute inset-0 w-8 h-8 border-3 border-[#3168B7] border-t-transparent rounded-full opacity-0 animate-loader-2"></div>
          <img src="../assets/icon-check.png" class="absolute w-8 h-8 opacity-0 animate-check" />
        </div>
      </div>
    </div>
    <!-- Schéma en dessous avec ✅ -->
    <div v-click="5" v-motion :initial="{ opacity: 0, y: -10 }" :enter="{ opacity: 1, y: 0 }" class="absolute -bottom-20 flex flex-col items-center">
      <div class="w-0.5 h-10 bg-green-500"></div>
      <div class="bg-green-100 border border-green-500 px-4 py-2 rounded-lg text-sm font-bold text-green-700">Schéma ✅</div>
    </div>
  </div>
</div>

<!-- Éléments invisibles pour enregistrer les clics 6 et 7 -->
<div v-click="6" class="hidden"></div>
<div v-click="7" class="hidden"></div>

<!--
OK, au runtime on n'a plus de types...

Mais on peut vérifier le format avec un schéma !
-->
