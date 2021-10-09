import express, { Request, Response } from 'express';
import { body } from 'express-validator';
import { User } from '../models/user';
import { validateRequest } from '../middlewares/validate-request';
import { BadRequestError } from '../errors/bad-request-error';
import { PasswordReset } from '../models/passwordReset';
import { randomString } from '../services/randomString';

const router = express.Router();

router.post(
  '/api/users/reset-password',
  [
    body('email').isEmail().withMessage('Email must be valid'),
    body('code')
      .trim()
      .isLength({ min: 4, max: 4 })
      .withMessage('Code must be 4 character'),
  ],
  validateRequest,
  async (req: Request, res: Response) => {
    const user = await User.findOne({ email: req.body.email });

    if (user) {
      const verify = await PasswordReset.findOne({ user: user._id });

      if (verify && verify.code == req.body.code) {
        const currentTime = new Date();
        const expiresAt = verify.expiresAt;
        if (currentTime > expiresAt) {
          throw new BadRequestError('Code already expired');
        } else {
          const token = randomString();
          verify.token = token;
          verify.save();
          res.json({ token: token });
        }
      } else {
        throw new BadRequestError('Invalid Code');
      }
    } else {
      throw new BadRequestError('User not found');
    }
  }
);

export { router as resetPasswordRouter };
