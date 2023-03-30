import express from "express"
import cors from "cors"
import {createExpressMiddleware} from "@trpc/server/adapters/express";
import {appRouter} from "./routers/index"

const PORT = 3000
const app = express()


app.use(cors({origin: "http://localhost:5173"}))
app.use("/api", createExpressMiddleware({router: appRouter}))
app.listen(PORT, () => console.log(`Server start: ${PORT}`))


export type AppRouter = typeof appRouter