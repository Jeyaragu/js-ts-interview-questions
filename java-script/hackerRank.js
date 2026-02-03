const calculateSeatBooking = (totalRow, seatsPerRow, ticketRate) => {
  const totalSeats = totalRow * seatsPerRow;
  let seatNumbers = [];
  let bookedSeats = [];
  let nonBookedSeats = [];
  // Finding total number of seats / odd seats
  for (let i = 1; i <= totalSeats; i++) {
    if (i % 2 !== 0) {
      bookedSeats.push(i);
    } else {
      nonBookedSeats.push(i);
    }
    seatNumbers.push(i);
  }
  let seatAllocation = [];
  for (let k = 0; k < seatNumbers.length; k = k + seatsPerRow) {
    seatAllocation.push(seatNumbers.slice(k, k + seatsPerRow));
  }
  let bookingOutLet = [];
  for (let m = 0; m < seatAllocation.length; m++) {
    let mockedSeats = [];
    if (m % 2 == 0) {
      // Odd Seats
      seatAllocation[m].forEach((seats) => {
        if (seats % 2 == 0) {
          mockedSeats.push(seats);
        } else {
          // Booked seat masked
          mockedSeats.push("*");
        }
      });
    } else {
      // Even Seats
      seatAllocation[m].forEach((seats) => {
        if (seats % 2 == 0) {
          // Booked seat masked
          mockedSeats.push("*");
        } else {
          mockedSeats.push(seats);
        }
      });
    }
    bookingOutLet.push(mockedSeats);
  }
  console.log("bookingOutLet", bookingOutLet);
  return {
    totalSeats,
    bookedSeats: bookedSeats.length,
    nonBookedSeats: nonBookedSeats.length,
  };
};
// console.log(calculateSeatBooking(4, 10, 100));

// Sort the positive number and keeping the negative number in the same place
const sortArry = (arr) => {
  // Filter only numbers
  const convertToNumbers = arr
    .filter((element) => !isNaN(Number(element)))
    .map(Number);
  // Sort the positive values
  const sortedValues = convertToNumbers
    .filter((n) => Math.sign(n) !== -1)
    .sort((a, b) => a - b);
  const result = [];
  arr.map((a, index) => {
    if (Math.sign(a) == -1) result[index] = a;
    sortedValues[index] ? result.push(sortedValues[index]) : "";
  });
  return {
    arr,
    sortedValues,
    result,
  };
};

// console.log(sortArry([3, 1, -1, 5, 2, 4, -3]));

// Find intersection of kangaroo
// x1 and x2 are the starting points of the kangaroo
// v1 and v2 are the meter per jump of the kangaroo
const findInterSection = (x1, v1, x2, v2) => {
  let jumpTime = 1;
  let movePositions_1 = new Map();
  let movePositions_2 = new Map();
  movePositions_1.set(jumpTime, x1 + v1);
  movePositions_2.set(jumpTime, x2 + v2);
  let interSectionStatus = "NO";
  while ((movePositions_1.size && movePositions_2.size) < 10000) {
    let newJumpLocation = jumpTime + 1;
    movePositions_1.set(
      newJumpLocation,
      Number(movePositions_1.get(jumpTime)) + v1
    );
    movePositions_2.set(
      newJumpLocation,
      Number(movePositions_2.get(jumpTime)) + v2
    );
    jumpTime += 1;
  }
  for (const [key, value] of movePositions_1) {
    let getJumpDistance = movePositions_2.get(key);
    if (getJumpDistance == value) {
      interSectionStatus = "YES";
      break;
    }
  }
  return interSectionStatus;
};
// console.log(findInterSection(0, 2, 4, 1));
// console.log((findInterSection(0,3,4,2)))
const kangaroo = (x1, v1, x2, v2) => {
  if (v1 === v2) return x1 === x2 ? "YES" : "NO";
  const n = (x2 - x1) / (v1 - v2);
  return n > 0 && Number.isInteger(n) ? "YES" : "NO";
};
// console.log((kangaroo(0,3,4,2)))

