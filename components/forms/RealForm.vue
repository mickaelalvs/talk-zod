<script setup lang="ts">
import { ref, reactive } from 'vue'
import { z } from 'zod'
import { realSchema, type RealFormData } from './real-schema'

const formData = reactive<RealFormData>({
  title: '',
  author: '',
  isbn: '',
  publicationDate: '',
  genre: '',
  description: '',
  pages: '',
  rating: '',
})

const errors = reactive<Partial<Record<keyof RealFormData, string>>>({})
const isSubmitting = ref(false)
const showConfetti = ref(false)

const triggerConfetti = () => {
  showConfetti.value = true
  setTimeout(() => {
    showConfetti.value = false
  }, 4000)
}

const validateField = (field: keyof RealFormData) => {
  try {
    realSchema.shape[field].parse(formData[field])
    delete errors[field]
  } catch (error) {
    if (error instanceof z.ZodError) {
      errors[field] = error.issues[0]?.message || 'Valeur invalide'
    }
  }
}

const validateForm = () => {
  const result = realSchema.safeParse(formData)
  
  if (!result.success) {
    result.error.issues.forEach((err) => {
      const field = err.path[0] as keyof RealFormData
      errors[field] = err.message
    })
    return false
  }
  
  // Clear all errors if validation passes
  Object.keys(errors).forEach((key) => delete errors[key as keyof RealFormData])
  return true
}

const handleSubmit = (e: Event) => {
  e.preventDefault()
  
  if (!validateForm()) {
    return
  }
  
  isSubmitting.value = true
  
  // Simulate form submission
  setTimeout(() => {
    console.log('Form submitted:', formData)
    isSubmitting.value = false
    triggerConfetti()
  }, 200)
}
</script>

<template>
  <div class="form-container">
    <form @submit="handleSubmit" class="password-form">
      <div v-if="showConfetti" class="confetti-container">
        <div
          v-for="i in 200"
          :key="i"
          class="confetti"
          :style="{
            left: Math.random() * 100 + '%',
            animationDelay: Math.random() * 2 + 's',
            '--drift': (Math.random() * 200 - 100) + 'px',
            '--duration': (1.2 + Math.random() * 0.6) + 's',
            width: Math.random() < 0.5 ? (6 + Math.random() * 4) + 'px' : (6 + Math.random() * 6) + 'px',
            height: Math.random() < 0.5 ? (6 + Math.random() * 4) + 'px' : (5 + Math.random() * 6) + 'px',
            backgroundColor: ['#007bff', '#28a745', '#ffc107', '#dc3545', '#17a2b8', '#6f42c1'][Math.floor(Math.random() * 6)]
          }"
        ></div>
      </div>
    <div class="form-group">
      <label for="title">Titre <span class="required">*</span></label>
      <input
        id="title"
        v-model="formData.title"
        type="text"
        placeholder="Entrez le titre du livre"
        @blur="validateField('title')"
        :class="{ error: errors.title }"
      />
      <span v-if="errors.title" class="error-message">{{ errors.title }}</span>
    </div>

    <div class="form-group">
      <label for="author">Auteur <span class="required">*</span></label>
      <input
        id="author"
        v-model="formData.author"
        type="text"
        placeholder="Entrez le nom de l'auteur"
        @blur="validateField('author')"
        :class="{ error: errors.author }"
      />
      <span v-if="errors.author" class="error-message">{{ errors.author }}</span>
    </div>

    <div class="form-group">
      <label for="isbn">ISBN</label>
      <input
        id="isbn"
        v-model="formData.isbn"
        type="text"
        placeholder="10 ou 13 chiffres"
        @blur="validateField('isbn')"
        :class="{ error: errors.isbn }"
      />
      <span v-if="errors.isbn" class="error-message">{{ errors.isbn }}</span>
    </div>

    <div class="form-group">
      <label for="publicationDate">Date de publication</label>
      <input
        id="publicationDate"
        v-model="formData.publicationDate"
        type="date"
        @blur="validateField('publicationDate')"
        :class="{ error: errors.publicationDate }"
      />
      <span v-if="errors.publicationDate" class="error-message">{{ errors.publicationDate }}</span>
    </div>

    <div class="form-group">
      <label for="genre">Genre</label>
      <input
        id="genre"
        v-model="formData.genre"
        type="text"
        placeholder="ex: Fiction, Science-Fiction, Mystère"
        @blur="validateField('genre')"
        :class="{ error: errors.genre }"
      />
      <span v-if="errors.genre" class="error-message">{{ errors.genre }}</span>
    </div>

    <div class="form-group">
      <label for="description">Description</label>
      <textarea
        id="description"
        v-model="formData.description"
        placeholder="Entrez la description du livre"
        rows="3"
        @blur="validateField('description')"
        :class="{ error: errors.description }"
      ></textarea>
      <span v-if="errors.description" class="error-message">{{ errors.description }}</span>
    </div>

    <div class="form-group">
      <label for="pages">Nombre de pages</label>
      <input
        id="pages"
        v-model="formData.pages"
        type="number"
        placeholder="Nombre de pages"
        min="1"
        @blur="validateField('pages')"
        :class="{ error: errors.pages }"
      />
      <span v-if="errors.pages" class="error-message">{{ errors.pages }}</span>
    </div>

    <div class="form-group">
      <label for="rating">Note (1-5)</label>
      <input
        id="rating"
        v-model="formData.rating"
        type="number"
        placeholder="De 1 à 5"
        min="1"
        max="5"
        step="0.1"
        @blur="validateField('rating')"
        :class="{ error: errors.rating }"
      />
      <span v-if="errors.rating" class="error-message">{{ errors.rating }}</span>
    </div>

    <button type="submit" :disabled="isSubmitting">
      {{ isSubmitting ? 'Envoi en cours...' : 'Soumettre' }}
    </button>
  </form>
  </div>
</template>

<style scoped>
.form-container {
  position: relative;
}

.confetti-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 10000;
  overflow: hidden;
}

.confetti {
  position: absolute;
  top: -20px;
  opacity: 1;
  animation: confetti-fall var(--duration, 1.5s) linear forwards;
}

@keyframes confetti-fall {
  0% {
    top: 0;
    transform: translateX(0) rotate(0deg);
    opacity: 1;
  }
  50% {
    top: 50%;
    transform: translateX(var(--drift)) rotate(360deg);
  }
  100% {
    top: 100%;
    transform: translateX(calc(var(--drift) * 1.5)) rotate(720deg);
    opacity: 0;
  }
}

.password-form {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding: 1.5rem;
  border-radius: 8px;
  min-width: 400px;
  max-height: 380px;
  overflow-y: auto;
  overflow-x: hidden;
}

.form-group {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

label {
  font-weight: 500;
  font-size: 0.875rem;
  color: #333;
}

input,
textarea {
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 0.875rem;
  transition: border-color 0.2s;
  font-family: inherit;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #007bff;
}

input.error,
textarea.error {
  border-color: #dc3545;
}

textarea {
  resize: vertical;
  min-height: 60px;
}

.required {
  color: #dc3545;
}

.error-message {
  color: #dc3545;
  font-size: 0.7rem;
  margin-top: 0.125rem;
}

button {
  position: relative;
  z-index: 2;
  margin-top: 0.5rem;
  padding: 0.5rem 1rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.2s;
}

button:hover:not(:disabled) {
  background-color: #0056b3;
}

button:disabled {
  background-color: #6c757d;
  cursor: not-allowed;
}

.password-form::-webkit-scrollbar {
  width: 8px;
}

.password-form::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 4px;
}

.password-form::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 4px;
}

.password-form::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>

