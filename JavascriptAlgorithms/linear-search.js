//Input: arr[] = {10, 20, 80, 30, 60, 50,110, 100, 130, 170}, x = 110;
const arr = [10, 20, 80, 30, 60, 50, 110, 100, 130, 170];
const key = 110;

const linearSearch = (array, key) => {
  array.forEach((element, index) => {
    if (element === key) {
      console.log("key found at : " + index);
    }
  });
};

// function linearSearch(array, key) {
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] === key) {
//       console.log("key found at : " + index);
//     }
//   }
// }
linearSearch(arr, key);
