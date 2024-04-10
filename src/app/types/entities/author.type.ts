import { z } from "zod";

export const schemaAuthorModel = z.object({
  cdAuthor: z.coerce.number().int(),
  name: z.string(),
})


export type Author = z.infer<typeof schemaAuthorModel>