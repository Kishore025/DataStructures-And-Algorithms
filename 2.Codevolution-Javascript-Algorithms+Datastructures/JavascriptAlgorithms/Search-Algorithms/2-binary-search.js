/***
 * Problem : Given a sorted array of 'n' elements and a target element 't', find the index
 * of 't' in the array . Return -1 if the target element is not found.
 *
 * arr = [-5,2,4,6,10], t =10 -> should return 4
 * arr = [-5,2,4,6,10], t =6 -> should return 3
 * arr = [-5,2,4,6,10], t =20 -> should return -1
 *
 *
 * Solution/pseudo code
 *
 */

function binarySearch(arr, target) {
  let leftIndex = 0;
  let rightIndex = arr.length - 1;
  while (leftIndex <= rightIndex) {
    let midIndex = Math.floor((leftIndex + rightIndex) / 2);

    if (target === arr[midIndex]) {
      return midIndex;
    }

    if (target < arr[midIndex]) {
      rightIndex = midIndex - 1;
    } else {
      leftIndex = midIndex + 1;
    }
  }
  return -1;
}

console.log(binarySearch([-5, 2, 4, 6, 10], 10)); // return 4
console.log(binarySearch([-5, 2, 4, 6, 10], 6)); // return 3
console.log(binarySearch([-5, 2, 4, 6, 10], 20)); // return -1

//Big-O = O(n)
