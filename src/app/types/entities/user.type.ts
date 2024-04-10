import { z } from "zod";

export const schemaUserModel = z.object({
  cdUser: z.coerce.number().int(),
  name: z.string(),
  email: z.string().email(),
  password: z.string(),
  role: z.enum(['admin', 'normal']),
  firstAccess: z.coerce.number().int(),
  
  createDt: z.date(),
  updateDt: z.date(),
})


export type User = z.infer<typeof schemaUserModel>