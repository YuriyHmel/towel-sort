
module.exports = function towelSort (matrix) {
  if (arguments.length === 0) {
    return [];
  }
  let i = 0;
  let j = 1;
  let result = [];
  let answer = [];
  for (i = 0; i < matrix.length; i = i +2) {
    result.push(matrix[i]);
    if (i < matrix.length - 1) {
      result.push(matrix[i + 1].reverse());
    }
  }
  
  for (let k = 0; k < result.length; k++) {
      answer = answer.concat(result[k]);
  }
  return answer;
}
