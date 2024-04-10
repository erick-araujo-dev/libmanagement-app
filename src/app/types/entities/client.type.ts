import { z } from "zod";
import { schemaAddressModel } from "./address.type";

export const schemaClientModel = z.object({
  cdClient: z.coerce.number().int(),
  name: z.string(),
  phone: z.string(),
  birthDt: z.date(),
  updateDt: z.date(),
  
  address: z.lazy(() => schemaAddressModel),
})


export type Client = z.infer<typeof schemaClientModel>