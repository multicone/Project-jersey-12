import express, { Request, Response } from 'express';
import { body } from 'express-validator';
import { BadRequestError } from '../errors/bad-request-error';
import { currentUser } from '../middlewares/current-user';
import { RequireAuth } from '../middlewares/require-auth';
import { User } from '../models/user';
import { Verification } from '../models/verification';
import { verifyMail } from '../services/verifyMail';

const router = express.Router();

router.post(
  '/api/users/resend',
  currentUser,
  RequireAuth,
  async (req: Request, res: Response) => {
    let user;
    if (req.user) {
      user = await User.findById(req.user.id);
    }

    if (user) {
      if (user.verified == true) {
        throw new BadRequestError('You are already verified');
      }
      const verify = await Verification.findOne({ user: user._id });
      if (verify) {
        await verify.delete();
      }

      const randomNumber = Math.floor(1000 + Math.random() * 9000);
      const newVerify = Verification.build({
        user: user._id,
        code: randomNumber,
      });
      await newVerify.save();

      if (process.env.NODE_ENV != 'test') {
        try {
          verifyMail(user.email, newVerify.code);
        } catch (e) {
          console.error('Sending verification mail', e);
        }
      }

      res.json({
        message: 'a new Verification code sent',
      });
    } else {
      throw new BadRequestError('User not found');
    }
  }
);

export { router as resendVerifyRouter };
