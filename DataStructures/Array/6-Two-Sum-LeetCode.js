// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

function fun(A, B) {
  if (B == 0) {
    return A;
  }
  return fun(B, A % B);
}
var ans = fun(100, 2000);
console.log(ans);
