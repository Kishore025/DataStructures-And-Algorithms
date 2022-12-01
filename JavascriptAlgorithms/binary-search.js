function recursiveBinarySearc(arr, target) {
  return search(arr, target, 0, arr.length - 1);
}
function search(arr, target, leftIndex, rightIndex) {
  if (leftIndex > rightIndex) {
    return -1;
  }
  let mid = Math.floor((leftIndex + rightIndex) / 2);
  if (target === arr[mid]) {
    return mid;
  }

  if (target < arr[mid]) {
    return search(arr, target, leftIndex, mid - 1);
  } else {
    return search(arr, target, mid + 1, rightIndex);
  }
}

console.log(recursiveBinarySearc([-5, 2, 4, 6, 10], 10));
console.log(recursiveBinarySearc([-5, 2, 4, 6, 10], 2));
console.log(recursiveBinarySearc([-5, 2, 4, 6, 10], -1));
