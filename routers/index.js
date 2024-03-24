import express from "express"
const router = express.Router()
import userRout from "./userRout.js"

router.use("/users", userRout)

export default router