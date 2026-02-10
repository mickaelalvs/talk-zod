import z from "zod";

export const postRequestSchema = z.object({
  id: z.uuid(),
  title: z.string().min(4).max(100),
  pageCount: z.number().min(1),
  thumbnail: z.url(),
  hasBeenRead: z.boolean(),
});


export const requestSchema = postRequestSchema.extend({
  thumbnail: z.url().nullable() 
}).partial()