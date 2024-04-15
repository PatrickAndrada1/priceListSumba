import User from "../models/user.js";

export const authorization = async function (req, res, next) {
  try {
    if (req.user.role === "admin") {
      next();
    } else {
      throw { name: "forbidden access" };
      // let user = await User.findById(req.params.id);
      // if (!user) {
      //   throw { name: "Data not found" };
      // }
      // if (user.id !== req.user.id) {
      //   throw { name: "forbidden access" };
      // }
      // next();
    }
  } catch (error) {
    next(error);
  }
};

// const putAuthorization = async function (req, res, next) {
//   try {
//     const { id } = req.params;
//     let user = await user.findByPk(id);
//     if (user.UserId !== req.user.id) {
//       throw { name: "forbidden access" };
//     }
//     next();
//   } catch (error) {
//     next(error);
//   }
// };

