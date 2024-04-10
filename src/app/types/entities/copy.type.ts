import { z } from "zod";
import { schemaBookModel } from "./book.type";

export const schemaCopyModel = z.object({
  cdCopy: z.coerce.number().int(),
  status: z.enum(['available', 'unavailable', 'rented', 'archived']),
  condition: z.string(),
  updateAt: z.date(),
  createAt: z.date(),
  
  book: z.lazy(() => schemaBookModel),
})


export type Copy = z.infer<typeof schemaCopyModel>