import {t} from '../trpc';
import adminController from '../controllers/adminController';
import {adminLoginProcedure, adminRegistrationProcedure} from "../validators/adminValidator"

export const adminRouter = t.router({
    logAdmin: adminLoginProcedure
        .mutation(async (req) => {
            const result = await adminController.login(req.input.login, req.input.password);
            return result;
        }),
    regAdmin: adminRegistrationProcedure
        .mutation(async (req) => {
            const result = await adminController.registration(req.input.login, req.input.password);
            return (result)
        }),
});
