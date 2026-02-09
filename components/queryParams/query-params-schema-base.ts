import z from "zod";

export const queryParamsSchema = z.object({
  page: z.string(),
  releaseDate: z.string(),
})