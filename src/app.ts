import express, { Application, Request, Response } from "express";
import notFound from "./middlewares/not-found";
import healthRouter from "./routes/health.route";
import morgan from "morgan";
const app: Application = express();

/*========== Morgan logging ==========*/
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev")); 
} else {
  app.use(morgan("combined"));
}

/*========== Routes ==========*/
app.use("/health", healthRouter);

/*========== Root route ==========*/
app.get("/", (_req: Request, res: Response) => {
  res.json({ ok: true, message: "Welcome to Express + TypeScript!" });
});

/*========== 404 + Error handlers ==========*/
app.use(notFound);
// app.use(errorHandler);

export default app;
