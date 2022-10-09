/**
 *
 * Given a number, n
 * Return an array of all prime numbers before and including (if prime) n,
 */

var nPrimes = (n) => {
  let primes = []

  for (var i = 2; i <= n; ++i){
    if (isPrime(i)){
      primes.push(i)
    }
  }
  return primes
};

var isPrime = (num) => {
  for (var i = 2; i < num; ++i) {
    if (num % i === 0){
      return false
    }
  }
  return true
};
