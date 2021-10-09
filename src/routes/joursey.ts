import express, { Request, Response } from "express";
import { currentUser } from "../middlewares/current-user";
import { RequireAuth } from "../middlewares/require-auth";
import { Joursey } from "../models/joursey";
import { BadRequestError } from "../errors/bad-request-error";
import { body } from "express-validator";
import { validateRequest } from "../middlewares/validate-request";

const router = express.Router();

router.post(
  "/api/joursey",
  currentUser,
  RequireAuth,
  [
    body("jourseyName")
      .trim()
      .isLength({ min: 3 })
      .withMessage("jourseyName must be 3 character long"),
    body("jourseyNumber")
      .trim()
      .isLength({ min: 1, max: 3 })
      .withMessage("Joursey Number must 1 to 3 digit"),
    body("paymentMethod")
      .isString()
      .isLength({ min: 1 })
      .withMessage("Payment Method required"),
    body("size").isString().isLength({ min: 1 }).withMessage("size required"),
    body("sleveSize")
      .isString()
      .isLength({ min: 1 })
      .withMessage("Sleve Size required"),
    body("txId")
      .isString()
      .isLength({ min: 1 })
      .withMessage("Transaction Id required"),
  ],
  validateRequest,
  async (req: Request, res: Response) => {
    const { jourseyNumber, jourseyName, paymentMethod, txId, size, sleveSize } =
      req.body;

    console.log("Working");

    const user = req.user;

    if (!user) {
      throw new BadRequestError("User not found");
    }

    const existingJoursey = await Joursey.findOne({ user: user.id });

    if (existingJoursey) {
      throw new BadRequestError("Already submitted");
    }

    const existingJourseyNumber = await Joursey.findOne({
      jourseyNumber,
    });

    if (existingJourseyNumber) {
      throw new BadRequestError(`${jourseyNumber} Already taken by someone`);
    }

    const joursey = Joursey.build({
      user: user.id,
      jourseyNumber,
      jourseyName,
      paymentMethod,
      txId,
      size,
      sleveSize,
      status: "requested",
    });
    await joursey.save();

    res.json(joursey);
  }
);

router.get(
  "/api/joursey",
  currentUser,
  RequireAuth,
  async (req: Request, res: Response) => {
    const user = req.user;
    if (user) {
      const joursey = await Joursey.findOne({ user: user.id });
      if (joursey) {
        res.json(joursey);
      } else {
        throw new BadRequestError(
          "Jersey Not found. Please submit your jersey"
        );
      }
    } else {
      throw new BadRequestError("You are unauthorized");
    }
  }
);

export { router as jourseyRouter };
