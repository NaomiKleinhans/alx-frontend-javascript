// Arrow function that filters students based on their location (city)
const getStudentsByLocation = (students, city) => {
  // Check if students is an array, if not return an empty array
  if (!Array.isArray(students)) {
    return [];
  }

  // Use the filter method to return only students whose location matches
  return students.filter(
    (student) => student.location.toLowerCase() === city.toLowerCase(),
  );
};

// Export the arrow function as default
export default getStudentsByLocation;
