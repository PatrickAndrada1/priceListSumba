export async function errorHandler(error, req, res, next) {
  let status = 500;
  let message = "internal server error";

  switch (error.name) {
    case "username is required":
      status = 401;
      message = "username is required";
      break;
    case "password is required":
      status = 401;
      message = "password is required";
      break;
    case "Category name is required":
      status = 401;
      message = "Category name is required";
      break;
    case "InvalidCredentials":
      status = 401;
      message = "Incorrect username/password";
      break;
    case "Invalid User":
      status = 401;
      message = "Invalid User";
      break;
    case "forbidden access":
      status = 401;
      message = "Forbidden Access";
      break;
    case "Password doesn't match":
      status = 401;
      message = "Password doesn't match";
      break;
    case "name is required":
      status = 401;
      message = "name is required";
      break;
    case "owner is required":
      status = 401;
      message = "owner is required";
      break;
    case "address is required":
      status = 401;
      message = "address is required";
      break;
    case "phone number is required":
      status = 401;
      message = "phone number is required";
      break;
    case "category is required":
      status = 401;
      message = "category is required";
      break;
    case "vendor name is required":
      status = 401;
      message = "vendor name is required";
      break;
    case "descriptions is required":
      status = 401;
      message = "descriptions is required";
      break;
    case "unit is required":
      status = 401;
      message = "unit is required";
      break;
    case "old price is required":
      status = 401;
      message = "old price is required";
      break;
    default:
      break;
  }

  res.status(status).json({ message });
  // if(error.name === "TokenExpiredError"){
  //   console.log("token abis cuk");
  // }
  console.log(error, "<< from err handler");
}
