// Arrow function that filters students based on their location (city)
const getStudentsByLocation = (students, city) => {
  // Use the filter method to return only students whose location matches the given city
  return students.filter((student) => student.location === city);
};

// Export the arrow function as default
export default getStudentsByLocation;
