import {t} from '../trpc'
import {adminRouter} from "../routers/adminRouter";
import {employeeRouter} from "./employeeRouter";
import {departmentRouter} from "./departmentRouter";
export const appRouter =  t.router({
    employees: employeeRouter,
    admins: adminRouter,
    departments: departmentRouter
})

