/**
 * 14. Longest Common Prefix
 * https://leetcode.com/problems/longest-common-prefix
 *
 * Write a function to find the longest common prefix string amongst an array of strings.
 *
 * Author: Hanz Luo
 * Date: 6/28/2017
 *
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if (strs.length === 0) return '';

  let prefix = strs[0].substr(0, 1);
  let numOfPrefix = 0;

  while (true) {
    if (strs.every((str) => str.length > numOfPrefix && str.substr(0, numOfPrefix + 1) === prefix)) {
      ++numOfPrefix;
      prefix = strs[0].substr(0, numOfPrefix + 1)
    } else {
      break;
    }
  }
  return strs[0].substr(0, numOfPrefix);
};
