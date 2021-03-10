function getPrimes(num) {
  let array = [];
  let prime;
  for (let i = 2; i <= num - 1; i++) {
    for (let j = 2; (prime = i === j || i % j !== 0) && j <= i / 2; j++) { }
    prime && array.push(i);
  }
  return array;
}
console.log(getPrimes(5));
console.log(getPrimes(10));