/**
 * 1. Two Sum
 * https://leetcode.com/problems/two-sum
 *
 * Given an array of integers, return indices of the two numbers such that they add up to a specific target.
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 *
 * Author: Hanz Luo
 * Date: 6/28/2017
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  const temp = [];
  for (let i = 0; i < nums.length; i++) {
    temp[nums[i]] = i;
  }
  for (let i = 0; i < nums.length; i++) {
    if (temp[target - nums[i]] !== undefined && i !== temp[target - nums[i]]) {
      return [i, temp[target - nums[i]]];
    }
  }
};
