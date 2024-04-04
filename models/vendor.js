import mongoose from "mongoose";

const VendorSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "name is required"],
    },
    owner: {
      type: String,
      required: [true, "owner is required"],
    },
    address: {
      type: String,
      required: [true, "address is required"],
    },
    phoneNum: {
      type: String,
      required: [true, "phone number is required"],
    },
    category: [
      {
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: "CategoryVendor",
      },
    ],
    top: {
      type: String,
      required: [true, "TOP is required"],
      default: "N/A",
    }
  },
  {
    timestamps: true,
  }
);

export default mongoose.model.Vendor || mongoose.model("Vendor", VendorSchema);
