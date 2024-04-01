import express from "express"
const router = express()
import AllVendor from "../controllers/vendorController.js";
import bodyParser from "body-parser";

router.post(
  "/addVendor",
  bodyParser.json(),
  AllVendor.addVendor
);

router.get("/showVendors", AllVendor.showVendors)
router.get("/showVendorsOnCategory/:id", AllVendor.showVendorsOnCategory)

export default router;