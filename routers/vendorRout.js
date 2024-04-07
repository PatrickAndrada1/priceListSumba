import express from "express";
const router = express();
import AllVendor from "../controllers/vendorController.js";
import bodyParser from "body-parser";
import { authorization } from "../middlewares/authorization.js"

router.post("/addVendor", authorization, bodyParser.json(), AllVendor.addVendor);
router.get("/showVendors", AllVendor.showVendors);
router.get("/showVendorsOnCategory/:id", AllVendor.showVendorsOnCategory);
router.get("/getOneVendor/:id", AllVendor.getOneVendor);
router.patch("/editVendor/:id", authorization, AllVendor.editVendor);
router.delete("/deleteVendor/:id", authorization, AllVendor.deleteOneVendor);

export default router;
