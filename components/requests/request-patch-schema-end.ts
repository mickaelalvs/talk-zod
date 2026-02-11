import { z } from "zod";

export const bookSchema = z.object({
  id: z.uuid(),
  title: z.string().min(4).max(100),
  pageCount: z.number().min(1),
  thumbnail: z.url(),
  hasBeenRead: z.boolean().default(false),
});

export const postBookSchema = bookSchema

export const patchBookSchema = bookSchema.extend({
  thumbnail: z.url().nullable()
}).partial()