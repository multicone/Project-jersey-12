import express, { Request, Response } from "express";
import { body, check } from "express-validator";
import jwt from "jsonwebtoken";
import { User } from "../models/user";
import { BadRequestError } from "../errors/bad-request-error";
import { validateRequest } from "../middlewares/validate-request";
import { verifyMail } from "../services/verifyMail";
import { Verification } from "../models/verification";

const router = express.Router();

router.post(
  "/api/users/signup",
  [
    body("email")
      .isEmail()
      .withMessage("Email must be valid")
      .matches(/cse1(9|8)05\d\d\dbrur@gmail.com/)
      .withMessage(
        "Invalid Email format . Format should be cse1905XXXbrur@gmail.com or cse1805XXXbrur@gmail.com"
      ),
    body("name").trim().isLength({ min: 1 }).withMessage("Name is required"),
    body("password")
      .trim()
      .isLength({ min: 8 })
      .withMessage("Password must be 8 character long")
      .matches(/\d/)
      .withMessage("Password must contain a number")
      .matches(/[a-z]/)
      .withMessage("Password must contain a small letter")
      .matches(/[A-Z]/)
      .withMessage("Password must contain a capital letter")
      .matches(/[!@#$%^&*]/)
      .withMessage("Password must contain a special character [!@#$%^&*]")
      .custom((value, { req }) => {
        const email = req.body.email;
        const emailFront = email.split("@")[0];
        if (value.includes(req.body.email)) {
          throw new Error("Password must not equal to email");
        }
        if (value.includes(emailFront)) {
          throw new Error("Password should not include email part");
        }
        return true;
      }),
  ],
  validateRequest,
  async (req: Request, res: Response) => {
    const { name, email, password } = req.body;

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      throw new BadRequestError("Email in use");
    }

    const user = User.build({ name, email, password });
    await user.save();

    const randomNumber = Math.floor(1000 + Math.random() * 9000);
    const verify = Verification.build({
      user: user._id,
      code: randomNumber,
    });
    await verify.save();

    // Generate JWT token
    const userJwt = jwt.sign(
      {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
        verified: false,
      },
      process.env.JWT_KEY!
    );

    // if (process.env.NODE_ENV != "test") {
    //   try {
    //     verifyMail(user.email, verify.code);
    //   } catch (e) {
    //     console.error("Sending verification mail", e);
    //   }
    // }

    res.status(201).send({
      id: user.id,
      name: user.name,
      email: user.email,
      token: userJwt,
      role: user.role,
      verified: false,
    });
  }
);

export { router as signupRouter };
