import mongoose from "mongoose";

const CategoryVendorSchema = mongoose.Schema(
    {
        name: {
            type: String,
            require: true
        },
    },
    {
        timestamps: true
    }
)

export default mongoose.model.CategoryVendor || mongoose.model('CategoryVendor', CategoryVendorSchema)