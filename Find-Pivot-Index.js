/** https://leetcode.com/problems/find-pivot-index/
 *
 *Given an array of integers nums, calculate the pivot index of this array.
 *
 *The pivot index is the index where the sum of all the numbers strictly to the left of the index is equal to the sum of all the numbers strictly to the index's right.
 *
 *If the index is on the left edge of the array, then the left sum is 0 because there are no elements to the left. This also applies to the right edge of the array.
 *
 *Return the leftmost pivot index. If no such index exists, return -1.
 *
 *
 *
 *Example 1:
 *
 *Input: nums = [1,7,3,6,5,6]
 *Output: 3
 *Explanation:
 *The pivot index is 3.
 *Left sum = nums[0] + nums[1] + nums[2] = 1 + 7 + 3 = 11
 *
 *Right sum = nums[4] + nums[5] = 5 + 6 = 11
 */
var pivotIndex = function (nums) {
  // nums = [1,7,3,6,5,6]

  let left = 0;
  let right = sum(nums);

  for (var i = 0; i < nums.length; ++i) {
    if (left === right - nums[i]) {
      return i;
    }

    left += nums[i];
    right -= nums[i];
  }

  return -1;
};

var sum = (nums) => {
  let sum = 0;
  nums.forEach((n) => (sum += n));
  return sum;
};
