import {t} from "../trpc";
import {z} from "zod";

export const addDepartmenScheme = z.object(
    {
        name: z.string(),
        description: z.string(),
    })

export  const deleteDepartmentScheme = z.object(
    {
        Id: z.number().min(1)
    })

export  const searchDepartmentsScheme = z.object(
    {
        name: z.string()
    })
