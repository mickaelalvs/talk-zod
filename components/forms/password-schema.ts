import { z } from 'zod'

export const passwordFormSchema = z.object({
  login: z.string(),
  password: z.string(),
  passwordConfirmation: z.string(),
})