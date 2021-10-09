import express, { Request, Response } from 'express';
import { body } from 'express-validator';
import { User } from '../models/user';
import { validateRequest } from '../middlewares/validate-request';
import { BadRequestError } from '../errors/bad-request-error';
import { PasswordReset } from '../models/passwordReset';
import { forgotPasswordMail } from '../services/forgotPasswordMail';

const router = express.Router();

router.post(
  '/api/users/forgot-password',
  [body('email').isEmail().withMessage('Email must be valid')],
  validateRequest,
  async (req: Request, res: Response) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      throw new BadRequestError('This email is not registered');
    }

    // Generate Code

    const resetPassword = await PasswordReset.findOne({ user: user._id });
    if (resetPassword) {
      await resetPassword.delete();
    }

    const randomNumber = Math.floor(1000 + Math.random() * 9000);
    const newVerify = PasswordReset.build({
      user: user._id,
      code: randomNumber,
    });
    await newVerify.save();

    if (process.env.NODE_ENV != 'test') {
      try {
        forgotPasswordMail(user.email, newVerify.code);
      } catch (e) {
        console.error('Sending frgotpassword mail', e);
      }
    }

    res.status(200).send({
      message: 'a code has been sent',
    });
  }
);

export { router as forgotPasswordRouter };
