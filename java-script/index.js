// Fibonacci sequence upto nth Term
fibonacci = (max) => {
    if (max <= 0) return [];
    if (max === 1) return [0];
    let fibonacciResult = [0, 1];
    while (fibonacciResult.length < max) {
        const nextTerm = fibonacciResult.slice(-2).reduce((a, b) => a + b);
        fibonacciResult.push(nextTerm);
    }
    return fibonacciResult;
};
// console.log('Fibonacci Sequence', fibonacci(7))

// Find largest element of an array
const mixedNumericArray = ["80", "9", "a", "700", 40, 1, 5, 200];
const largestElement = mixedNumericArray
    .filter((e) => !isNaN(Number(e)))
    .map(Number)
    .sort((a, b) => a - b); // b - a -- descending order sorting
/*
console.log('SortValue', largestElement)
console.log('LargestElement', largestElement.pop());
console.log('SecondLargestElement', largestElement[largestElement.length - 2]);
console.log('MidElement', largestElement[Math.round(largestElement.length / 2)])
console.log('SmallestElement', largestElement[0]);
*/

// Find the count of each repeated elements from the array
const frequencyElements = (arr) => {
    let result = new Map();
    for (const e of arr) {
        result.set(e, (result.get(e) || 0) + 1);
    }
    return result;
};

/*
console.log(
    "FrequencyElements",
    frequencyElements([1, 1, 2, 3, 4, 4, 5, 6, 5, 7])
);
console.log(
    "FrequencyElements",
    frequencyElements(["q", "a", "q", "c", "d", "e", 1, 1, "a"])
); */

// Find duplicate elements in the array
const findDuplicates = (arr) =>
    arr.filter((item, index) => arr.indexOf(item) !== index);
// console.log('FindDuplicates', findDuplicates([1, 2, 2, 1, 11, 12, 13]));

// Given string is palindrome or not
const checkPalindrome = (str) => {
    // The regex will replace the not matched characters into empty
    const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, "");
    return cleaned.split("").reverse().join("") === cleaned;
};
// console.log('CheckPalindrome', checkPalindrome('A man, a plan, a canal, Panama'))
// console.log('CheckPalindrome', 'A man, a plan, a canal, Panama'.toLowerCase().replaceAll(' ', '').replaceAll(',', ''))

// Count Vowels
const countVowels = (str) => {
    const vowels = new Set(["a", "e", "i", "o", "u"]);
    const cleanedArray = str.toLowerCase().replace(/[^a-z0-9]/g, "");
    let count = 0;
    for (const e of cleanedArray) {
        if (vowels.has(e)) count++;
    }
    return count;
};
// console.log("CountVowels", countVowels("A man, a plan, a canal, Panama"));

// Captializing first letter from the string
const capitalizeFirstLetter = (str) => {
    return str
        .trim() // Will remove the Leading and trailing spaces
        // This splits a string by one or more whitespace characters, using a regular expression.
        .split(/\s+/) // \s matches the spaces, tab(\t) and newlines(\n), + means one or more preceding character
        .map((e) => (e ? `${e.slice(0, 1).toUpperCase()}${e.slice(1)}` : ""))
        .join(" ");
};
// console.log(
//     "CaptializeFirstLetter",
//     capitalizeFirstLetter("on   the southwest")
// );

// Bigest number of an array
const findBigestNumberOfArray = (arr) => {
    return {
        minValue: Math.min.apply(Math, arr),
        maxValue: Math.max.apply(Math, arr)
    }
};
console.log('FindBigestNumberResult', findBigestNumberOfArray([1, 4, 10, 7, 8, -1]));

// Find Sum from number string
const findSumOfAnNumber = (str) => {
    // It will replace alphapets with empty
    const filterNumber = str.replace(/[A-Za-z]/g, '');
    return filterNumber.split("").map(Number).reduce((a, b) => a + b);
}

function sortNonNegativeNumbers(arr) {
    let sortResult = [];
    let nonNegativeNumber = [];
    for (const v of arr) {
        if (Math.sign(v) == -1) {
            if (nonNegativeNumber.length > 0) {
                const sortArry = nonNegativeNumber.sort((a, b) => a - b);
                nonNegativeNumber = [];
                sortResult = [...sortResult, ...sortArry];
                sortResult.push(v);
            } else {
                sortResult.push(v);
            }
        } else {
            nonNegativeNumber.push(v)
        }
    }
    return nonNegativeNumber.length == 0 ? sortResult : nonNegativeNumber.sort((a, b) => a - b);
};