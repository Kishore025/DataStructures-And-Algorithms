/***
 * Quick Sort
 * Problem: Given an array of integers, sort the array
 * const arr = [-6,20,8,-2,4]
 *
 *  quickSort(arr)=> should return [-6,-2,4,8,20]
 */

function quickSort(arr) {
  //exit case for recursion
  if (arr.length < 2) {
    return arr;
  }

  //first select pivot Element
  let n = arr.length - 1;
  let pivotElement = arr[n];
  let leftArray = [];
  let rightArray = [];
  for (let i = 0; i < n; i++) {
    if (arr[i] < pivotElement) {
      leftArray.push(arr[i]);
    } else {
      rightArray.push(arr[i]);
    }
  }
  return [...quickSort(leftArray), pivotElement, ...quickSort(rightArray)]; //recursion
}

const arr = [-6, -2, 4, 8, 20];
console.log(quickSort(arr));

//Worst case = O(n^2)
//Average case = O(nlogn)
