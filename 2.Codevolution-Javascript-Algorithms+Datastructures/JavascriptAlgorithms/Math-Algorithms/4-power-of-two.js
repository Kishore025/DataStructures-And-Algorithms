/***
 * Power of Two
 * Problem : Give a positive number "n",determine if the number is power of 2 or not
 *
 * An integer is a power of two if there exists an integer "x" such that 'n' === 2^x
 *
 * isPowerOfTwo(1) = true (2⁰)
 * isPowerOfTwo(1) = true (2¹)
 * isPowerofTwo(5) = false
 *
 *
 *
 *
 * Power of Two  - pseudocode
 * n=8
 * 8/2 = 4 (remainder 0)
 * 4/2 = 2 (remainder 0)
 * 2/2 = 1 (remainder 0)
 *
 * Solution 1:
 * if remainder is not 0 in any step, 'n' is not a power of two
 * if remainder is 0 and 'n' comes down to 1 eventually , n is a power of two
 *
 * Solution 2:
 * Using Bitwise Operator
 *
 */
console.log("-------Sol1---------");
//Sol1 :
const isPowerOfTwo = (n) => {
  if (n < 1) {
    return false;
  }

  while (n > 1) {
    if (n % 2 !== 0) {
      return false;
    }
    n = n / 2;
  }
  return true;
};

console.log(isPowerOfTwo(1)); //true (2⁰)
console.log(isPowerOfTwo(2)); //true (2¹)
console.log(isPowerOfTwo(5)); //false

//Big-O = O(logn) because we reduced n by half

console.log("-------Sol2---------");

//Sol2 :
const isPowerOfTwoBitwise = (n) => {
  if (n < 1) {
    return false;
  }
  return (n & (n - 1)) === 0;
};

console.log(isPowerOfTwoBitwise(1)); //true (2⁰)
console.log(isPowerOfTwoBitwise(2)); //true (2¹)
console.log(isPowerOfTwoBitwise(5)); //false

//Big-O = O(1)
