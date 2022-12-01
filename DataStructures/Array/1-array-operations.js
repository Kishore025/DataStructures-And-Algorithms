//Simple Array
const strings = ["a", "b", "c", "d"];

//The operations can be performed are

//Accesing Array element
console.log("Accessing Array Value : " + strings[2]); //O(n)

//1.Push
strings.push("e"); //O(1)
console.log("Push Operation : " + strings);

//2.Pop
strings.pop(); //O(1)
console.log("Pop Operation : " + strings);

//3.Unshift -> to insert a new element on beginning of the array
strings.unshift("x"); //O(n)
console.log("unshift Operation : " + strings);

//4.Splice -> to insert a new element middle of the array
strings.splice(2, 0, "alien"); //O(n)
console.log("Splice Operation : " + strings);
