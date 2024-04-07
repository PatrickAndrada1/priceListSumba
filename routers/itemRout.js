import express from "express";
const router = express();
import AllItems from "../controllers/itemController.js";
import { authorization } from "../middlewares/authorization.js"

router.post("/addItem", authorization, AllItems.addItem);
router.get("/showItems", AllItems.getItems);
router.get("/getOneItem/:id", AllItems.getOneItem);
router.put("/updateOneItem/:id", authorization, AllItems.updateOneItem);
router.delete("/deleteOneItem/:id", authorization, AllItems.deleteOneItem);

export default router;
