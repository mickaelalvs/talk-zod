<script setup lang="ts">
import { ref, reactive } from 'vue'
import { z } from 'zod'
import { passwordFormSchema, type PasswordFormData } from './password-schema'

const formData = reactive<PasswordFormData>({
  login: '',
  password: '',
  passwordConfirmation: '',
})

const errors = reactive<Partial<Record<keyof PasswordFormData, string>>>({})
const isSubmitting = ref(false)

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
    alert('Form submitted successfully!')
  }, 500)
}
</script>

<template>
  <form @submit="handleSubmit" class="password-form">
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
</template>

<style scoped>
.password-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 400px;
  padding: 1.5rem;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

label {
  font-weight: 500;
  font-size: 0.875rem;
  color: #333;
}

input {
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
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
  font-size: 0.875rem;
}

button {
  padding: 0.75rem 1.5rem;
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
</style>

