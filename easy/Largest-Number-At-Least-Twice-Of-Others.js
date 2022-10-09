/**
 *
 * You are given an integer array nums where the largest integer is unique.
 * Determine whether the largest element in the array is at least twice as much as every other number in the array. If it is, return the index of the largest element, or return -1 otherwise.
 *
 *
 *
 *Example 1:
 *
 *Input: nums = [3,6,1,0]
 *Output: 1
 *Explanation: 6 is the largest integer.
 *For every other number in the array x, 6 is at least twice as big as x.
 *The index of value 6 is 1, so we return 1.
 */
var dominantIndex = function (nums) {
  let largest = 0;
  let secondLargest = 0;

  for (var i = 0; i < nums.length; ++i) {
    if (nums[i] > largest) {
      largest = nums[i];
    }
  }

  for (var i = 0; i < nums.length; ++i) {
    if (nums[i] !== largest && nums[i] * 2 > largest) {
      return -1;
    }
  }
  return nums.indexOf(largest);
};
