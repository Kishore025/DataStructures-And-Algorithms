// A Javascript program to
//  find if there is a zero sum subarray
const subArrayExists = (arr) => {
  const sumSet = new Set(); // Traverse through array // and store prefix sums
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]; // If prefix sum is 0 // or it is already present
    if (sum === 0 || sumSet.has(sum)) return true;
    sumSet.add(sum);
  }
  return false;
};
// Driver code
const arr = [-1, 1];
if (subArrayExists(arr)) console.log("Found a subarray with 0 sum");
else console.log("No Such Sub Array Exists!");
