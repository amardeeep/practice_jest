function analyzeArray(array) {
  function average(array) {
    let sum = 0;
    const length = array.length;
    for (let ele of array) {
      sum = sum + ele;
    }
    return sum / length;
  }
  let averageValue = average(array);

  function min(array) {
    let minValue = array[0];
    for (let ele of array) {
      if (minValue > ele) {
        minValue = ele;
      }
    }
    return minValue;
  }
  let minValue = min(array);
  function max(array) {
    let maxValue = array[0];
    for (let ele of array) {
      if (maxValue < ele) {
        maxValue = ele;
      }
    }
    return maxValue;
  }
  let maxvalue = max(array);
  return {
    average: averageValue,
    min: minValue,
    max: maxvalue,
    length: array.length,
  };
}
export { analyzeArray };
