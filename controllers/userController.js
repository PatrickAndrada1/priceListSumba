import User from "../models/user.js";

import { hashPassword, compareHash } from "../helper/bcrypt.js";
import { createToken, decodedToken } from "../helper/jwt.js";

class UserController {
  // Create User open
  static async register(req, res, next) {
    try {
      const { username, password, userType, role } = req.body;
      if (!username || username.trim() === "")
        throw { name: "username is required" };
      if (!password | (password.trim() === ""))
        throw { name: "password is required" };
      const newUser = await User.create({ username, password, userType, role });
      res.status(201).json(newUser);
    } catch (error) {
      if (error.name === "ValidationError") {
        const message = Object.values(error.errors).map(
          (value) => value.message
        );
        return res.status(400).json({
          error: message,
        });
      }
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
        userType: user.userType,
        role: user.role,
      };
      console.log(data);
      res.status(200).json({ data });
    } catch (error) {
      next(error);
    }
  }
  // Login User closed

  // Show all Users open
  static async showAllUsers(req, res, next) {
    try {
      let data = await User.find({});
      res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  }
  // Show all Users closed

  // Change password open
  static async changePassword(req, res, next) {
    try {
      let { password, newPassword } = req.body;
      if (!password || password.trim() === "")
        throw { name: "password is required" };
      if (!newPassword || newPassword.trim() === "")
        throw { name: "password is required" };
      let user = await User.findOne({ username: req.user.username });
      if (!user) throw { name: "Invalid User" };
      let compared = compareHash(password, user.password);
      if (!compared) throw { name: "Password doesn't match" };
      user.password = newPassword;
      await user.save();
      res
        .status(201)
        .json({ message: "password successfylly changed, please re-login" });
    } catch (error) {
      if (error.name === "ValidationError") {
        const message = Object.values(error.errors).map(
          (value) => value.message
        );
        return res.status(400).json({
          error: message,
        });
      }
      next(error);
    }
  }
  // Change password closed

  // Delete User open
  static async deleteUser(req, res, next) {
    try {
      let data = await User.findByIdAndDelete(id);
      res.status(201).json({ message: `User ${data.name} has been deleted` });
    } catch (error) {
      next(error);
    }
  }
  // Delete User closed
}

export default UserController;
