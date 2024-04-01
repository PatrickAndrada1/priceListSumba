import mongoose from "mongoose";

const CategoryVendorSchema = mongoose.Schema(
    {
        name: {
            type: String,
            require: true
        },
        // vendors: [{
        //     type: mongoose.Schema.Types.ObjectId,
        //     require: true,
        //     ref: 'Vendor',
        // }],
    },
    {
        timestamps: true
    }
)

export default mongoose.model.CategoryVendor || mongoose.model('CategoryVendor', CategoryVendorSchema)