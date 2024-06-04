//function to capitalize first string
function capitalize(string) {
  let array = [];
  for (let char of string) {
    array.push(char);
  }
  let firsChar = array[0];
  array[0] = firsChar.toUpperCase();
  let stringFinale = array.join("");
  return stringFinale;
}

export { capitalize };
