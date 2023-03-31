import express, {Express} from "express";
import cors from "cors";
import {createExpressMiddleware} from "@trpc/server/adapters/express";
import {appRouter} from "./routers/index";

const PORT = process.env.PORT || 5000;
const app = express();
app.use(cors({origin: process.env.CORS_ORIGINS}));
app.use("/api", createExpressMiddleware({router: appRouter}));

const start = async () => {
    app.listen(PORT, () => console.log(`Server start: ${PORT}`));
};

start();

export type AppRouter = typeof appRouter;