import Jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
let secret = process.env.JWT_SECRET;
let expiresIn = process.env.JWT_EXPIRES_In;

let options = {
  expiresIn: expiresIn,
};

export const createToken = (payload) => {
  return Jwt.sign(payload, secret, options);
};
export const decodedToken = (token) => {
  return Jwt.verify(token, secret, options);
};
