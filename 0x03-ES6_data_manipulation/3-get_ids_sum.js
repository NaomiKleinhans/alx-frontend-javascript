// Arrow function that returns the sum of all student ids
const getStudentIdsSum = (students) => students.reduce((sum, student) => sum + student.id, 0);

// Export the arrow function as default
export default getStudentIdsSum;
