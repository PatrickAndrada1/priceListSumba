import Vendor from "../models/vendor.js";
import CategoryVendor from "../models/categoryVendor.js";

class AllVendor {
  // Create Vendor open
  static async addVendor(req, res, next) {
    try {
      const { name, owner, address, phoneNum, category, top } = req.body;
      if (!name || name.trim() === "") throw { name: "name is required" };
      if (!owner || owner.trim() === "") throw { name: "owner is required" };
      if (!address || address.trim() === "")
        throw { name: "address is required" };
      if (!phoneNum || phoneNum.trim() === "")
        throw { name: "phone number is required" };
      if (!category || category.trim() === "")
        throw { name: "category is required" };
      let createVendor = await Vendor.create({
        name,
        owner,
        address,
        phoneNum,
        category,
        top
      });
      res
        .status(201)
        .json({ message: `Vendor ${createVendor.name} has been created` });
    } catch (error) {
      if (error.name === "ValidationError") {
        const message = Object.values(error.errors).map(
          (value) => value.message
        );
        return res.status(400).json({
          error: message,
        });
      }
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

  // Get one Vendor open
  static async getOneVendor(req, res, next) {
    try {
      let getOneVendor = await Vendor.findById(req.params.id);
      res.status(200).json(getOneVendor);
    } catch (error) {
      next(error);
    }
  }
  // Get one Vendor closed

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

  // Update Vendor open
  static async editVendor(req, res, next) {
    try {
      let { name, owner, address, phoneNum, category, top } = req.body;
      if (!name || name.trim() === "") throw { name: "name is required" };
      if (!owner || owner.trim() === "") throw { name: "owner is required" };
      if (!address || address.trim() === "")
        throw { name: "address is required" };
      if (!phoneNum || phoneNum.trim() === "")
        throw { name: "phone number is required" };
      if (!category || category.trim() === "")
        throw { name: "category is required" };
      let editedVendor = await Vendor.findByIdAndUpdate(
        req.params.id,
        {
          name,
          owner,
          address,
          phoneNum,
          category,
          top
        },
        { new: true, runValidators: true }
      );
      res
        .status(201)
        .json({ message: `Vendor ${editedVendor.name} has been updated` });
    } catch (error) {
      if (error.name === "ValidationError") {
        const message = Object.values(error.errors).map(
          (value) => value.message
        );
        return res.status(400).json({
          error: message,
        });
      }
      next(error);
    }
  }
  // Update Vendor closed

  // Delete Vendor open
  static async deleteOneVendor(req, res, next) {
    try {
      let data = await Vendor.findByIdAndDelete(req.params.id);
      res.status(201).json({ message: `${data.name} has been deleted` });
    } catch (error) {
      next(error);
    }
  }
  // Delete Vendor closed
}

export default AllVendor;
