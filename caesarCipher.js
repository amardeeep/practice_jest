let smallChar = [];
let smallChars = "abcdefghijklmnopqrstuvwxyz";
for (let char of smallChars) {
  smallChar.push(char);
}
let capChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let capChar = [];
for (let char of capChars) {
  capChar.push(char);
}
let punctuations = [
  ",",
  ".",
  ":",
  " ",
  "?",
  "(",
  ")",
  "!",
  "[",
  "]",
  "{",
  "}",
  '"',
  "'",
];
function indexOf(char, array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === char) {
      return i;
    }
  }
}
function caesarCipher(string, key) {
  let cipherArray = [];
  for (let char of string) {
    if (punctuations.includes(char)) {
      cipherArray.push(char);
    } else if (char.toUpperCase() === char) {
      let indexI = indexOf(char, capChar);
      if (indexI + key < 26) {
        cipherArray.push(capChar[indexI + key]);
      } else {
        cipherArray.push(capChar[(indexI + key) % 26]);
      }
    } else if (char.toLowerCase() === char) {
      let indexI = indexOf(char, smallChar);
      if (indexI + key < 26) {
        cipherArray.push(smallChar[indexI + key]);
      } else {
        cipherArray.push(smallChar[(indexI + key) % 26]);
      }
    }
  }
  let cipherText = cipherArray.join("");
  return cipherText;
}
export { caesarCipher };
