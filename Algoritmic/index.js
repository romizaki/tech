function consoleLog(arr) {
  if (arr.length != 1) {
    let temp = ''
    for (let i = 0; i < arr.length; i++) {
      temp += arr[i] + ' '
    }
    console.log(temp);
  }
}

function count(arr, i ,n) {
  if (n == 0) {
    consoleLog(arr)
  }
  for (let j = 1; j < n+1; j++) {
    arr.push(j)
    count(arr, j, n-j)
    arr.pop()
  }
  return ''
}

console.log(count([], 1, 4));