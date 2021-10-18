import mongoose, { Mongoose } from "mongoose";

// An interface that describes the properties
// that are required to create a new Joursey

interface JourseyAttrs {
  user: string;
  jourseyNumber: string;
  jourseyName: string;
  paymentMethod: String;
  txId: String;
  size: String;
  sleveSize: String;
  status: String;
}

// An interface that describes the properties
// that a User Model has

interface JourseyModel extends mongoose.Model<JourseyDoc> {
  build(attrs: JourseyAttrs): JourseyDoc;
}

// An interface that describes the properties
// that a User Document has

interface JourseyDoc extends mongoose.Document {
  user: string;
  jourseyNumber: string;
  jourseyName: string;
  paymentMethod: string;
  txId: string;
  size: string;
  sleveSize: string;
  status: string;
}

// A schema for users collection

const jourseySchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Types.ObjectId,
      required: true,
      unique: true,
      ref: "User",
    },
    jourseyNumber: {
      type: String,
      required: true,
    },
    jourseyName: {
      type: String,
      required: true,
    },
    paymentMethod: {
      type: String,
      required: true,
    },
    txId: {
      type: String,
      required: true,
    },
    size: {
      type: String,
      default: "M",
    },
    sleveSize: {
      type: String,
      default: "half",
    },
    status: {
      type: String,
      default: "pending",
    },
  },
  {
    timestamps: true,
  }
);

jourseySchema.statics.build = (attrs: JourseyAttrs) => {
  return new Joursey(attrs);
};

const Joursey = mongoose.model<JourseyDoc, JourseyModel>(
  "Joursey",
  jourseySchema
);

export { Joursey };
