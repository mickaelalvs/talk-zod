<script setup lang="ts">
import { ref, reactive } from 'vue'
import { z } from 'zod'
import { passwordFormSchema } from './password-schema'
import type { PasswordFormData } from './password-schema.types'

const formData = reactive<PasswordFormData>({
  login: '',
  password: '',
  passwordConfirmation: '',
})

const errors = reactive<Partial<Record<keyof PasswordFormData, string>>>({})
const isSubmitting = ref(false)
const showConfetti = ref(false)

const triggerConfetti = () => {
  showConfetti.value = true
  setTimeout(() => {
    showConfetti.value = false
  }, 4000)
}

const validateField = (field: keyof PasswordFormData) => {
  try {
    passwordFormSchema.shape[field].parse(formData[field])
    delete errors[field]
  } catch (error) {
    if (error instanceof z.ZodError) {
      errors[field] = error.issues[0]?.message || 'Invalid value'
    }
  }
}

const validateForm = () => {
  const result = passwordFormSchema.safeParse(formData)
  
  if (!result.success) {
    result.error.issues.forEach((err) => {
      const field = err.path[0] as keyof PasswordFormData
      errors[field] = err.message
    })
    return false
  }
  
  // Clear all errors if validation passes
  Object.keys(errors).forEach((key) => delete errors[key as keyof PasswordFormData])
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
      <label for="login">Login</label>
      <input
        id="login"
        v-model="formData.login"
        type="text"
        @blur="validateField('login')"
        :class="{ error: errors.login }"
      />
      <span v-if="errors.login" class="error-message">{{ errors.login }}</span>
    </div>

    <div class="form-group">
      <label for="password">Password</label>
      <input
        id="password"
        v-model="formData.password"
        type="password"
        @blur="validateField('password')"
        :class="{ error: errors.password }"
      />
      <span v-if="errors.password" class="error-message">{{ errors.password }}</span>
    </div>

    <div class="form-group">
      <label for="passwordConfirmation">Confirm Password</label>
      <input
        id="passwordConfirmation"
        v-model="formData.passwordConfirmation"
        type="password"
        @blur="validateForm"
        :class="{ error: errors.passwordConfirmation }"
      />
      <span v-if="errors.passwordConfirmation" class="error-message">
        {{ errors.passwordConfirmation }}
      </span>
    </div>

    <button type="submit" :disabled="isSubmitting">
      {{ isSubmitting ? 'Submitting...' : 'Submit' }}
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
  max-height: 370px;
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

input {
  padding: 0.2rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 0.875rem;
  transition: border-color 0.2s;
}

input:focus {
  outline: none;
  border-color: #007bff;
}

input.error {
  border-color: #dc3545;
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

