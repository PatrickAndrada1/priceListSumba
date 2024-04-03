import express from "express";
const router = express();
import UserController from "../controllers/userController.js";
import { authentication } from "../middlewares/authentication.js";

router.post("/register", UserController.register);
router.post("/login", UserController.login);
router.get("/allUsers", UserController.showAllUsers);
router.use(authentication)
router.patch("/changePassword", UserController.changePassword)

export default router;
