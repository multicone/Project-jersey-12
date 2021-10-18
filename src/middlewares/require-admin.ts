import { Request, Response, NextFunction } from "express";
import { AuthorizationError } from "../errors/authorization-error";

export const RequireAdmin = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.user) {
    throw new AuthorizationError();
  }

  if (req.user.role != "admin") {
    throw new AuthorizationError();
  }
  next();
};
