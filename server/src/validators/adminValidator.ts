import {t} from "../trpc";
import {z} from "zod";
import {adminLoginSchema, adminRegistrationSchema} from "../schemes/adminSchemes";


export const adminRegistrationProcedure =
    t.procedure.input(adminRegistrationSchema)

export const adminLoginProcedure =
    t.procedure.input(adminLoginSchema)

