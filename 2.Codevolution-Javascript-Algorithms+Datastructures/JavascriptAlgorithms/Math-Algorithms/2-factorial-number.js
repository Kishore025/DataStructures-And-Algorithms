/***
 * Factorial of a number
 * Problem: Give an integer 'n',find the factorial of that integer
 *
 * In mathematics ,the factorial of a non-negative integer 'n',denoted n!,is the product
 * of all positive integers lest than or equal to 'n'
 *
 * Factorial of zero is 1
 * factorial(4) = 4*3*2*1 =24
 * factorial(5) = 5*4*3*2*1 = 120
 *
 */

function factorial(n) {
  let result = 1;
  for (let i = 2; i < n; i++) {
    result = result * i;
  }
  return result;
}

console.log(factorial(0)); //1
console.log(factorial(1)); //1
console.log(factorial(4)); //24
console.log(factorial(5)); //120

//Big-O = O(n)
