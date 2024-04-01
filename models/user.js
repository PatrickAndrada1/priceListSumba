import mongoose from "mongoose";
import { hashPassword, compareHash } from "../helper/bcrypt.js";
import passwordValidator from "password-validator";
const schema = new passwordValidator().min(6, "Password length minimum 6 characters")

const UserSchema = mongoose.Schema(
  {
    username: {
      type: String,
      require: true,
    },
    password: {
      type: String,
      require: true,
      minlength:[6, "Password length minimum 6 characters"],
      trim:true
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
