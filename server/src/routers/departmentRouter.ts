import {t} from '../trpc';
import adminController from '../controllers/adminController';
import {z} from "zod";
import EmployeeController from "../controllers/employeeController";

const addDepartmentProcedure = t.procedure.input(z.object(
    {
        name: z.string(),
        surname: z.string(),
        post: z.string(),
        departmentId: z.number()
    }))

const deleteDepartmentProcedure = t.procedure.input(z.object(
    {
        Id:z.number()
    }))



export const departmentRouter = t.router({
    addEmloyee: addDepartmentProcedure
        .mutation(async (req) => {
            const result = await EmployeeController.addOne(req.input.name, req.input.surname, req.input.post, req.input.departmentId,);
            return result;
        }),
    deleteEmployee: deleteDepartmentProcedure
        .mutation(async (req) => {
            const result = await EmployeeController.deleteOne(req.input.Id);
            return result;
        }),
    getAllDepartment: t.procedure
        .query(async () => {
            const result = await EmployeeController.getAll();
            return result;
        }),

});
