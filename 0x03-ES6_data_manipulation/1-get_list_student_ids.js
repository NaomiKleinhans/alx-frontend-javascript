// Arrow function that returns an array of student objects
const getListStudentIds = (students) => {
  // Check if the argument is an array, if not return an empty array
  if (!Array.isArray(students)) {
    return [];
  }

  // Use map to create a new array containing only the id property from each student object
  return students.map((student) => student.id);
};

// Exporting the arrow function as default
export default getListStudentIds;
