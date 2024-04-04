import CategoryVendor from "../models/categoryVendor.js";

class VendorCategory {
  // Create VendorCategory open
  static async addVendorCategory(req, res, next) {
    try {
      const { name } = req.body;
      if (!name || name.trim() === "") throw { name: "Category name is required" };
      let data = await CategoryVendor.create({ name });
      res.status(201).json({ message: `${name} category has been created` });
    } catch (error) {
      next(error);
    }
  }
  // Create VendorCategory closed

  // Get VendorCategory open
  static async showVendorCategories(req, res, next) {
    try {
      let data = await CategoryVendor.find({});
      res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  }
  // Get VendorCategory closed

  // Get one VendorCategory open
  static async showVendorCategory(req, res, next) {
    try {
      let data = await CategoryVendor.findById(req.params.id);
      res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  }
  // Get one VendorCategory closed

  // Edit Vendor Category open
  static async editVendorCategory(req, res, next) {
    try {
      const { name } = req.body;
      let data = await CategoryVendor.findById(req.params.id);
      let filter = { name: data.name };
      let updateName = {
        $set: {
          name: name,
        },
      };
      let editVendorCategory = await CategoryVendor.updateOne(
        filter,
        updateName
      );
      res
        .status(200)
        .json({ message: `${data.name} category has been edited` });
    } catch (error) {
      next(error);
    }
  }
  // Edit Vendor Category closed

  // Delete Vendor Category open
  static async deleteVendorCategory(req, res, next) {
    try {
      let data = await CategoryVendor.findById(req.params.id);
      let deleteVendorCategory = await CategoryVendor.deleteOne(data);
      res
        .status(200)
        .json({ message: `${data.name} category has been deleted` });
    } catch (error) {
      next(error);
    }
  }
  // Delete Vendor Category closed
}

export default VendorCategory;
