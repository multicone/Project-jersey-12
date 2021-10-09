import express, { Request, Response } from 'express';
import { body } from 'express-validator';
import { BadRequestError } from '../errors/bad-request-error';
import { validateRequest } from '../middlewares/validate-request';
import { User } from '../models/user';
import { Verification } from '../models/verification';

const router = express.Router();

router.post(
  '/api/users/verify',
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
      const verify = await Verification.findOne({ user: user._id });

      if (verify && verify.code == req.body.code) {
        const currentTime = new Date();
        const expiresAt = verify.expiresAt;
        if (currentTime > expiresAt) {
          throw new BadRequestError('Code already expired');
        } else {
          await verify.delete();
          user.verified = true;
          user.save();
          res.json({ message: 'User verified successfully' });
        }
      } else {
        throw new BadRequestError('Invalid Code');
      }
    } else {
      throw new BadRequestError('User not found');
    }
  }
);

export { router as verifyRouter };
