import z from "zod"

export const realSchema = z.object({
  title: z.string().min(1, "Le titre est requis"),
  author: z.string().min(1, "L'auteur est requis"),
  isbn: z.string().refine(
    (val) => !val || val.trim() === "" || /^(?:\d{10}|\d{13})$/.test(val.replace(/-/g, "")),
    "L'ISBN doit contenir 10 ou 13 chiffres"
  ),
  publicationDate: z.string().refine(
    (val) => !val || val.trim() === "" || (!isNaN(new Date(val).getTime()) && new Date(val) <= new Date()),
    "La date de publication doit être une date valide dans le passé"
  ),
  genre: z.string(),
  description: z.string(),
  pages: z.string().refine(
    (val) => !val || val.trim() === "" || (!isNaN(Number(val)) && Number(val) > 0),
    "Le nombre de pages doit être un nombre positif"
  ),
  rating: z.string().refine(
    (val) => !val || val.trim() === "" || (!isNaN(Number(val)) && Number(val) >= 1 && Number(val) <= 5),
    "La note doit être entre 1 et 5"
  ),
})

export type RealFormData = z.infer<typeof realSchema>