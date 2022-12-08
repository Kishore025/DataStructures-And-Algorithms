/***
 * Problem : Given an array of 'n' elements and a target element 't',find the index of
 * of 't' in the array . Return -1 if the target elements is not found.
 *
 * arr = [-5,2,10,4,6] , t=10 -> should return 2
 * arr = [-5,2,10,4,6] , t=6 -> should return 4
 * arr = [-5,2,10,4,6] , t=20 -> should return -1
 *
 */

function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (target === arr[i]) {
      return i;
    }
  }
  return -1;
}

console.log(linearSearch([-5, 2, 10, 4, 6], 10)); //return 2
console.log(linearSearch([-5, 2, 10, 4, 6], 6)); //return 4
console.log(linearSearch([-5, 2, 10, 4, 6], 20)); //return -1

//Big-O = O(n)
