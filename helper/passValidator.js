export const whiteSpaceValidator = (value) => {
  if (/\s/.test(value)) {
    return false; // Return false if password contains whitespace
  }
  return true; // Return true if password is valid
};
