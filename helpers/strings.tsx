export const ucFirst = inputString => {
  if (!inputString) {
    return inputString;
  }

  return inputString[0].toUpperCase() + inputString.slice(1);
};
