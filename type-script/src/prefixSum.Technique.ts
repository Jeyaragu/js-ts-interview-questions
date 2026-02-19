// Prefix Sum Example
function sumRange(arr: number[], left: number, right: number) {
  const sumArr = [];
  let prevSum = 0;
  for (let i = 0; i < arr.length; i++) {
    // Finding sum with current value and previous value
    prevSum += arr[i];
    // Creating new Array with sum
    sumArr.push(prevSum);
  }
  // If left point is zero we can return directly value of righ index
  // else find the difference between right value and left index - 1
  return left === 0 ? arr[right] : sumArr[right] - sumArr[left - 1];
}

// 1732. Find the Highest Altitude
function largestAltitude(gain: number[]): number {
  const cumSum = new Array(gain.length + 1);
  cumSum[0] = 0;
  let currentSum: number = 0;
  for (let i = 0; i < gain.length; i++) {
    const findIndicesSum = gain[i] + currentSum;
    cumSum[i + 1] = findIndicesSum;
    currentSum = findIndicesSum;
  }
  return Math.max.apply(null, cumSum);
}

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
// console.log(subarraySum([1, 2, 1, 2, 1], 3));

// 1588. Sum of All Odd Length Subarrays
function sumOddLengthSubarrays(arr: number[]) {
  // const prefixSum = new Array(arr.length);
  // let existingSum: number = 0;
  // for (let i = 0; i < arr.length; i++) {
  //   prefixSum[i] = existingSum + arr[i];
  //   existingSum += arr[i];
  // }
  // return prefixSum;
  let sumOfOddSubArrays: number = 0;
  for (let i = 0; i < arr.length; i++) {
  }
  return sumOfOddSubArrays;
}
// console.log(sumOddLengthSubarrays([1, 4, 2, 5, 3]));
// console.log(sumOddLengthSubarrays([10, 11, 12]));


// function sumOddLengthSubarrays(arr: number[]) {
//   const prefixSum = new Array(arr.length);
//   let existingSum: number = 0;
//   for (let i = 0; i < arr.length; i++) {
//     prefixSum[i] = existingSum + arr[i];
//     existingSum += arr[i];
//   }
//   // return prefixSum;
//   const lastOddIndice: number =
//     arr.length % 2 === 0 ? arr.length : arr.length - 1;
//   let sumOfOddSubArrays: number = 0;
//   let startOddIndex: number = 0;
//   let subArrSum: number = 0;
//   for (let i = 0; i < prefixSum.length; i++) {
//     // sumOfOddSubArrays += arr[i];
//     let cummulativeSum = 0;
//     for (let j = i; j < prefixSum.length; j++) {
//       // const subArr = arr[j + 2] ? arr[j] + arr[j + 1] + arr[j + 2] : 0;
//       console.log('----', i, j, prefixSum[j], lastOddIndice);
//       if (j <= lastOddIndice) {
//         cummulativeSum += prefixSum[j];
//       }
//     }
//     // console.log(i, cummulativeSum);
//     // console.log(i, arr[i]);
//   }
//   return sumOfOddSubArrays;
// }