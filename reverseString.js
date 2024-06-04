function reverseString(string) {
  let arrayI = [];
  for (let char of string) {
    arrayI.push(char);
  }
  let arrayF = [];
  for (let i = 0; i < arrayI.length; i++) {
    arrayF.push(arrayI[arrayI.length - i - 1]);
  }
  let finalString = arrayF.join("");
  return finalString;
}
export { reverseString };
