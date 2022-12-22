/***
 * Set : A set is a data structure that can be hold a collection of values.
 * The values however must be a unique.
 *
 * - Set can contain a mix of different data types .you can store strings,booleans,numbers or even objects all in the same set.
 * - Sets are dynamically sized .you dont have to declare the size of a set before creating it.
 * - Sets do not maintain a insertion order
 * - Sets are iterables.They can be used with a for of loop
 */

const set = new Set([1, 2, 3]);
set.add(4); //to add an element
set.add(4);
console.log(set.has(4)); // to check element is present or not
set.delete(3); //to remove element from set
console.log(set.size); //gives size of an set
set.clear(); //to clear the set

for (const item of set) {
  console.log(item);
}
