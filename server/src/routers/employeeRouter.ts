import {t} from '../trpc';
import adminController from '../controllers/adminController';
import {z} from "zod";
import EmployeeController from "../controllers/employeeController";
import {addEmployeeProcedure, deleteEmployeeProcedure} from "../validators/employeeValidator";


export const employeeRouter = t.router({
    addEmployee: addEmployeeProcedure
        .mutation(async (req) => {
            const result = await EmployeeController.addOne(req.input.name, req.input.surname, req.input.post, req.input.departmentId,);
            return result;
        }),
    deleteEmployee: deleteEmployeeProcedure
        .mutation(async (req) => {
            const result = await EmployeeController.deleteOne(req.input.Id);
            return result;
        }),
    getAllEmployees: t.procedure
        .query(async () => {
            const result = await EmployeeController.getAll();
            return result;
        }),
});
