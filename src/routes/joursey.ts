import express, { Request, Response } from "express";
import { currentUser } from "../middlewares/current-user";
import { RequireAuth } from "../middlewares/require-auth";
import { Joursey } from "../models/joursey";
import { BadRequestError } from "../errors/bad-request-error";
import { body } from "express-validator";
import { validateRequest } from "../middlewares/validate-request";
import { bot } from "../app";
import { RequireAdmin } from "../middlewares/require-admin";

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

    bot.telegram
      .sendMessage(
        process.env.CHAT_ID,
        `${user.name} has purchased a Jersey.
Jersey no: ${jourseyNumber}
Jersey Name : ${jourseyName.toUpperCase()}
Payment Method: ${paymentMethod}
Transaction Id: ${txId}
Size : ${size}
Sleve Size ${sleveSize}`
      )
      .catch(console.error);

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

router.get(
  "/api/orders",
  currentUser,
  RequireAuth,
  RequireAdmin,
  async (req: Request, res: Response) => {
    const user = req.user;
    if (user) {
      const joursey = await Joursey.find().populate("user");
      if (joursey) {
        res.json(joursey);
      } else {
        throw new BadRequestError("No jersey Found");
      }
    } else {
      throw new BadRequestError("You are unauthorized");
    }
  }
);

router.post(
  "/api/orders/confirm/:id",
  currentUser,
  RequireAuth,
  RequireAdmin,
  async (req: Request, res: Response) => {
    const id = req.params.id;
    if (id) {
      const filter = { _id: id };
      const update = { status: "confirmed" };

      try {
        Joursey.findOneAndUpdate(
          filter,
          update,
          {
            new: true,
          },
          function (err) {
            if (err) console.log(err);
          }
        );

        res.json("Updated");
      } catch (e) {
        throw new BadRequestError("Jersey not found");
      }
    } else {
      throw new BadRequestError("Invalid params");
    }
  }
);

router.post(
  "/api/orders/reject/:id",
  currentUser,
  RequireAuth,
  RequireAdmin,
  async (req: Request, res: Response) => {
    const id = req.params.id;
    if (id) {
      const filter = { _id: id };
      const update = { status: "rejected" };

      try {
        Joursey.findOneAndUpdate(
          filter,
          update,
          {
            new: true,
          },
          function (err) {
            if (err) console.log(err);
          }
        );

        res.json("Updated");
      } catch (e) {
        throw new BadRequestError("Jersey not found");
      }
    } else {
      throw new BadRequestError("Invalid params");
    }
  }
);

export { router as jourseyRouter };
