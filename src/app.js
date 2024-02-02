import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.routes.js";
import tasksRoutes from "./routes/tasks.routes.js";
import cors from "cors";
import compression from "compression";

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  },{
    origin: "https://mongodb.net",
    credentials:true
  })
);
app.use(compression());
app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());
app.use("/api/", authRoutes);
app.use("/api", tasksRoutes);
export default app;
