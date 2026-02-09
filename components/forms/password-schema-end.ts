import { z } from 'zod'

export const passwordFormSchema = z.object({
  login: z.email(),
  password: z.string().min(8),
  passwordConfirmation: z.string().min(8),
}).refine(data => data.password === data.passwordConfirmation, {
  message: "Les mots de passe ne correspondent pas",
  path: ["passwordConfirmation"]
})