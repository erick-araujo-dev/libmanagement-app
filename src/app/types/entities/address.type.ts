import { z } from "zod";

export const schemaAddressModel = z.object({
  cdAddress: z.coerce.number().int(),
  street: z.string(),
  number: z.number().int(),
  complement: z.string(),
  neighborhood: z.string(),
  city: z.string(),
  zipCode: z.string(),
})


export type Address = z.infer<typeof schemaAddressModel>