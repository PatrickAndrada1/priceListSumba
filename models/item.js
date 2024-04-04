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
      default: 0,
    },
    gap: {
      type: Number,
      require: false,
    },
    isDownPrice: {
      type: Boolean,
      require: false,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

ItemSchema.pre("save", async function (next) {
  if (this.newPrice > 0) {
    let gap = this.oldPrice - this.newPrice;
    this.gap = gap;
    this.gap <= 0 ? (this.isDownPrice = false) : (this.isDownPrice = true);
  } else {
    this.gap = 0;
  }
  next();
});

export default mongoose.model.ItemSchema || mongoose.model("Item", ItemSchema);
