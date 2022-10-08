/**
 * Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).
 * Return the running sum of nums.
 *
 *
 *
 * Example 1:
 *
 * Input: nums = [1,2,3,4]
 * Output: [1,3,6,10]
 * Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].
 *
 *
 *
 */

var runningSum = function (nums) {
  /*Sliding Window?*/

  let runningSum = 0;
  let runningSums = [];

  for (var i = 0; i < nums.length; ++i) {
    runningSum += nums[i];
    runningSums.push(runningSum);
  }

  return runningSums;
};

var sum = function (nums) {
  let sum = 0;
  nums.forEach((n) => (sum += n));
  return sum;
};
