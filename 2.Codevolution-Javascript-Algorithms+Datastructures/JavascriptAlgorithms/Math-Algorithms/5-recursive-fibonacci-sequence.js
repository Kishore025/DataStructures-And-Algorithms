/***
 * Recursive Fibonacci contd..
 * The Fibonacci sequence is a sequence in which each number is the sum of the two
 * preceding ones.
 *
 * if F represents a function to calculate the Fibonacci number then
 *
 * F(n) = F(n-1)+F(n-2)
 * F(0) = 0 and F(1) = 1
 *
 *
 * F(2) = F(1) + F(0)
 * F(2) = 1 + 0
 * F(2) = 1
 */

const recursiveFibonacci = (n) => {
  if (n < 2) {
    return n;
  }
  return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2);
};

console.log(recursiveFibonacci(0)); //0
console.log(recursiveFibonacci(1)); //1
console.log(recursiveFibonacci(6)); //8

//Big-O for Iterative Approach = O(n)
//Big-O for Recursive Approach = O(2^n)Horrible
