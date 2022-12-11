/***
 * Insertion Sort
 * Problem: Given an array of integers, sort the array
 * const arr = [-6,20,8,-2,4]
 *
 * insertionSort(arr)=> should return [-6,-2,4,8,20]
 *
 */

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let numberToinsert = arr[i];
    let prevIndex = i - 1;

    while (prevIndex >= 0 && arr[prevIndex] > numberToinsert) {
      arr[j + 1] = arr[prevIndex];
      prevIndex = prevIndex - 1;
    }
    arr[prevIndex + 1] = numberToinsert;
  }
}

const arr = [-6, -2, 4, 8, 20];
insertionSort(arr);
console.log(arr);

//Big-O = O(n^2)

//Revisit Again
