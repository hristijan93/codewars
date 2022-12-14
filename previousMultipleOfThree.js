/*
// Given a positive integer n: 0 < n < 1e6, remove the last digit until you're left with a number that is a multiple of three.

// Return n if the input is already a multiple of three, and if no such number exists, return null, a similar empty value, or -1.

// Examples
// 1      => null
// 25     => null
// 36     => 36
// 1244   => 12
// 952406 => 9

function prevMultOfThree(n) {
    if (n % 3 === 0) {
        return n
    }

    let notDivisible = n;

    while (notDivisible % 3 !== 0) {
        notDivisible = Number(String(notDivisible).split(``).splice(0, String(notDivisible).length -1).join(``))
    }
    
    return notDivisible !== 0 ? notDivisible : null
}

console.log(prevMultOfThree(1))
console.log(prevMultOfThree(25))
console.log(prevMultOfThree(36))
console.log(prevMultOfThree(1244))
console.log(prevMultOfThree(952406))
*/