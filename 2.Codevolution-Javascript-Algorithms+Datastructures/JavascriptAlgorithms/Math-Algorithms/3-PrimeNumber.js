/***
 * Prime Number
 * Problem: Give an natural number 'n',determine if the number is prime or not
 *
 * A prime number is a natural number greater than 1 that is not a product of two
 * smaller natural numbers.
 *
 * isPrime(5) = true (1*5 or 5*1)
 * isPrime(4) = false (1*4 or 2*2 or 4*1)
 */

function isPrime(n) {
  if (n < 2) {
    return false;
  }

  for (let i = 2; i < n; i++) {
    if (n % i == 0) {
      return false;
    }
  }

  return true;
}

console.log(isPrime(5)); //true
console.log(isPrime(4)); //false
console.log(isPrime(6)); //false

//Big-O = O(n)
//Revist the solution for further optimization
