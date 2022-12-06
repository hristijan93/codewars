// You are given an odd-length array of integers, in which all of them are the same, except for one single number.

// Complete the method which accepts such an array, and returns that single different number.

// The input array will always be valid! (odd-length >= 3)

// Examples
// [1, 1, 2] ==> 2
// [17, 17, 3, 17, 17, 17, 17] ==> 3
/*
function stray(numbers) {
    let dict = {};
    
    for (let x of numbers) {
        if (dict[x] !== undefined) {
            dict[x]++
        } else {
            dict[x] = 1
        }
    }

    let uniqueNum = [...Object.keys(dict)]
    let uniqueNumIndex = [...Object.values(dict)]
    let index = uniqueNumIndex.indexOf(1)    

    return +uniqueNum[index]
}

console.log(stray([1, 1, 2]));
console.log(stray([17, 17, 3, 17, 17, 17, 17]))
*/
/*
// Refactor

function stray(numbers) {
    let sorted = numbers.sort();

    if (sorted[0] != sorted[1]) {
        return sorted[0]
    } else {
        return sorted[sorted.length - 1]
    }
}

console.log(stray([1, 1, -19, 1, 1]));
console.log(stray([-5, -5, -5, 505, -5, -5]));
*/