import {t} from '../trpc';
import departmentController from '../controllers/departmentController';
import {z} from "zod";

const addDepartmentProcedure = t.procedure.input(z.object(
    {
        name: z.string(),
        description: z.string(),
    }))

const deleteDepartmentProcedure = t.procedure.input(z.object(
    {
        Id:z.number()
    }))

const searchDepartmentsProcedure = t.procedure.input(z.object(
    {
        name:z.string().optional()
    }))



export const departmentRouter = t.router({
    addEmloyee: addDepartmentProcedure
        .mutation(async (req) => {
            const result = await departmentController.addOne(req.input.name, req.input.description);
            return result;
        }),
    deleteEmployee: deleteDepartmentProcedure
        .mutation(async (req) => {
            const result = await departmentController.deleteOne(req.input.Id);
            return result;
        }),
    getAllDepartments: t.procedure
        .query(async (req) => {
            const result = await departmentController.getAll();
            return result;
        }),
    searchDepartments: searchDepartmentsProcedure
        .query(async (req) => {
            const result = await departmentController.search(req.input.name);
            return result;
        }),

});
