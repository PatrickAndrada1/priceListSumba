import Item from "../models/item.js";

class AllItems {
  // Create one Item open
  static async addItem(req, res, next) {
    try {
      const {
        name,
        vendor,
        descriptions,
        category,
        unit,
        oldPrice,
        newPrice,
        isDownPrice,
        gap,
      } = req.body;
      if (!name || name.trim() === "") throw { name: "name is required" };
      if (!vendor || vendor.trim() === "") throw { name: "vendor is required" };
      if (!descriptions || descriptions.trim() === "")
        throw { name: "descriptions is required" };
      if (!category || category.trim() === "")
        throw { name: "category is required" };
      if (!unit || unit.trim() === "") throw { name: "unit is required" };
      if (!oldPrice) throw { name: "old price is required" };
      let newItem = await Item.create({
        name,
        vendor,
        descriptions,
        category,
        unit,
        oldPrice,
        newPrice,
        isDownPrice,
        gap,
      });
      res.status(201).json({ message: `Item ${newItem.name} has been added` });
    } catch (error) {
      next(error);
    }
  }
  // Create one Item closed

  // Get all Items open
  static async getItems(req, res, next) {
    try {
      let data = await Item.find({});
      res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  }
  // Get all Items closed

  // Get one Item open
  static async getOneItem(req, res, next) {
    let id = req.params.id;
    try {
      let data = await Item.findById(id);
      res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  }
  // Get one Item closed

  // Update one Item open
  static async updateOneItem(req, res, next) {
    let id = req.params.id;
    try {
      let {
        name,
        vendor,
        descriptions,
        category,
        unit,
        oldPrice,
        newPrice,
        isDownPrice,
        gap,
      } = req.body;
      if (!name || name.trim() === "") throw { name: "name is required" };
      if (!vendor || vendor.trim() === "")
        throw { name: "vendor name is required" };
      if (!descriptions || descriptions.trim() === "")
        throw { name: "descriptions is required" };
      if (!category || category.trim() === "")
        throw { name: "category is required" };
      if (!unit || unit.trim() === "") throw { name: "unit is required" };
      if (!oldPrice) throw { name: "old price is required" };
      let data = await Item.findByIdAndUpdate(id, {
        name,
        vendor,
        descriptions,
        category,
        unit,
        oldPrice,
        newPrice,
        isDownPrice,
        gap,
      });
      res.status(201).json({ message: `${data.name} has been updated` });
    } catch (error) {
      next(error);
    }
  }
  // Update one Item closed

  // Delete one Item open
  static async deleteOneItem(req, res, next) {
    let id = req.params.id;
    try {
      let data = await Item.findByIdAndDelete(id);
      res.status(201).json({ message: `${data.name} has been deleted` });
    } catch (error) {
      next(error);
    }
  }
  // Delete one Item open
}

export default AllItems;
