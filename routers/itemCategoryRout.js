import express from "express";
const router = express();
import ItemCategory from "../controllers/itemCategoryController.js";
import { authorization } from "../middlewares/authorization.js"

router.post("/addCategoryItem", authorization, ItemCategory.addCategoryItem);
router.get("/showCategoryItem", ItemCategory.showCategoryItem);
router.get("/getOneCategoryItem/:id", ItemCategory.getOneCategoryItem);

export default router;
