import { z } from 'zod'

export const passwordFormSchema = z.object({
  login: z.email({ message: 'email' }),
  password: z.string().min(12),
  passwordConfirmation: z.string().min(12),
}).refine(data => data.password === data.passwordConfirmation, { message: 'password', path: ["passwordConfirmation"] })