// Find the sum of the number
const findSumOfNumber = (n) => {
  return (n * (n + 1)) / 2;
};
// console.log(findSumOfNumber(10));

// Compare Triplets
function compareTriplets(a, b) {
  let alice = 0;
  let bob = 0;
  a.forEach((element, index) => {
    element > b[index] ? (alice += 1) : element < b[index] ? (bob += 1) : "";
  });
  return [alice, bob];
}
// console.log(compareTriplets([17, 28, 30, 1], [99, 16, 8, 1]));

// Print the ratio of possitive, negative and zero
const findRatio = (arr) => {
  const arrLength = arr.length;
  const counts = { positive: 0, negative: 0, zero: 0 };
  for (const num of arr) {
    const sign = Math.sign(num);
    if (sign === 1) counts.positive++;
    else if (sign === -1) counts.negative++;
    else counts.zero++;
  }
  const ratios = {
    positiveNumbers: counts.positive / arrLength,
    negativeNumbers: counts.negative / arrLength,
    zeroNumber: counts.zero / arrLength,
  };
  console.log(`Positive Ratio: ${ratios.positiveNumbers.toFixed(arrLength)}`);
  console.log(`Negative Ratio: ${ratios.negativeNumbers.toFixed(arrLength)}`);
  console.log(`Zero Ratio: ${ratios.zeroNumber.toFixed(arrLength)}`);
  return ratios;
};
// findRatio([1, 1, 0, -1, -2]);

function staircase(n) {
  let size = n;
  let lader = [];
  let hash = "#";
  while (size > 0) {
    lader.push(`${hash}`.padStart(n));
    console.log(`${hash}`.padStart(n));
    hash += "#";
    size -= 1;
  }
  return lader.join("\n");
}
// console.log(staircase(6));

function minMaxValue(arr) {
  arr = arr.sort((a, b) => a - b);
  const minValue = arr.slice(0, arr.length - 1).reduce((a, b) => a + b);
  const maxValue = arr.slice(1, arr.length).reduce((a, b) => a + b);
  console.log(minValue, maxValue);
}
// minMaxValue([7, 69, 2, 221, 8974])

// Find largest number count from array
function birthdayCakeCandles(candles) {
  const maxNumber = Math.max.apply(Math, candles);
  return candles.filter((candle) => candle === maxNumber).length;
}
// birthdayCakeCandles([3, 2, 1, 3]);

function timeConversion(s) {
  let [hour, minute, secondPeriod] = s.split(":");
  let period = secondPeriod.slice(-2); // Get 'AM' or 'PM'
  let second = secondPeriod.slice(0, 2); // Remove 'AM' or 'PM'

  hour = parseInt(hour);

  if (period === "AM") {
    if (hour === 12) hour = 0;
  } else {
    if (hour !== 12) hour += 12;
  }
  let hourStr = hour < 10 ? "0" + hour : hour.toString();
  return `${hourStr}:${minute}:${second}`;
}
// console.log(timeConversion('11:59:00PM'))
// console.log(timeConversion('12:40:22AM'))
// console.log(timeConversion('12:45:54PM'))

