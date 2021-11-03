import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config();

export const decodeJSONWebToken = (token) => {
  return new Promise((resolve, reject) => {
    if (token === undefined) {
      resolve(undefined);
    }
    else {
    const secret = process.env.SECRET;
    const decodedToken = jwt.verify(token, secret);
    resolve(decodedToken);
  }
  })
}
