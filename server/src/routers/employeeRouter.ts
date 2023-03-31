import {t} from '../trpc';
import {addEmployeeProcedure, deleteEmployeeProcedure} from "../validators/employeeValidator";
import EmployeeService from "../services/employeeService";


export const employeeRouter = t.router({
    addEmployee: addEmployeeProcedure
        .mutation(async (req) => {
            const result = await EmployeeService.addOne
            (req.input.name, req.input.surname, req.input.post , req.input.departmentId,);
            return result;
        }),
    deleteEmployee: deleteEmployeeProcedure
        .mutation(async (req) => {
            const result = await EmployeeService.deleteOne(req.input.Id);
            return result;
        }),
    getAllEmployees: t.procedure
        .query(async () => {
            const result = await EmployeeService.getAll();
            return result;
        }),
});
