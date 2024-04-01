import CategoryItem from "../models/categoryItem.js";

class ItemCategory {
  // Create CategoryItem open
  static async addCategoryItem(req, res, next) {
    try {
      const { name } = req.body;
      let itemCategory = await CategoryItem.create({ name });
      res.status(201).json({
        message: `${itemCategory.name} category item has been created`,
      });
    } catch (error) {
      next(error);
    }
  }
  // Create CategoryItem closed

  // Get CategoryItem open
  static async showCategoryItem(req, res, next) {
    try {
      let data = await CategoryItem.find({});
      res.status(200).json({ data });
    } catch (error) {
      next(error);
    }
  }
  // Get CategoryItem closed
}

export default ItemCategory;
