// Function that returns a string of set values starting with a specific string
const cleanSet = (set, startString) => {
  if (typeof startString !== 'string') return '';
  const values = [...set]
    .filter((value) => value.startsWith(startString))
    .map((value) => value.slice(startString.length))
    .join('-');

  return values;
};

// Export the function as default
export default cleanSet;
