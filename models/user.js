import mongoose from "mongoose";
import { hashPassword, compareHash } from "../helper/bcrypt.js";
import validator from "validator";
import { whiteSpaceValidator } from "../helper/passValidator.js";

const UserSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique:true
      
    },
    password: {
      type: String,
      required: true,
      validate: [
        {
          validator: whiteSpaceValidator,
          msg: "Password must not contain any whitespaces",
        },
        {
          validator: (value) => validator.isLength(value, { min: 6, max: 12 }),
          msg: "Password length must be 6-12 characters",
        },
      ],
    },
    role: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

UserSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await hashPassword(this.password);
  }
  next();
});

export default mongoose.model.User || mongoose.model("User", UserSchema);
