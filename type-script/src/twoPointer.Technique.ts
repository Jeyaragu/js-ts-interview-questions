//283. Move Zeroes
function moveZeroes(nums: number[]) {
  let slowPointer = 0;
  for (let fastPointer = 0; fastPointer < nums.length; fastPointer++) {
    if (nums[fastPointer] !== 0) {
      [nums[slowPointer], nums[fastPointer]] = [
        nums[fastPointer],
        nums[slowPointer],
      ];
      slowPointer++;
    }
  }
  return nums;
}

// 392. Is Subsequence
function isSubsequence(s: string, t: string): boolean {
  let s_pointer = 0;
  let t_pointer = 0;
  while (s_pointer < s.length && t_pointer < t.length) {
    if (s[s_pointer] === t[t_pointer]) {
      s_pointer += 1;
      t_pointer += 1;
    } else t_pointer += 1;
  }
  return s_pointer === s.length;
}

// 11. Container With Most Water

// Need to find the area
// Width = distance between them = j - i
// Height = minimum of the two height
// (Because water spills over the shorter line)
// Area (Water stored) =
// min(height[i], height[j]) × (j - i)

function maxArea(height: number[]): number {
  let leftPointer = 0;
  let rightPointer = height.length - 1;
  let maxWater: number = 0;
  while (leftPointer < rightPointer) {
    const findDistance = rightPointer - leftPointer;
    let minHeight = 0;
    if (height[leftPointer] === height[rightPointer]) {
      minHeight = height[leftPointer];
      leftPointer += 1;
      rightPointer -= 1;
    } else if (height[leftPointer] > height[rightPointer]) {
      minHeight = height[rightPointer];
      rightPointer -= 1;
    } else {
      minHeight = height[leftPointer];
      leftPointer += 1;
    }
    const area = minHeight * findDistance;
    maxWater = Math.max(maxWater, area);
  }
  return maxWater;
}

// 1679. Max Number of K-Sum Pairs
function maxOperations(nums: number[], k: number): number {
  let leftPointer: number = 0;
  let rightPointer: number = nums.length - 1;
  let operations: number = 0;
  nums = nums.sort((a, b) => a - b);
  while (leftPointer < rightPointer) {
    const getSum = nums[leftPointer] + nums[rightPointer];
    if (getSum === k) {
      operations += 1;
      leftPointer += 1;
      rightPointer -= 1;
    } else if (getSum > k) {
      rightPointer -= 1;
    } else {
      leftPointer += 1;
    }
  }
  return operations;
}