const getTotalX = (a, b) => {
  let multiplers = [];
  // Finding multiplers
  for (const index in a) {
    let multiplerIndexer = [];
    multiplerIndexer.push(a[index]);
    while (multiplerIndexer.length < 100) {
      const lastValue = multiplerIndexer.slice(-1)[0];
      const result = lastValue + a[index];
      multiplerIndexer.push(result);
    }
    multiplers.push(multiplerIndexer);
  }
  let divisors = [];
  // Finding divisors
  for (const elements of b) {
    let divisorIndexer = [];
    let startDivisor = 1;
    while (divisorIndexer.length < 100 && startDivisor <= elements) {
      elements % startDivisor == 0 ? divisorIndexer.push(startDivisor) : "";
      startDivisor++;
    }
    divisors.push(divisorIndexer.reverse());
    startDivisor = 1;
  }
  const arrayToCompareMultipler = multiplers[0]; // Taking first array
  const remainingArrayToCompareMultipler = multiplers.slice(1); // Ommiting first array
  let lcm = 0;
  // Find LCM
  for (const elementsToCompare of arrayToCompareMultipler) {
    let compareValue = 0;
    let previousIndexValue = false;
    for (const elements in remainingArrayToCompareMultipler) {
      const findElement = remainingArrayToCompareMultipler[elements].find(
        (e) => e == elementsToCompare
      );
      console.log(`Index: ${elements}`, elementsToCompare, findElement);
      if (findElement) {
        compareValue = elementsToCompare;
        previousIndexValue = true;
        console.log("coming to if block", compareValue);
        break;
      } else {
        console.log("coming to else block");
        previousIndexValue = false;
      }
    }
    lcm = compareValue;
    if (lcm > 0) break;
  }
  console.log("lcm", lcm);
  return { multiplers, divisors };
};
// console.log(getTotalX([2, 3, 4], [16, 32, 96]));

function breakingRecords(scores) {
  // const minumScore = Math.min(...scores)
  // const maximumScore = Math.max(...scores);
  let defaultMinumScore = scores[0];
  let defaultMaximumScore = scores[0];
  let minumScoreCount = 0;
  let maximumScoreCount = 0;
  let fromIndexOne = scores.slice(1);
  for (const score of fromIndexOne) {
    if (score < defaultMinumScore) {
      defaultMinumScore = score;
      minumScoreCount++;
    }
    if (score > defaultMaximumScore) {
      defaultMaximumScore = score;
      maximumScoreCount++;
    }
  }
  console.log(maximumScoreCount, minumScoreCount);
  return [maximumScoreCount, minumScoreCount];
}

// breakingRecords([3, 4, 21, 36, 10, 28, 35, 5, 24, 42])
// breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1]);

function minimumNumber(n, password) {
  // Return the minimum number of characters to make the password strong
  let minimumNumber = 0;
  !password.match(/[A-Z]/g) ? minimumNumber++ : "";
  !password.match(/[a-z]/g) ? minimumNumber++ : "";
  !password.match(/[!@#/$%/^&/*()\-/+]/g) ? minimumNumber++ : "";
  !password.match(/[0-9]/g) ? minimumNumber++ : "";
  // Calculating number of digits after the found missing conditions and it should be greater that 6
  minimumNumber + n < 6 ? minimumNumber++ : "";
  minimumNumber + n < 6 ? minimumNumber++ : "";
  return minimumNumber;
}
// console.log(minimumNumber(5, '$1234'));
// console.log(minimumNumber(5, '^e!zA'));
function checkValidString(s, firstChar, secondChar) {
  //beabeefeab
  let previousChar = "";
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === firstChar || s[i] === secondChar) {
      if (s[i] !== previousChar) {
        count++;
        previousChar = s[i];
      } else {
        return 0;
      }
    }
  }
  return count;
}

function alternate(s) {
  // Write your code here
  let distinctPair = [];
  const distinctChar = Array.from(new Set(s));
  let alternateStrMap = new Map();
  for (let i = 0; i < distinctChar.length; i = i + 1) {
    let j = i;
    while (j < distinctChar.length) {
      distinctChar[j + 1]
        ? distinctPair.push([distinctChar[i], distinctChar[j + 1]])
        : "";
      j++;
    }
  }
  for (const pair of distinctPair) {
    for (let l = 0; l < pair.length; l = l + 2) {
      const splitOriginalStr = s
        .split("")
        .filter((e) => e == pair[l] || e == pair[l + 1]);
      for (const index in splitOriginalStr) {
        if (splitOriginalStr[index - 1]) {
          if (splitOriginalStr[index] == splitOriginalStr[index - 1]) {
            alternateStrMap.set(splitOriginalStr.join(""), 0);
            break;
          } else {
            alternateStrMap.set(
              splitOriginalStr.join(""),
              splitOriginalStr.length
            );
          }
        }
      }
    }
  }
  return distinctPair.length > 0
    ? Math.max.apply(this, Array.from(alternateStrMap.values()))
    : 0;
}
// console.log(alternate('beabeefeab'));

