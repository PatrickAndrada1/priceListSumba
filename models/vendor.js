import mongoose from "mongoose";

const VendorSchema = mongoose.Schema(
    {
        name: {
          type: String,
          require: true,
        },
        owner: {
          type: String,
          require: true,
        },
        address: {
          type: String,
          require: true,
        },
        phoneNum: {
          type: String,
          require: true,
        },
        category: [{
            type: mongoose.Schema.Types.ObjectId,
            require: true,
            ref: 'CategoryVendor',
        }],
      },
      {
        timestamps: true,
      }
);

export default mongoose.model.Vendor ||
  mongoose.model("Vendor", VendorSchema);
