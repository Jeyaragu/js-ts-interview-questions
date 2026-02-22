// Logic Definition
// If the difference between the  and the next multiple of  is less than , round  up to the next multiple of .
// If the value of  is less than , no rounding occurs as the result will still be a failing grade.
const gradingStudents = (grades: number[]): number[] => {
  return grades.map((grade: number) => {
    if (grade < 38) return grade;
    const nextMultipleOf5 = Math.ceil(grade / 5) * 5;
    return nextMultipleOf5 - grade < 3 ? nextMultipleOf5 : grade;
  });
};
// console.log(gradingStudents([73, 67, 38, 33, 55]));

/**
 * Counts how many apples and oranges fall within the house range [s, t].
 * @param s Start of house
 * @param t End of house
 * @param a Apple tree position
 * @param b Orange tree position
 * @param apples Distances apples fall from tree
 * @param oranges Distances oranges fall from tree
 */
const countApplesAndOranges = (
  s: number,
  t: number,
  a: number,
  b: number,
  apples: number[],
  oranges: number[],
): void => {
  const appleFalls = apples.filter((apple: number) => {
    const applePosition = a + apple;
    return applePosition >= s && applePosition <= t;
  });
  console.log(appleFalls.length);
  const orangeFalls = oranges.filter((orange: number) => {
    const orangePosition = b + orange;
    return orangePosition <= t && orangePosition >= s;
  });
  console.log(orangeFalls.length);
};

// countApplesAndOranges(7, 10, 4, 12, [2, 3, -4], [3, -2, -4]);
// countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6]);

function twoSum(nums: number[], target: number): number[] {
  // for (let i = 0; i < numsSize; i++) {
  //   for (let j = i + 1; j < numsSize; j++) {
  //     if (nums[i] + nums[j] === target) {
  //       indicies.push(i, j);
  //       break;
  //     }
  //   }
  // }
  let elementMap = new Map();
  let indicies: number[] = [];
  for (let i = 0; i < nums.length; i++) {
    let currentElement = nums[i];
    // actual formula currentElement + x = target;
    // Here i am trying in the reverse way finding the x and checking whether the x is availble in the array or not
    let x = target - currentElement;
    if (elementMap.has(x)) {
      indicies.push(elementMap.get(x), i);
      break;
    } else {
      elementMap.set(currentElement, i);
    }
  }
  return indicies;
}
// console.log(twoSum([2, 7, 11, 15], 9));

// Longest Balanced Subarray I
function longestBalanced(nums: number[]): number {
  let index: number = 0;
  let oddNumbers = new Set();
  let evenNumbers = new Set();
  while (index < nums.length) {
    const findReminder = nums[index] % 2;
    // Finding odd and even numbers
    if (findReminder === 0) {
      oddNumbers.add(nums[index]);
    } else {
      evenNumbers.add(nums[index]);
    }
    index += 1;
  }
  console.log(oddNumbers, evenNumbers);
  return 0;
}

// console.log(longestBalanced([6,2]));

//  Leetcode: 762. Prime Number of Set Bits in Binary Representation -- Use Binary tree
function countPrimeSetBits(left: number, right: number): number {
  let noOfPrimeNumbers: number = 0;
  for (let i: number = left; i <= right; i++) {
    const convertBinaryStr = i.toString(2);
    let countOne: number = 0;
    for (const bin of convertBinaryStr) {
      bin === '1' ? (countOne += 1) : '';
    }
    console.log(i, convertBinaryStr, countOne);
    if (countOne % 2 === 0) {
      noOfPrimeNumbers += 1;
    }
    countOne = 0;
  }
  console.log(noOfPrimeNumbers);
  return 28;
}
// console.log(countPrimeSetBits(6, 10));
