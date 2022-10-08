/**
 * Given an integer n, return a string array answer (1-indexed) where:
 *
 * answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
 * answer[i] == "Fizz" if i is divisible by 3.
 * answer[i] == "Buzz" if i is divisible by 5.
 * answer[i] == i (as a string) if none of the above conditions are true.
 *
 *
 * Example 1:
 *
 * Input: n = 3
 * Output: ["1","2","Fizz"]
 */
var fizzBuzz = function (n) {
  let array = [];
  while (n !== 0) {
    array.unshift(
      n % 3 === 0 && n % 5 === 0
        ? "FizzBuzz"
        : n % 3 === 0
        ? "Fizz"
        : n % 5 === 0
        ? "Buzz"
        : String(n)
    );
    n--;
  }
  return array;
};
