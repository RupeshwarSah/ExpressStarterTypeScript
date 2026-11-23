import { z, ZodObject } from "zod";

export const pingSchema = z.object({
  message: z.string().min(1),
});
