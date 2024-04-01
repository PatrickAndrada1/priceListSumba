import express from "express";
const router = express();
import AllItems from "../controllers/itemController.js";

router.post("/addItem", AllItems.addItem);
router.get("/showItems", AllItems.getItems);
router.get("/getOneItem/:id", AllItems.getOneItem);
router.put("/updateOneItem/:id", AllItems.updateOneItem);
router.delete("/deleteOneItem/:id", AllItems.deleteOneItem);

export default router;
