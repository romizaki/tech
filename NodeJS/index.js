function getPrimes(num) {
  let result = []
  for (let i = 2; i < num; i++) {
    if ((i % 2 !== 0 && i % 3 !== 0) || i == 2 || i == 3 ) {
      result.push(i)
    }
  }
  return result
}

console.log(getPrimes(5))
console.log(getPrimes(10))