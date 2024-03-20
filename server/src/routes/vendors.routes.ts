import { Router } from "express";
import {
  createVendor,
  getVendors,
  toggleVendorIsActive,
  updateVendor,
} from "../controller/vendors.controller.ts";

const vendorRouter = Router();

//get all vendor
vendorRouter.get("/", getVendors);

//create an vendor entry
vendorRouter.post("/", createVendor);

//update an vendor
vendorRouter.put("/", updateVendor);

//Toggle vendor is active for soft deletion
vendorRouter.put("/:custId", toggleVendorIsActive);

export default vendorRouter;
