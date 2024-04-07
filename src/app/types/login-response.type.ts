import { z } from "zod"

const schemaLoginResponse = z.object({
    token: z.string(),
    name: z.string(),
    role: z.string()
})


export type LoginResponse = z.infer<typeof schemaLoginResponse>