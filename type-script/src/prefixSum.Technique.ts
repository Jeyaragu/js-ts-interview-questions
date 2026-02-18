// function pivotIndex(nums: number[]) {
//   let leftSum: number = 0;
//   for (let p: number = 0; p < nums.length; p++) {
//     const findRightSum = nums.slice(p + 1).reduce((a, b) => a + b, 0);
//     leftSum += nums.slice(p - 1, p).reduce((a, b) => a + b, 0);
//     const findLeftSum = p === 0 ? 0 : leftSum;
//     if (findLeftSum === findRightSum) {
//       return p;
//     }
//   }
//   return -1;
// }
// 724. Find Pivot Index
function pivotIndex(nums: number[]): number {
  const totalSum = nums.reduce((a, b) => a + b, 0);
  let leftSum = 0;
  for (let i = 0; i < nums.length; i++) {
    const rightSum = totalSum - leftSum - nums[i];
    if (leftSum === rightSum) {
      return i;
    }

    leftSum += nums[i];
  }

  return -1;
}
// console.log(pivotIndex([1, 2, 3])); //[1,3,6]
// console.log(pivotIndex([1, 7, 3, 6, 5, 6]));
// console.log(pivotIndex([2, 1, -1]));

// 303. Range Sum Query - Immutable
// 560. Subarray Sum Equals K
function subarraySum(nums: number[], k: number): number {
  let prevSum = 0;
  let subArrCount = 0;
  for (let i = 0; i < nums.length; i++) {
    // const calculateSum =  prevSum ;
    // const rightSum = totalSum - leftSum - nums[i];
    prevSum += nums[i];
    console.log(prevSum, i, nums[i]);
    if (prevSum === k) {
      subArrCount = i + 1;
      prevSum = 0;
    }
  }
  return subArrCount;
}
// console.log(subarraySum([1, 1, 1], 2));
// console.log(subarraySum([1, 2, 3], 3));
console.log(subarraySum([1, 2, 1, 2, 1], 3));
