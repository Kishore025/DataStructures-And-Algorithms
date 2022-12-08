/***
 * Recursive factorial of a number contd...
 *
 * Factorial of a non-negative integer 'n' is the product of all positive
 * integers less than or equal to 'n'
 *
 * 5! = 5*4*3*2*1    5*4!
 * 4! = 4*3*2*1      4*3!
 * 3! = 3*2*1        3*2!
 * 2! = 2*1          2*1!
 * 1! = 1*1          1*0!
 * 0! = 1
 *
 *
 *
 * There is a pattern so
 * n! = n*(n-1)!
 */

const recursiveFactorial = (n) => {
  if (n == 0) {
    return 1;
  }
  return n * recursiveFactorial(n - 1);
};

console.log(recursiveFactorial(0)); //1
console.log(recursiveFactorial(1)); //1
console.log(recursiveFactorial(5)); //120

//Big-0 = O(n)
