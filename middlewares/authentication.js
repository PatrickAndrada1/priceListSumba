import User from  "../models/user.js"
import { decodedToken } from "../helper/jwt.js";

export const authentication = async function (req, res, next) {
    try {
      const { access_token } = req.headers;
      let dataDecoded = decodedToken(access_token);
      if (!dataDecoded) {
        throw { name: "JsonWebTokenError" };
      } else {
        let data = await User.findById(dataDecoded.id);
        if (data) {
          req.user = {
            id: data.id,
            username: data.username,
            role: data.role,
            userType: data.userType
          };
          next();
        } else {
          throw { name: "invalid access" };
        }
      }
    } catch (error) {
      next(error);
    }
  };
  