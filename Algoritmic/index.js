
function printVector(arr) {
  if (arr.length != 1) {
    let temp = ''
    for (let i = 0; i < arr.length; i++) {
      temp += arr[i] + ' '
    }
    console.log(temp);
  }
}

function findWays(arr, i ,n) {
  if (n == 0) {
    printVector(arr)
  }
  for (let j = 1; j < n+1; j++) {
    arr.push(j)
    findWays(arr, j, n-j)
    arr.pop()
  }
}

console.log(findWays([], 1, 4));