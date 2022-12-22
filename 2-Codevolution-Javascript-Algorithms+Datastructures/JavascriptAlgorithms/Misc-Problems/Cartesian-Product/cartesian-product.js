/***
 * Cartesian product
 * Problem : Given two finite non-empty sets, find their cartesian product
 *
 * In Mathematics , specifically set theory , the Cartesian product od two sets A and B,
 * denoted AｘB is the set of all ordered pairs(a,b) where a is in A and b is in B
 *
 * Example:
 * const A = [1,2]
 * const B = [3,4]
 * Cartesian Product AｘB = [[1,3],[1,4],[2,3],[2,4]]
 *
 * const C = [1,2]
 * const D = [3,4,5]
 * CｘD = [[1,3],[1,4],[1,5],[2,3],[2,4],[2,5]]
 *
 */

function cartesianProduct(arr1, arr2) {
  let result = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      result.push([arr1[i], arr2[j]]);
    }
  }
  return result;
}

const arr1 = [1, 2];
const arr2 = [3, 4, 5];

console.log(cartesianProduct(arr1, arr2)); // [[1,3],[1,4],[1,5],[2,3],[2,4],[2,5]]

//Big-O = O(mn)
/**
 * because arr1 and arr2 size are different
 */
