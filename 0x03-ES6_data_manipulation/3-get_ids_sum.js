// Arrow function that returns the sum of all student ids
const getStudentIdsSum = (students) => {
  // Use the reduce method to sum up the ids of the students
  return students.reduce((sum, student) => sum + student.id, 0);
};

// Export the arrow function as default
export default getStudentIdsSum;
