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

// console.log(moveZeroes([0, 1, 0, 3, 12]));

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
// console.log(isSubsequence('acb', 'ahbgdc'));
// console.log(isSubsequence('aaaaaa', 'bbaaaa'));
// console.log(isSubsequence('abc', 'ahbgdc'));

function maxArea(height: number[]): number {
  let leftPointer = 0;
  let rightPointer = height.length - 1;
  let preValu = height[0];
  while (leftPointer < rightPointer) {
    if (height[leftPointer] === height[rightPointer]) {
      leftPointer += 1;
      rightPointer -= 1;
    } else if (height[leftPointer] > height[rightPointer]) {
      rightPointer -= 1;
    } else {
      leftPointer += 1;
    }
  }
  return 0;
}

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

// console.log(maxOperations([1, 2, 3, 4], 5));
