import express, { Request, Response } from 'express';
import { currentUser } from '../middlewares/current-user';
import { RequireAuth } from '../middlewares/require-auth';

const router = express.Router();

router.get(
  '/api/users/currentuser',
  currentUser,
  RequireAuth,
  (req: Request, res: Response) => {
    res.send({ user: req.user || null });
  }
);

export { router as currentUserRouter };
