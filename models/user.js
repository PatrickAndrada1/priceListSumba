import mongoose from "mongoose";
import { hashPassword, compareHash } from "../helper/bcrypt.js";
import validator from "validator";
import { passwordValidator } from "../middlewares/passValidator.js";

const UserSchema = mongoose.Schema(
  {
    username: {
      type: String,
      require: true,
    },
    password: {
      type: String,
      require: true,
      validate: [
        {
          validator: passwordValidator,
          msg: "Password must not contain any whitespaces",
        },
        {
          validator: (value) => validator.isLength(value, { min: 6, max: 12 }),
          msg: "Length of the password should be between 6-12",
        },
      ],
    },
    role: {
      type: String,
      require: true,
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
