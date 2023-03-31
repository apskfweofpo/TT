import {z} from "zod";

export const adminLoginSchema = z.object(
    {
        login: z.string(),
        password: z.string()
    })

export const adminRegistrationSchema = z.object(
    {
        email: z.string(),
        login: z.string(),
        password: z.string()
    })