/***
 * Array - Big-O time complexity
 *
 * Insert/remove from end - O(1)
 * Insert/remove from beginning - O(n)
 * Access - O(1)
 * Search - O(n)
 * push/pop - O(1)
 * Shift/unshift/concat/slice/splice - O(n)
 * forEach/map/filter/reduce - O(n)
 */

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

//reduce() : this method executes a reducer function on each element of the array and returns a singlr value
const numbers = [1, -1, 2, 3];
const sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
});
console.log(`Reduce method return the sum value of number is ${sum}`);

//concat()
const fName = "Kishore";
const lName = "Kumar";

const fullName = fName.concat(" " + lName);
console.log(fullName);

//slice() : method returns a new array containing a portion of the array on which it is implemented. The original remains unchanged.
var array = [1, 2, 3, 45, 6, 7];
const newArray = array.slice(1, 4);
console.log(newArray);

//splice() :
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi");
console.log(fruits);
