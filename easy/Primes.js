/**
 *
 * Given a number, n
 * Return an array of all prime numbers before and including (if prime) n,
 */

var nPrimes = (n) => {
  let primes = []
  for (var i = 1; i <= n; ++i){
    if (i === 1){
      primes.push(i)
      continue;
    }
    if (isPrime(i)){
      primes.push(i)
    }
  }
  return primes
};

var isPrime = (num) => {
  var isPrime = true
  for (var i = 2; i < num; ++i) {
    if (num % i === 0){
      isPrime = false
    }
  }
  return isPrime
};

console.log(nPrimes(30))
