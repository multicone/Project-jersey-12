import express from "express";
import "express-async-errors";
import { json } from "body-parser";
import morgan from "morgan";
import swaggerUI from "swagger-ui-express";
import dotenv from "dotenv";
import docs from "./docs/index.js";
import cors from "cors";
import path from "path";
// import hostValidation from "host-validation";

dotenv.config();

import { signupRouter } from "./routes/signup";
import { errorHandler } from "./middlewares/error-handler";
import { NotFoundError } from "./errors/not-found-error";
import { signinRouter } from "./routes/signin";
import { currentUserRouter } from "./routes/current-user";
import { verifyRouter } from "./routes/verify";
import { resendVerifyRouter } from "./routes/resend-verification";
import { forgotPasswordRouter } from "./routes/forgot-password";
import { resetPasswordRouter } from "./routes/reset-password";
import { newPasswordRouter } from "./routes/new-password";
import { jourseyRouter } from "./routes/joursey";

const app = express();
app.set("trust proxy", true);
app.use(cors());
app.use(json());
app.use(morgan("dev"));

app.use(signupRouter);
app.use(signinRouter);
app.use(currentUserRouter);
app.use(verifyRouter);
app.use(resendVerifyRouter);
app.use(forgotPasswordRouter);
app.use(resetPasswordRouter);
app.use(newPasswordRouter);
app.use(jourseyRouter);

app.use("/api", swaggerUI.serve, swaggerUI.setup(docs));

const buildPath = path.join(__dirname, "../client/build");

app.use(express.static(buildPath));

app.get("*", async (req, res) => {
  res.sendFile(path.join(buildPath, "index.html"));
});

app.all("*", async (req, res, next) => {
  throw new NotFoundError();
});

app.use(errorHandler);

export { app };
