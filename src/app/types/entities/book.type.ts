import { z } from "zod";
import { schemaAuthorModel } from "./author.type";

export const schemaBookModel = z.object({
  cdBook: z.coerce.number().int(),
  title: z.string(),
  publicationYear: z.coerce.number().int(),
  publisher: z.string(),
  editionYear: z.coerce.number().int(),
  pages: z.coerce.number().int(),
  ageRating: z.coerce.number().int(),
  isArchived: z.coerce.number(),
  updateAt: z.date(),

  authors: z.lazy(() => schemaAuthorModel).nullable()
})


export type Book = z.infer<typeof schemaBookModel>