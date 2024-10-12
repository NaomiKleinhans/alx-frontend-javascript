// Create an instance of WeakMap
export const weakMap = new WeakMap();

// Function that tracks query counts for each endpoint
export const queryAPI = (endpoint) => {
  const count = weakMap.get(endpoint) || 0;

  // Update the count in the WeakMap
  weakMap.set(endpoint, count + 1);

  // Throw an error if the count reaches 5 or more
  if (count + 1 >= 5) {
    throw new Error('Endpoint load is high');
  }
};