function funnyString(s) {
  // Finding uni code of all the characters
  const strUniCode = s.split("").map((char, index) => s.charCodeAt(index));
  const differenceFn = strUniCode.map((element, index) => {
    if (strUniCode[index + 1]) {
      return strUniCode[index + 1] - element;
    }
  });
  // strUniCode.reduce((accumlator, initialValue, ) => {
  //     console.log('initialValue', initialValue, accumlator)
  //     accumlator.push(initialValue - accumlator)
  //     return accumlator;
  // }, []);
  return {
    strUniCode,
    differenceFn,
  };
}
// console.log(funnyString('acxz'))

function hackerrankInString(s) {
  const hackerrank = Array.from("hackerrank");
  const strLowercase = Array.from(s.toLowerCase());
  const hIndex = strLowercase.indexOf("h");
  let isValidString = "YES";
  if (hIndex === -1) {
    isValidString = "NO";
  } else {
    let fromIndex = 0;
    for (const char of hackerrank) {
      const findChar = strLowercase.indexOf(char, fromIndex);
      if (findChar >= 0) {
        fromIndex = findChar + 1;
      } else {
        isValidString = "NO";
        break;
      }
    }
  }
  return isValidString;
}
// console.log(hackerrankInString("hereiamstackerrank"));

function caesarCipher(s, k) {
  // Generating Alphabets
  const alphaCharCode = Array.from(Array(26)).map((item, index) => index + 65);
  const alphabet = alphaCharCode.map((item, index) =>
    String.fromCharCode(item).toLocaleLowerCase()
  );
  // If k is greater that 26 we have find the module value for rotoate the alphabet
  k > alphabet.length ? (k = k % alphabet.length) : k;
  const encryptedAlphabets = [...alphabet.slice(k), ...alphabet.slice(0, k)];
  let encryResult = [];
  for (const char of s) {
    const isSplChra = char.match(/[!``@#/$%/^&/?*().\-_/+0-9<>\[\]{}]/g);
    if (!isSplChra) {
      const getIndex = alphabet.indexOf(char);
      getIndex >= 0
        ? encryResult.push(encryptedAlphabets[getIndex])
        : encryResult.push(
            encryptedAlphabets[
              alphabet.indexOf(char.toLowerCase())
            ].toUpperCase()
          );
    } else {
      encryResult.push(char);
    }
  }
  return encryResult.join("");
}
// console.log(caesarCipher("www.abc.xy", 87));
// console.log(caesarCipher("1X7T4VrCs23k4vv08D6yQ3S19G4rVP188M9ahuxB6j1tMGZs1m10ey7eUj62WV2exLT4C83zl7Q80M", 27));
// console.log(caesarCipher("159357lcfd!", 98));
// console.log(caesarCipher("!m-rB`-oN!.W`cLAcVbN/CqSoolII!SImji.!w/`Xu`uZa1TWPRq`uRBtok`xPT`lL-zPTc.BSRIhu..-!.!tcl!-U", 62));
// console.log(caesarCipher("DNFjxo?b5h*5<LWbgs6?V5{3M].1hG)pv1VWq4(!][DZ3G)riSJ.CmUj9]7Gzl?VyeJ2dIPEW4GYW*scT8(vhu9wCr]q!7eyaoy.", 45));

function marsExploration(s) {
  let convertSos = [];
  let startIndex = 0;
  let toIndex = 3; // SOS message length is 3 so keep the toIndex as 3
  let invalidMsgCount = 0;
  while (convertSos.length < Math.round(s.length / 3)) {
    const generateSosMsg = s.slice(startIndex, toIndex);
    convertSos.push(generateSosMsg);
    startIndex += 3;
    toIndex += 3;
  }
  console.log("convertSos-", convertSos);
  return invalidMsgCount;
}
// console.log(marsExploration("SOSOOSOSOSOSOSSOSOSOSOSOSOS"));

function gemstones(arr) {
  let gemStroneCount = 0;
  // Taking first item from array to compare gems with other items
  const firstItem = new Set(arr[0]);
  let gemMap = new Map();
  for (const element of firstItem) {
    let gemStatus = [];
    for (let i = 1; i < arr.length; i++) {
      const checkGemStrone = arr[i].includes(element); // Checking whether the element available or not
      gemStatus.push(checkGemStrone);
    }
    gemMap.set(element, gemStatus);
    gemStatus = []; // Making this variable to empty for next iteration
  }
  for (const [, value] of gemMap) {
    const findGemStoneCount = value.every((e) => e === true);
    findGemStoneCount ? (gemStroneCount += 1) : "";
  }
  return gemStroneCount;
}

// console.log(gemstones(["abcdde", "baccd", "eeabg"]));

function palindromeIndex(s) {
  let startIndex = 0;
  let endIndex = s.length - 1;
  while (startIndex < endIndex) {
    if (s[startIndex] !== s[endIndex]) {
      // Check by startIndex
      let i = startIndex + 1;
      let j = endIndex;
      let isPal = true;
      while (i < j) {
        if (s[i] !== s[j]) {
          isPal = false;
          break;
        } else {
          i += 1;
          j -= 1;
        }
      }
      if (isPal) return startIndex;
      // Check for End Index
      i = startIndex;
      j = endIndex - 1;
      isPal = true;
      while (i < j) {
        if (s[i] !== s[j]) {
          isPal = false;
          break;
        } else {
          i += 1;
          j -= 1;
        }
      }
      if (isPal) return endIndex;
      return -1;
    } else {
      startIndex += 1;
      endIndex -= 1;
    }
  }
  return -1;
}
// console.log(
//   palindromeIndex("hgygsvlfcwnswtuhmyaljkqlqjjqlqkjlaymhutwsnwcwflvsgygh")
// );
function superReducedString(s) {
  let strToReduce = true;
  let strReduced = s;
  while (strToReduce) {
    // Finding two identical sequence of characters using regEx
    let repeatedSequences = strReduced.split("").join("").match(/(.)\1/g);
    if (repeatedSequences?.length > 0) {
      for (const identical of repeatedSequences) {
        strReduced = strReduced.replaceAll(identical, "");
      }
    } else {
      strToReduce = false;
    }
  }
  return strReduced.length > 0 ? strReduced : "Empty String";
}

// console.log(
//   superReducedString(
//     "acdqglrfkqyuqfjkxyqvnrtysfrzrmzlygfveulqfpdbhlqdqrrqdqlhbdpfqluevfgylzmrzrfsytrnvqyxkjfquyqkfrlacdqj"
//   )
// );

function alternatingCharacters(s) {
  let removedCount = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i + 1]) {
      removedCount += 1;
    }
  }
  return removedCount;
}
// console.log(alternatingCharacters("BABABA"));

function theLoveLetterMystery(s) {
  const strReverse = s.split("").reverse().join("");
  let reductionSet = new Set();
  let leftPointer = 0;
  let isPolindrom = false;
  if (s !== strReverse) {
    while (!isPolindrom) {
      if (s[i] !== "a" && s[i] !== "b") {
        leftPointer += 1;
      } else {
        leftPointer += 1;
      }
      const getCharCode = s[leftPointer];
    }
    // for (let i = 0; i < s.length; i++) {
    //   // Ignoring a and b because previous values wont be available after reduction of one element
    //   if (s[i] !== "a" && s[i] !== "b") {
    //     console.log(s[i], s[i].charCodeAt(0));
    //   }
    // }
    console.log(s);
  } else {
    return 0;
  }
}
console.log(theLoveLetterMystery("acde"));
