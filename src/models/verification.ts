import mongoose, { Mongoose } from 'mongoose';
import moment from 'moment';

// An interface that describes the properties
// that are required to create a new Verification

interface VerificationAttrs {
  code: number;
  user: string;
}

// An interface that describes the properties
// that a User Model has

interface VerificationModel extends mongoose.Model<VerificationDoc> {
  build(attrs: VerificationAttrs): VerificationDoc;
}

// An interface that describes the properties
// that a User Document has

interface VerificationDoc extends mongoose.Document {
  user: string;
  code: number;
  expiresAt: Date;
}

// A schema for users collection

const verificationSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Types.ObjectId,
      required: true,
    },
    code: {
      type: Number,
      required: true,
    },
    expiresAt: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

// password hashing before save

verificationSchema.pre('save', async function (done) {
  const currentTime = Date.now();
  const expires = moment(currentTime).add(5, 'm').toDate();
  this.set('expiresAt', expires);
  done();
});

verificationSchema.statics.build = (attrs: VerificationAttrs) => {
  return new Verification(attrs);
};

const Verification = mongoose.model<VerificationDoc, VerificationModel>(
  'Verification',
  verificationSchema
);

export { Verification };
