import CategoryItem from "../models/categoryItem.js";

class ItemCategory {
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

  static async showCategoryItem(req, res, next) {
    try {
      let data = await CategoryItem.find({});
      res.status(200).json({ data });
    } catch (error) {
      next(error);
    }
  }
}

export default ItemCategory;
