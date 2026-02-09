import z from "zod";

export const queryParamsSchema = z.object({
  page: z.coerce.number(),
  releaseDate: z.coerce.date(),
})