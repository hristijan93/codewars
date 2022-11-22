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



/*
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
*/

/*
// Disemvowel Trolls
// Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

function disemvowel(str) {
  return str.replace(/[aeiou]/gi, "");
}

console.log(disemvowel("This website is for losers LOL!"))

*/

/*

// Vowel Count

// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
  let result = 0;
  let vowels = ["a", "e", "i", "o", "u"];

  for (let i = 0; i < str.length; i++) {
      if(vowels.some(el => el == str[i].toLowerCase())) {
          result++
      }
  }

  return result;
}

console.log(getCount(`HrIstijAn`))

*/
/*

// vowelOne
// Write a function that takes a string and outputs a strings of 1's and 0's where vowels become 1's and non-vowels become 0's.

// All non-vowels including non alpha characters (spaces,commas etc.) should be included.

function vowelOne(s) {
  return s.split(``).map(el => ('aeiouAEIOU'.includes(el) ? 1 : 0)).join(``)
}

console.log(vowelOne(`abceios`))


*/
/*
// Categorize New Member


// The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with an application form that will tell prospective members which category they will be placed.

// To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.

// Input
// Input will consist of a list of pairs. Each pair contains information for a single potential member. Information consists of an integer for the person's age and an integer for the person's handicap.

// Output
// Output will consist of a list of string values (in Haskell and C: Open or Senior) stating whether the respective member is to be placed in the senior or open category.


function openOrSenior(data){
  let resultArr = [];

  data.forEach(el => {
    if (el[0] >= 55 && el[1] > 7) {
      resultArr.push(`Senior`)
    } else {
      resultArr.push(`Open`)
    }
  })

  return resultArr
}

input =  [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]

console.log(openOrSenior(input))
*/
/*
// Strange Principal

// A high school has a strange principal. On the first day, he has his students perform an odd opening day ceremony:

// There are number of lockers "n" and number of students "n" in the school. The principal asks the first student to go to every locker and open it. Then he has the second student go to every second locker and close it. The third goes to every third locker and, if it is closed, he opens it, and if it is open, he closes it. The fourth student does this to every fourth locker, and so on. After the process is completed with the "n"th student, how many lockers are open?

// The task is to write a function which gets any number as an input and returns the number of open lockers after last sudent complets his activity. So input of the function is just one number which shows number of lockers and number of students. For example if there are 1000 lockers and 1000 students in school then input is 1000 and function returns number of open lockers after 1000th student completes his action.

// The given input is always an integer greater than or equal to zero that is why there is no need for validation.


function numOfOpenLockers(n){
  if (n == 0) {
    return 0;
  }
  
  let i = 1;
  let sum = 0;
  
  while ((i * i) <= n) {
    i++;
    sum++;
  }
  
  return sum;
}


console.log(numOfOpenLockers(1000))
*/
/*
// ASC Week 1 Challenge 4 (Medium #1)

// Write a function that converts any sentence into a V A P O R W A V E sentence. a V A P O R W A V E sentence converts all the letters into uppercase, and adds 2 spaces between each letter (or special character) to create this V A P O R W A V E effect.

// Note that spaces should be ignored in this case.

function vaporcode(string) {
  let toArr = string.split(``)
  let result = [];

  for (let i = 0; i < toArr.length; i++) {
      if(i == toArr.length || toArr[i] == ` `) {
      } else {
          result.push(toArr[i])
          result.push(`  `)
      }
  }
  result.splice(-1)
  return result.join(``).toUpperCase()
}

console.log(vaporcode(`Hello my name is Hristijan`))
*/
/*
// Incrementer

// Given an input of an array of digits, return the array with each digit incremented by its position in the array: the first digit will be incremented by 1, the second digit by 2, etc. Make sure to start counting your positions from 1 ( and not 0 ).

// Your result can only contain single digit numbers, so if adding a digit with its position gives you a multiple-digit number, only the last digit of the number should be returned.

function incrementer(nums) { 
  return nums.map((el, i) => {
      if (el + i + 1 <= 9) {
          return el + i + 1
      } else {
          return +String(el + i + 1)[String(el).length]
      }
  })
}

console.log(incrementer([1, 2, 3, 4, 5, 6, 7]))
*/
/*
// Largest Elements

// Write a program that outputs the top n elements from a list.

function largest(n,xs){
  let result = [];
  let sortedArr = xs.sort((a, b) => b - a)
  let i = 0;

  while (i < n) {
    result.push(xs[i])
    i++
  }

  console.log(sortedArr)
  return result.sort((a, b) => a - b)
}

console.log(largest(3, [10,9,8,7,6,9,5,4,3,2,1]))
*/
/*
// Anagram Detection

// An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

// Note: anagrams are case insensitive

// Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.


function isAnagram(test, original) {
  let testLetters = Array.from(test).sort((a, b) => a.localeCompare(b)).join(``).toLowerCase()
  let originalLetters = Array.from(original).sort((a, b) => a.localeCompare(b)).join(``).toLowerCase()

  return testLetters == originalLetters
}

console.log(isAnagram('Buckethead', 'DeathCubeK'))
*/

/*
// Sum of odd numbers

// Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)


function rowSumOddNumbers(n) {
	return Math.pow(n, 3)
}

console.log(rowSumOddNumbers(42))
*/

// In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

// Example: filter_list([1,2,'a','b']) == [1,2]

function filter_list(l) {
  return l.filter(el => typeof el == 'number')
}

console.log(filter_list([1,2,'a','b']))
