/*
// Make a function that receives a value, val and outputs the smallest higher number than the given value, and this number belong to a set of positive integers that have the following properties:



function nextNumb(val) { 
    if (val == 9999999999) {
        return 'There is no possible number that fulfills those requirements'
    }
    let nextNumber = val + 1;

    for (let i = 0; nextNumber > val; i++) {
        if (checkDigits(nextNumber) && checkMultipleWithThree(nextNumber) && checkOdd(nextNumber)) {
            break;
        }
        nextNumber++
    }
    return nextNumber; 
}

// they are odd
function checkOdd(n) {
    return n % 2 !== 0;
} 

// they are multiple of three
function checkMultipleWithThree(n) {
    return n % 3 == 0
}

// their digits occur only once
function checkDigits(n) {
    let arr = String(n).split(``)
    let uniqueNums = new Set(arr)

    return uniqueNums.size == arr.length
}

console.log(nextNumb(99)) // 15
*/