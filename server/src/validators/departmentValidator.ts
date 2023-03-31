import {t} from "../trpc";
import {z} from "zod";
import {addDepartmenScheme, deleteDepartmentScheme, searchDepartmentsScheme} from "../schemes/departmentSchemes"

export const addDepartmentProcedure =
    t.procedure.input(addDepartmenScheme)

export const deleteDepartmentProcedure =
    t.procedure.input(deleteDepartmentScheme)

export const searchDepartmentsProcedure =
    t.procedure.input(searchDepartmentsScheme)
