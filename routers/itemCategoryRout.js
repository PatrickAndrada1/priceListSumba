import express from "express";
const router = express();
import ItemCategory from "../controllers/itemCategoryController.js";

router.post("/addCategoryItem", ItemCategory.addCategoryItem);
router.get("/showCategoryItem", ItemCategory.showCategoryItem);
router.get("/getOneCategoryItem/:id", ItemCategory.getOneCategoryItem);

export default router;
