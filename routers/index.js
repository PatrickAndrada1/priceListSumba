import express from "express";
const router = express.Router();
import userRout from "./userRout.js";
import vendorCategoryRout from "./vendorCategoryRout.js";
import vendorRout from "./vendorRout.js";
import itemCategoryRout from "./itemCategoryRout.js";
import itemRout from "./itemRout.js";

router.use("/users", userRout);
router.use("/vendorCategories", vendorCategoryRout);
router.use("/vendors", vendorRout);
router.use("/itemCategories", itemCategoryRout);
router.use("/items", itemRout);

export default router;
