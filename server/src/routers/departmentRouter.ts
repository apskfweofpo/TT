import {t} from '../trpc';
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
            const result = await departmentService.getAll();
            return result;
        }),
    searchDepartments: searchDepartmentsProcedure
        .query(async (req) => {
            const result = await departmentService.search(req.input.name);
            return result;
        }),

});
