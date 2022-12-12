/***
 * Merge Sort
 * Problem: Given an array of integers, sort the array
 * const arr = [-6,20,8,-2,4]
 *
 *  mergeSort(arr)=> should return [-6,-2,4,8,20]
 */

function mergeSort(arr) {
  //if element is 1 return array
  if (arr.length < 2) {
    return arr;
  }
  let mid = Math.floor(arr.length / 2);
  let leftArray = arr.slice(0, mid);
  let rightArray = arr.slice(mid);
  return merge(mergeSort(leftArray), mergeSort(rightArray));
}

function merge(leftArray, rightArray) {
  let sortedArray = [];
  while (leftArray.length && rightArray.length) {
    if (leftArray[0] <= rightArray[0]) {
      sortedArray.push(leftArray.shift());
    } else {
      sortedArray.push(rightArray.shift());
    }
  }
  return [...sortedArray, ...leftArray, ...rightArray];
}

const arr = [-6, -2, 4, 8, 20];
console.log(mergeSort(arr));

/**
 * Here the Big-O = O(nlogn)
 * in first part of the function we divided n into half so O(logn)
 * and in second part of the function (merge) we used while loop so O(n)
 *
 * so combined time complexity is O(nlogn)
 */
