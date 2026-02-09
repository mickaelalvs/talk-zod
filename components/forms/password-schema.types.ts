import z from "zod";
import { passwordFormSchema } from "./password-schema";

export type PasswordFormData = z.infer<typeof passwordFormSchema>   