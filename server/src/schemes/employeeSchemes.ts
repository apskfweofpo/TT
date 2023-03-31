import {z} from "zod";

export const addEmployeeSchema = z.object(
    {
        name: z.string(),
        surname: z.string(),
        post: z.string(),
        departmentId: z.number()
    })

export const deleteEmployeeSchema = (z.object(
    {
        Id: z.number()
    }))