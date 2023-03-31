import {z} from "zod";
import {t} from "../trpc";
import {addEmployeeSchema, deleteEmployeeSchema} from "../schemes/employeeSchemes";


export const deleteEmployeeProcedure =
    t.procedure.input(deleteEmployeeSchema)

export const addEmployeeProcedure =
    t.procedure.input(addEmployeeSchema)
