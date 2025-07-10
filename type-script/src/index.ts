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
console.log(gradingStudents([73, 67, 38, 33, 55]));
