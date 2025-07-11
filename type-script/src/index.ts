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
