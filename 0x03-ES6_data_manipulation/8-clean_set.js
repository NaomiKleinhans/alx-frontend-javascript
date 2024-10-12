// Function that returns a string of set values starting with a specific string
const cleanSet = (set, startString) => {
  // Check if startString is not a string or is undefined
  if (typeof startString !== 'string') return '';

  // Convert set to an array, filter, map, and join values
  const values = [...set]
    .filter(
      (value) => typeof value === 'string' && value.startsWith(startString)
    )
    .map((value) => value.slice(startString.length))
    .join('-');

  return values;
};

// Export the function as default
export default cleanSet;
