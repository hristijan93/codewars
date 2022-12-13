/*

DESCRIPTION:

// A perfect number is a number in which the sum of its divisors (excluding itself) are equal to itself.

// Write a function that can verify if the given integer n is a perfect number, and return True if it is, or return False if not.

// Examples
// n = 28 has the following divisors: 1, 2, 4, 7, 14, 28

// 1 + 2 + 4 + 7 + 14 = 28 therefore 28 is a perfect number, so you should return True

// Another example:

// n = 25 has the following divisors: 1, 5, 25

// 1 + 5 = 6 therefore 25 is not a perfect number, so you should return False

function isPerfect(num) {
    if (num == 1) return false;
          // Final result of summation of divisors
          let result = 0;
   
          // find all divisors which divides 'num'
          for (let i=2; i<=Math.sqrt(num); i++)
          {
              // if 'i' is divisor of 'num'
              if (num%i==0)
              {
                  // if both divisors are same then add
                  // it only once else add both
                  if (i==(num/i))
                      result += i;
                  else
                      result += (i + num/i);
              }
          }
       
          // Add 1 to the result as 1 is also a divisor
          return (result + 1) == num;
}

console.log(isPerfect(25))
console.log(isPerfect(28))


*/