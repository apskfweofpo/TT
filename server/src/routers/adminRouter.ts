import {t} from '../trpc';
import adminController from '../controllers/adminController';
import {z} from "zod";

const adminProcedure = t.procedure.input(z.object(
    {
        login: z.string(),
        password: z.string()
    }))

export const adminRouter = t.router({
    logAdmin: adminProcedure
        .mutation(async (req) => {
            const result = await adminController.login(req.input.login, req.input.password);
            return result;
        }),
    regAdmin: adminProcedure
        .mutation(async (req) => {
            const result = await adminController.registration(req.input.login, req.input.password);
            return result;
        }),
});
