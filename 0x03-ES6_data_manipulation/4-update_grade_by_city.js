// Arrow function that updates student grades by city
const updateStudentGradeByCity = (students, city, newGrades) =>
  // Filter students based on the city
  students.filter((student) => student.location === city)
    .map((student) => {
      // Find the grade for the current student, or default to 'N/A'
      const gradeObj = newGrades.find(
        (grade) => grade.studentId === student.id,
      );
      // Return the updated student object with the grade
      return {
        ...student,
        grade: gradeObj ? gradeObj.grade : 'N/A',
      };
    });

// Export the arrow function as default
export default updateStudentGradeByCity;
