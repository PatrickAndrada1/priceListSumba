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
    // case "ValidationError":
    //   status = 401;
    //   message = error.errors.ValidatorError
    //   break;

    default:
      break;
  }

  res.status(status).json({ message });
  // if(error.name === "TokenExpiredError"){
  //   console.log("token abis cuk");
  // }
  console.log(error, "<< from err handler");
}
