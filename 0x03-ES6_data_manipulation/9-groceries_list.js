// Function that returns a map of groceries
const groceriesList = () => {
  const map = new Map();
  map.set('Apples', 10);
  map.set('Tomatoes', 10);
  map.set('Pasta', 1);
  map.set('Rice', 1);
  map.set('Banana', 5);
  return map;
};

// Export the function as default
export default groceriesList;
