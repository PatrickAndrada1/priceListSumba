import express from "express";
const router = express();
import bodyParser from "body-parser";
import VendorCategory from "../controllers/vendorCategoryControllers.js";
import { authorization } from "../middlewares/authorization.js";

router.get("/showVendorCategory/:id", VendorCategory.showVendorCategory);
router.put(
  "/editVendorCategory/:id",
  authorization,
  bodyParser.json(),
  VendorCategory.editVendorCategory
);
router.delete(
  "/deleteVendorCategory/:id",
  authorization,
  VendorCategory.deleteVendorCategory
);
router.post(
  "/addVendorCategory",
  authorization,
  bodyParser.json(),
  VendorCategory.addVendorCategory
);
router.get("/showVendorCategories", VendorCategory.showVendorCategories);

export default router;

// CRUD done
