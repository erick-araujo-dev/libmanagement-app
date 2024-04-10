import { z } from "zod";
import { schemaClientModel } from "./client.type";
import { schemaCopyModel } from "./copy.type";

export const schemaRentModel = z.object({
  cdRent: z.coerce.number().int(),
  rentDt: z.date(),
  returnDt: z.date(),
  returnCondition: z.string(),
  
  client: z.lazy(() => schemaClientModel),
  copy: z.lazy(() => schemaCopyModel),
})


export type Rent = z.infer<typeof schemaRentModel>