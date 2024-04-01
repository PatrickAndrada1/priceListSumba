import mongoose from "mongoose";

const ItemSchema = mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    vendor: [
      {
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: "Vendor",
      },
    ],
    descriptions: {
      type: String,
      require: true,
    },
    category: [
      {
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: "CategoryItem",
      },
    ],
    unit: {
      type: String,
      require: true,
    },
    oldPrice: {
      type: Number,
      require: true,
    },
    newPrice: {
      type: Number,
      require: true,
    },
    gap: {
      type: Number,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model.ItemSchema || mongoose.model("Item", ItemSchema);
