import crypto from 'crypto';

const randomString = () => {
  const str = crypto.randomBytes(20).toString('hex');
  return str;
};

export { randomString };
