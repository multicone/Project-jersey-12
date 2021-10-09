import mongoose, { Mongoose } from 'mongoose';
import moment from 'moment';

// An interface that describes the properties
// that are required to create a new Verification

interface PasswordResetAttrs {
  code: number;
  user: string;
}

// An interface that describes the properties
// that a User Model has

interface PasswordResetModel extends mongoose.Model<PasswordResetDoc> {
  build(attrs: PasswordResetAttrs): PasswordResetDoc;
}

// An interface that describes the properties
// that a User Document has

interface PasswordResetDoc extends mongoose.Document {
  user: string;
  code: number;
  expiresAt: Date;
  token: string;
}

// A schema for users collection

const PasswordResetSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Types.ObjectId,
      required: true,
    },
    code: {
      type: Number,
      required: true,
    },
    token: {
      type: String,
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

PasswordResetSchema.pre('save', async function (done) {
  const currentTime = Date.now();
  const expires = moment(currentTime).add(5, 'm').toDate();
  this.set('expiresAt', expires);
  done();
});

PasswordResetSchema.statics.build = (attrs: PasswordResetAttrs) => {
  return new PasswordReset(attrs);
};

const PasswordReset = mongoose.model<PasswordResetDoc, PasswordResetModel>(
  'PasswordReset',
  PasswordResetSchema
);

export { PasswordReset };
