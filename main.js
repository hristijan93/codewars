/*
// Your task is to create a function that does four basic mathematical operations.

// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.

// Examples(Operator, value1, value2) --> output
// ('+', 4, 7) --> 11
// ('-', 15, 18) --> -3
// ('*', 5, 5) --> 25
// ('/', 49, 7) --> 7

function basicOp(operation, value1, value2) {
    return eval(value1 + operation + value2)
}

console.log(basicOp('+', 4, 7))
*/
/*
// Drone Fly-By

function flyBy(lamps, drone){
    let lampsArr = lamps.split(``)
    let lampsOn = lampsArr.map((x, i) => {
        // console.log(i)
        // console.log(drone.length)
        if (i < drone.length) {
            return x = 'o'
        } else {
            return x
        }
    })
    return lampsOn.join(``)
}

console.log(flyBy('xxxxxx', '====T'))
*/


// +1 Array 

/*
function upArray(arr){
  if (arr.length <= 0 || arr.some(el => el < 0 || el > 9)) {
    return null;
  }

  let i = arr.length -1;

  while (i >=0 && arr[i] == 9) {
    arr[i--] = 0
  }

  if (i < 0) {
    arr.unshift(1)
  } else {
    arr[i]++
  }
  return arr
}


console.log(upArray([4,3,2,5]))
*/


// Array ladder

// 8

// function invert(array) {
//   let result = array.map(el => el < 0 ? Math.abs(el) : -Math.abs(el))
//   return result
// }

// console.log(invert([-1,2,3,4,5]))


// 7

// function isSquare(arr) {
//   if (arr.length == 0) {
//     return undefined;
//   }
//   let result = arr.every(el => Math.sqrt(el) % 1 ==0)
//   return result
// }

// console.log(isSquare([1, 4, 9, 16]))


// TODO: Push code to github
// 6
// function createPhoneNumber(numbers){
//   let format = `(xxx) xxx-xxxx`;

//   for (let i = 0; i < numbers.length; i++) {
//     format = format.replace(`x`, numbers[i])
//   }

//   return format
// }

// console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))

// 7

// function number(arr) {
//   let result = arr.map((el, i) => {
//     return `${i + 1}: ${el}`
//   })

//   return result
// }

// console.log(number(['a', 'b', 'c']))
// console.log(number([]))


// 8

// function getAverage(marks){
//   return Math.trunc(marks.reduce((acc, current) => acc + current, 0) / marks.length)
// }

// console.log(getAverage([1,5,87,45,8,8]))



// String ladder

// 8
// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!

// function areYouPlayingBanjo(name) {
//   return name[0] == `r` || name[0] == `R` ? name + " plays banjo" : name + " does not play banjo"
// }

// console.log(areYouPlayingBanjo(`Hristijan`))

// 7
// When provided with a String, capitalize all vowels

// For example:

// Input : "Hello World!"

// Output : "HEllO WOrld!"

// Note: Y is not a vowel in this kata.

// function swap(string) {
//   let vowels = ['a', 'e', 'i', 'o', 'u']
//   let strArr = string.split(``)

//   let result = strArr.map(el => {
//       if(vowels.includes(el)) {
//           return el.toUpperCase()
//       } else {
//           return el
//       }
//   })

//   return result.join(``)
// }

// console.log(swap(`Hello World!`))

// 6

// You will be given a number and you will need to return it as a string in Expanded Form. For example:

// expandedForm(12); // Should return '10 + 2'

// function expandedForm(num) {
//   let numArr = String(num)
//                   .split(``)
//                   .map((num, index, arr) => num + "0".repeat(arr.length - index - 1))
//                   .filter((num) => Number(num) != 0)
//                   .join(` + `)

//   return numArr
// }

// console.log(expandedForm(1024))

// 7
// Write a program to determine if a string contains only unique characters. Return true if it does and false otherwise.

// The string may contain any of the 128 ASCII characters. Characters are case-sensitive, e.g. 'a' and 'A' are considered different characters.

// function hasUniqueChars(str){
//   let unique = new Set(str)
//   return unique.size === str.length
// }

// console.log(hasUniqueChars(`Hello world`))

// 8

// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

// function removeExclamationMarks(s) {
//   return s.replace(/!/g, "");
// }

// console.log(removeExclamationMarks(`Hello W!!orld!`))




// FizzBuzz

// Return an array containing the numbers from 1 to N, where N is the parametered value.

// Replace certain values however if any of the following conditions are met:

// If the value is a multiple of 3: use the value "Fizz" instead
// If the value is a multiple of 5: use the value "Buzz" instead
// If the value is a multiple of 3 & 5: use the value "FizzBuzz" instead

function fizzbuzz(n){
  let resultArr = [];

  for (let i = 1; i <= n; i++) {
      if (i % 15 == 0) {
          resultArr.push(`FizzBuzz`)
      } else if (i % 5 == 0) {
          resultArr.push(`Buzz`)
      } else if (i % 3 ==0) {
          resultArr.push(`Fizz`)
      } else {
          resultArr.push(i)
      }        
  }
  
  return resultArr;
}

console.log(fizzbuzz(15))