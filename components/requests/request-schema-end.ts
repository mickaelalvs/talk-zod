import { z } from "zod";

export const postBookSchema = z.object({
  id: z.uuid(),
  title: z.string().min(4).max(100),
  pageCount: z.number().min(1),
  thumbnail: z.url(),
  hasBeenRead: z.boolean().optional(),
})