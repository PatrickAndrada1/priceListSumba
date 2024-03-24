// bcrypt.js
import bcrypt from "bcryptjs";

export const hashPassword = (password) => bcrypt.hashSync(password);
export const compareHash = (password, hashedPassword) =>
  bcrypt.compareSync(password, hashedPassword);
