const arr = [1, 2, 3, "Kishore"];
console.log(arr);

//basic array methods
arr.push(4);
arr.unshift(0); // Adding element to beginning of an array
arr.pop(); //Remove an element from end of an array
arr.shift(); //Remove an element from beginning of an array
for (const item of arr) {
  console.log(item);
}

//advanced array methods { map , filter , reduce, concat, slice and splice}

//map() : Creates a new array with results of calling a function for every element
const num = [2, 4, 5, 6, 7, 8];
const newArr = num.map((x) => x * 2);
console.log(`map method returns array : ${newArr}`);

//filter() : this method returns a new array with all elements that pass the test defined by the given function
const words = [
  "java",
  "swift",
  "css",
  "javascript",
  "python",
  "ios",
  "android",
];

const longwords = words.filter((word) => word.length > 4);
console.log(longwords);

//reduce() :
