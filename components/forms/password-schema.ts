import { z } from 'zod'

export const passwordFormSchema = z.object({
  login: z.string().min(1, 'Le login est requis'),
  password: z.string().min(8, 'Le mot de passe doit contenir au moins 8 caractères'),
  passwordConfirmation: z.string().min(1, 'La confirmation du mot de passe est requise'),
}).refine((data: PasswordFormData) => data.password === data.passwordConfirmation, {
  message: 'Les mots de passe ne correspondent pas',
  path: ['passwordConfirmation'],
});

export type PasswordFormData = z.infer<typeof passwordFormSchema>