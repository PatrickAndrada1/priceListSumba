import mongoose from "mongoose";
import { hashPassword, compareHash } from "../helper/bcrypt.js";
import passwordValidator from "password-validator";
import validator from "validator"

const UserSchema = mongoose.Schema(
  {
    username: {
      type: String,
      require: true,
    },
    password: {
      type: String,
      require: true,
      validate(value) {
        if (!validator.isLength(value, { min: 6, max: 12 })) {
          throw Error("Length of the password should be between 6-12");
        }
      }

      // minlength:[6, "Password length minimum 6 characters"],
      // trim:true
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
UserSchema.pre('save', async function(next){
  schema.validate(this.password)
  next()
})

UserSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await hashPassword(this.password);
  }
  next();
});

export default mongoose.model.User || mongoose.model("User", UserSchema);
