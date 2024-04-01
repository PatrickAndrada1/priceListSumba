import mongoose from "mongoose";

const CategoryItemSchema = mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model.CategoryItem ||
  mongoose.model("CategoryItem", CategoryItemSchema);
