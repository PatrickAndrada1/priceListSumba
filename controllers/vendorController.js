import Vendor from "../models/vendor.js";
import CategoryVendor from "../models/categoryVendor.js";

class AllVendor {
  // Create Vendor open
  static async addVendor(req, res, next) {
    try {
      const { name, owner, address, phoneNum, category } = req.body;
      let createVendor = await Vendor.create({
        name,
        owner,
        address,
        phoneNum,
        category,
      });

      // CategoryVendor.vendors.push(createVendor)
      // CategoryVendor.save()
      res
        .status(201)
        .json({ message: `Vendor ${createVendor.name} has been created` });
      console.log(createVendor, "<<<");
    } catch (error) {
      next(error);
    }
  }
  // Create Vendor closed

  // Get Vendors open
  static async showVendors(req, res, next) {
    try {
      let data = await Vendor.find({}); //.populate("CategoryVendor").exec();
      res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  }
  // Get Vendors closed

  // Get Vendors by Category open
  static async showVendorsOnCategory(req, res, next) {
    let id = req.params.id;
    try {
      let data = await Vendor.find({ category: id }); //.populate("CategoryVendor").exec();
      res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  }
  // Get Vendors by Category closed

  // Delete Vendor open
  static async deleteOneVendor(req, res, next) {
    try {
    } catch (error) {
      next(error);
    }
  }
  // Delete Vendor closed
}

export default AllVendor;
