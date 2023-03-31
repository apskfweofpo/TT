import {t} from '../trpc';
import {adminLoginProcedure, adminRegistrationProcedure} from "../validators/adminValidator"
import adminService from "../services/adminService";

export const adminRouter = t.router({
    logAdmin: adminLoginProcedure
        .mutation(async (req) => {
            const result = await adminService.login(req.input.login, req.input.password);
            return result;
        }),
    regAdmin: adminRegistrationProcedure
        .mutation(async (req) => {
            const result = await adminService.register(req.input.email, req.input.login, req.input.password);
            return (result)
        }),
});
