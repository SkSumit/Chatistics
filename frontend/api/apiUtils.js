export const fileExtensionValidation = ({ name }) => {
  if (name.slice(((name.lastIndexOf(".") - 1) >>> 0) + 2) !== "txt") {
    throw new TypeError("Not a text file");
  } 
};
