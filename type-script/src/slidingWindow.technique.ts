// newWindowSum = oldWindowSum + element_entering- element_leaving
// 643. Maximum Average Subarray I-- Fixed window example
function findMaxAverage(nums: number[], k: number): number {
  let maxAverageValue: number = 0;
  let windowSum: number = 0;
  for (let i = 0; i < k; i++) {
    windowSum += nums[i];
  }
  maxAverageValue = windowSum;
  for (let j = k; j < nums.length; j++) {
    windowSum += nums[j] - nums[j - k];
    maxAverageValue = Math.max(maxAverageValue, windowSum);
  }
  return maxAverageValue / k;
}

// Dynamic window
// function lengthOfLongestSubstring(s) {
//   let left = 0;
//   let maxLength = 0;
//   let set = new Set();

//   for (let right = 0; right < s.length; right++) {
//     while (set.has(s[right])) {
//       set.delete(s[left]);
//       left++;
//     }

//     set.add(s[right]);
//     maxLength = Math.max(maxLength, right - left + 1);
//   }

//   return maxLength;
// }

// console.log(lengthOfLongestSubstring("abcabcbb"));

// 1456. Maximum Number of Vowels in a Substring of Given Length
function maxVowels(s: string, k: number): number {
  let left = 0;
  let maxLength = 0;
  let set = new Set();

  for (let right = 0; right < s.length; right++) {
    while (set.has(s[right])) {
      set.delete(s[left]);
      left++;
    }
    set.add(s[right]);
    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
}
