//Given 2 arrays,
//create a function that lets a user know (true/false) whether these two arrays
//contain any common items

//For Example:

// const array1 = ["a", "b", "c", "x"];
// const array2 = ["z", "y", "1"];
//should return false.

const array1 = ["a", "b", "c", "x"];
const array2 = ["z", "y", "x"];
//should return true.

function foundCommonItems(arr1, arr2) {
  var found = false;
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        console.log("found common item " + array1[i] + " " + array2[j]);
        // found = true;
        // return found;
      }
    }
  }
  console.log("Not found common item ");
}

foundCommonItems(array1, array2);
