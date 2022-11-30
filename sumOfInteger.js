// Debug   function getSumOfDigits that takes positive integer to calculate sum of it's digits. Assume that argument is an integer.

// Example
// 123  => 6
// 223  => 7
// 1337 => 14

function getSumOfDigits(integer) {
    let nums = String(integer).split(``);
    return nums.reduce((acc, cur) => acc + +cur, 0)
}

console.log(getSumOfDigits(123));
console.log(getSumOfDigits(223));
console.log(getSumOfDigits(1337))