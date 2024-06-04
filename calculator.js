function sum(num1, num2) {
  return num1 + num2;
}
function difference(num1, num2) {
  return num1 - num2;
}
function product(num1, num2) {
  return num1 * num2;
}
function divide(num1, num2) {
  if (num2 == 0) {
    return "Division not possible(Dividing by 0)";
  } else {
    return num1 / num2;
  }
}

function calculator(num1, num2) {
  return {
    sum: sum(num1, num2),
    difference: difference(num1, num2),
    product: product(num1, num2),
    divide: divide(num1, num2),
  };
}
export { calculator };
