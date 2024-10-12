// Function that checks if all elements in the array exist within the set
const hasValuesFromArray = (set, array) => {
  return array.every((value) => set.has(value));
};

// Export the function as default
export default hasValuesFromArray;
