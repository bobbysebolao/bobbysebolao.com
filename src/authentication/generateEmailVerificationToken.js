import crypto from "crypto";

export const generateEmailVerificationToken = () => {
  let token = crypto.randomBytes(16).toString('hex');
  return token;
};
