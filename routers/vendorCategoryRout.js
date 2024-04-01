import express from "express";
const router = express();
import bodyParser from "body-parser";
import VendorCategory from "../controllers/vendorCategoryControllers.js";

router.get("/showVendorCategory/:id", VendorCategory.showVendorCategory);
router.put(
  "/editVendorCategory/:id",
  bodyParser.json(),
  VendorCategory.editVendorCategory
);
router.delete("/deleteVendorCategory/:id", VendorCategory.deleteVendorCategory);
router.post(
  "/addVendorCategory",
  bodyParser.json(),
  VendorCategory.addVendorCategory
);
router.get("/showVendorCategories", VendorCategory.showVendorCategories);

export default router;


// CRUD done