import User from "../models/user.js";

import { hashPassword, compareHash } from "../helper/bcrypt.js";
import { createToken, decodedToken } from "../helper/jwt.js";

class UserController {
  // Create User open
  static async register(req, res, next) {
    try {
      const { username, password } = req.body;
      if (!username) throw { name: "username is required" };
      if (!password) throw { name: "password is required" };
      const newUser = await User.create({ username, password, role: "admin" });
      res.status(201).json(newUser);
    } catch (error) {
      next(error);
    }
  }
  // Create User closed

  // Login User open
  static async login(req, res, next) {
    try {
      let { username, password } = req.body;
      if (!username) throw { name: "username is required" };
      if (!password) throw { name: "password is required" };
      let user = await User.findOne({ username: username });
      if (!user) throw { name: "InvalidCredentials" };
      let compared = compareHash(password, user.password);
      if (!compared) throw { name: "InvalidCredentials" };
      let payload = {
        id: user.id,
      };
      let access_token = createToken(payload);
      let data = {
        access_token: access_token,
        id: user.id,
        username: user.username,
        role: user.role,
        password: user.password,
      };
      res.status(200).json({ data });
    } catch (error) {
      next(error);
    }
  }
  // Login User closed

  static async showAllUsers(req,res,next){
    try {
      let data = await User.find({})
      res.status(200).json(data)
    } catch (error) {
      next(error)
    }
  }
}

export default UserController;
