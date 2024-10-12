// Function that updates the quantity of items in the map
const updateUniqueItems = (map) => {
  if (!(map instanceof Map)) {
    throw new Error('Cannot process');
  }

  // Update the quantity of items
  for (const [key, value] of map) {
    if (value === 1) {
      map.set(key, 100);
    }
  }
};

// Export the function as default
export default updateUniqueItems;
