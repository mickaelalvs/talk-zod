<script setup lang="ts">
import { ref, reactive, watch, onMounted } from 'vue'
import { z } from 'zod'
import { passwordFormSchema } from './password-schema'
import type { PasswordFormData } from './password-schema.types'

const STORAGE_KEY = 'passwordFormData'

// Sample data - update this object to change the prefilled values
const sampleData: PasswordFormData = {
  login: 'user@sunnytech.com',
  password: 'SecurePassword123',
  passwordConfirmation: 'SecurePassword123',
}

const formData = reactive<PasswordFormData>({
  login: '',
  password: '',
  passwordConfirmation: '',
})

const errors = reactive<Partial<Record<keyof PasswordFormData, string>>>({})
const isSubmitting = ref(false)
const showConfetti = ref(false)
const showPassword = ref(false)
const showPasswordConfirmation = ref(false)

// Load form data from sessionStorage on mount
onMounted(() => {
  const savedData = sessionStorage.getItem(STORAGE_KEY)
  if (savedData) {
    try {
      const parsed = JSON.parse(savedData) as PasswordFormData
      formData.login = parsed.login || ''
      formData.password = parsed.password || ''
      formData.passwordConfirmation = parsed.passwordConfirmation || ''
    } catch (error) {
      console.error('Failed to load form data from sessionStorage:', error)
    }
  }
})

// Save form data to sessionStorage whenever it changes
watch(formData, (newData) => {
  try {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(newData))
  } catch (error) {
    console.error('Failed to save form data to sessionStorage:', error)
  }
}, { deep: true })

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

const fillFormWithSampleData = () => {
  formData.login = sampleData.login
  formData.password = sampleData.password
  formData.passwordConfirmation = sampleData.passwordConfirmation

  // Clear any existing errors
  Object.keys(errors).forEach((key) => delete errors[key as keyof PasswordFormData])

  // Validate the filled form
  validateForm()
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
    
    // Clear sessionStorage after successful submission
    sessionStorage.removeItem(STORAGE_KEY)
  }, 200)
}
</script>

<template>
  <div class="form-container">
    <button type="button" @click="fillFormWithSampleData" class="fill-button" title="Fill with sample data">
      Autofill
    </button>
    <form @submit="handleSubmit" class="password-form">
      <div v-if="showConfetti" class="confetti-container">
        <div v-for="i in 200" :key="i" class="confetti" :style="{
          left: Math.random() * 100 + '%',
          animationDelay: Math.random() * 2 + 's',
          '--drift': (Math.random() * 200 - 100) + 'px',
          '--duration': (1.2 + Math.random() * 0.6) + 's',
          width: Math.random() < 0.5 ? (6 + Math.random() * 4) + 'px' : (6 + Math.random() * 6) + 'px',
          height: Math.random() < 0.5 ? (6 + Math.random() * 4) + 'px' : (5 + Math.random() * 6) + 'px',
          backgroundColor: ['#007bff', '#28a745', '#ffc107', '#dc3545', '#17a2b8', '#6f42c1'][Math.floor(Math.random() * 6)]
        }"></div>
      </div>
      <div class="form-group">
        <label for="login">Login</label>
        <input id="login" v-model="formData.login" @blur="validateField('login')"
          :class="{ error: errors.login }" />
        <span v-if="errors.login" class="error-message">{{ errors.login }}</span>
      </div>

      <div class="form-group">
        <label for="password">Password</label>
        <div class="input-with-toggle">
          <input id="password" v-model="formData.password" :type="showPassword ? 'text' : 'password'"
            @blur="validateField('password')" :class="{ error: errors.password }" />
          <button type="button" @click="showPassword = !showPassword" class="toggle-password-button"
            :title="showPassword ? 'Hide password' : 'Show password'">
            <img :src="showPassword ? '/components/forms/assets/hide.png' : '/components/forms/assets/show.png'"
              :alt="showPassword ? 'Hide' : 'Show'" class="toggle-icon" />
          </button>
        </div>
        <span v-if="errors.password" class="error-message">{{ errors.password }}</span>
      </div>

      <div class="form-group">
        <label for="passwordConfirmation">Confirm Password</label>
        <div class="input-with-toggle">
          <input id="passwordConfirmation" v-model="formData.passwordConfirmation"
            :type="showPasswordConfirmation ? 'text' : 'password'" @blur="validateForm"
            :class="{ error: errors.passwordConfirmation }" />
          <button type="button" @click="showPasswordConfirmation = !showPasswordConfirmation" class="toggle-password-button"
            :title="showPasswordConfirmation ? 'Hide password' : 'Show password'">
            <img :src="showPasswordConfirmation ? '/components/forms/assets/hide.png' : '/components/forms/assets/show.png'"
              :alt="showPasswordConfirmation ? 'Hide' : 'Show'" class="toggle-icon" />
          </button>
        </div>
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
  overflow: visible;
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

.fill-button {
  position: absolute;
  top: -2rem;
  right: 0.5rem;
  background: #e8e8e8 !important;
  color: #888 !important;
  border: 1px solid #ccc !important;
  border-radius: 3px;
  font-size: 0.55rem;
  cursor: pointer;
  z-index: 10;
  padding: 0.1rem 0.35rem;
  outline: none !important;
  box-shadow: none !important;
}

.fill-button:hover,
.fill-button:focus,
.fill-button:active {
  background-color: #ddd !important;
  border-color: #aaa !important;
  color: #666 !important;
  outline: none !important;
  box-shadow: none !important;
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

.input-with-toggle {
  position: relative;
  display: flex;
  align-items: center;
}

.input-with-toggle input {
  flex: 1;
  padding-right: 2.5rem;
}

.toggle-password-button {
  position: absolute;
  right: 0.25rem;
  background: transparent !important;
  color: #666 !important;
  border: none !important;
  padding: 0.25rem 0.5rem !important;
  font-size: 1rem;
  cursor: pointer;
  z-index: 3;
  margin: 0 !important;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.toggle-password-button:active .toggle-icon {
  animation: toggle-click 0.3s ease;
}

@keyframes toggle-click {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(0.85);
  }
  100% {
    transform: scale(1);
  }
}

.toggle-icon {
  width: 1rem;
  height: 1rem;
  display: block;
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
