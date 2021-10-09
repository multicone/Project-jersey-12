import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { AuthorizationError } from '../errors/authorization-error';

interface UserPayload {
  id: string;
  email: string;
}

declare global {
  namespace Express {
    interface Request {
      user?: UserPayload;
    }
  }
}

export const currentUser = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    let token;

    try {
      token = req.headers.authorization.split(' ')[1];
      const payload = jwt.verify(token, process.env.JWT_KEY!) as UserPayload;
      req.user = payload;
      next();
    } catch (err) {
      console.log(err);
      next();
    }
  } else {
    next();
  }
};
