import express from "express";
const router = express();
import UserController from "../controllers/userController.js";

router.post("/register", UserController.register);
router.post("/login", UserController.login);
router.get("/allUsers", UserController.showAllUsers);

export default router;
