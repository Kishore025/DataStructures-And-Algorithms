/***
 * object : An Object ia an unordered collection of key-value pairs.
 * the key must either be astring or symbol data type where as the value can be of any data type
 *
 * -To retrieve a value ,you can use the corresponding key.
 * -This can be achevied using the dot notation or bracket notation
 * -An Object is not an iterable .You ca use it with a for of loop
 *
 * Object - Big-O time complexity
 * Insert - O(1)
 * Remove - O(1)
 * Access - O(1)
 * Search - O(n)
 * Object.keys() - O(n)
 * Object.values() - O(n)
 * Object.entries() - O(n)
 */

const obj = {
  name: "Kishore",
  age: 26,
  "key-three": true,
  sayMyName: function () {
    console.log(this.name);
  },
};
obj.hobby = "Cricket";
delete obj.hobby;
console.log(obj);
console.log(obj.name); //Kishore
console.log(obj["age"]); //26
console.log(obj["key-three"]); //true
obj.sayMyName(); //Kishore

//Object.keys()  .values() .entries()
console.log(Object.keys(obj)); //displays keys in object [ 'name', 'age', 'key-three', 'sayMyName' ]
console.log(Object.values(obj)); //displays values in object [ 'Kishore', 26, true, [Function: sayMyName] ]
console.log(Object.entries(obj)); // displays all the entries of key value pair
