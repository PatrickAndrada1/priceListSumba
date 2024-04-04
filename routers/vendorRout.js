import express from "express";
const router = express();
import AllVendor from "../controllers/vendorController.js";
import bodyParser from "body-parser";

router.post("/addVendor", bodyParser.json(), AllVendor.addVendor);
router.get("/showVendors", AllVendor.showVendors);
router.get("/showVendorsOnCategory/:id", AllVendor.showVendorsOnCategory);
router.get("/getOneVendor/:id", AllVendor.getOneVendor);
router.patch("/editVendor/:id", AllVendor.editVendor);
router.delete("/deleteVendor/:id", AllVendor.deleteOneVendor);

export default router;
