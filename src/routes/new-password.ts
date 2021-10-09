import express, { Request, Response } from 'express';
import { body } from 'express-validator';
import { User } from '../models/user';
import { validateRequest } from '../middlewares/validate-request';
import { BadRequestError } from '../errors/bad-request-error';
import { PasswordReset } from '../models/passwordReset';
import { randomString } from '../services/randomString';

const router = express.Router();

router.post(
  '/api/users/reset-password/new',
  [
    body('token').trim().isLength({ min: 1 }).withMessage('Token is required'),
    body('password')
      .trim()
      .isLength({ min: 8 })
      .withMessage('Password must be 8 character long')
      .matches(/\d/)
      .withMessage('Password must contain a number')
      .matches(/[a-z]/)
      .withMessage('Password must contain a small letter')
      .matches(/[A-Z]/)
      .withMessage('Password must contain a capital letter')
      .matches(/[!@#$%^&*]/)
      .withMessage('Password must contain a special character [!@#$%^&*]'),
  ],
  validateRequest,
  async (req: Request, res: Response) => {
    const verify = await PasswordReset.findOne({ token: req.body.token });
    if (verify && verify.token == req.body.token) {
      const currentTime = new Date();
      const expiresAt = verify.expiresAt;
      if (currentTime > expiresAt) {
        throw new BadRequestError('Time expired. Please try again');
      } else {
        const user = await User.findById(verify.user);
        if (user) {
          await verify.delete();
          user.password = req.body.password;
          await user.save();
          res.json({ message: 'Password Updated Successfully' });
        } else {
          throw new BadRequestError('User not found');
        }
      }
    } else {
      throw new BadRequestError('Invalid Token');
    }
  }
);

export { router as newPasswordRouter };
