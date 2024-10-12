// Function that creates an Int8TypedArray
const createInt8TypedArray = (length, position, value) => {
  if (position < 0 || position >= length) {
    throw new Error('Position outside range');
  }

  // Create a new ArrayBuffer and DataView
  const buffer = new ArrayBuffer(length);
  const int8View = new Int8Array(buffer);
  int8View[position] = value; // Set the value at the specified position

  return new DataView(buffer);
};

// Export the function as default
export default createInt8TypedArray;
