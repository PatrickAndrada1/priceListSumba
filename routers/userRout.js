import express from "express";
const router = express();
import UserController from "../controllers/userController.js";
import { authentication } from "../middlewares/authentication.js";
import {authorization} from "../middlewares/authorization.js"

router.post("/register", UserController.register);
router.post("/login", UserController.login);
router.use(authentication);
router.get("/allUsers", authorization, UserController.showAllUsers);
router.patch(
  "/changePassword",
  UserController.changePassword
);
router.delete("/deleteUser/:id", authorization, UserController.deleteUser)

export default router;
