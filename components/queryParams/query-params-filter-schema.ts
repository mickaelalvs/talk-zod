import { z } from "zod";

const filtersTypeSchema = z.literal(['romance', 'poetry', 'essays'])

export const queryParamsFilterSchema = z.object({
  genres: z.array(filtersTypeSchema),
})