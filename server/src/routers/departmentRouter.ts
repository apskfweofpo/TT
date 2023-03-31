import {t} from '../trpc';
import departmentController from '../controllers/departmentController';
import {z} from "zod";
import departmentService from "../services/departmentService";
import {
    addDepartmentProcedure,
    deleteDepartmentProcedure,
    searchDepartmentsProcedure
} from "../validators/departmentValidator";


export const departmentRouter = t.router({
    addDepartment: addDepartmentProcedure
        .mutation(async (req) => {
            const result = await departmentService.addOne(req.input.name, req.input.description);
            return result;
        }),
    deleteDepartment: deleteDepartmentProcedure
        .mutation(async (req) => {
            const result = await departmentService.deleteOne(req.input.Id);
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
