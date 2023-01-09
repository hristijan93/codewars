// Complete the function that counts the number of unique consonants in a string (made up of printable ascii characters).

// Consonants are letters used in English other than "a", "e", "i", "o", "u". We will count "y" as a consonant.

// Remember, your function needs to return the number of unique consonants - disregarding duplicates. For example, if the string passed into the function reads "add", the function should return 1 rather than 2, since "d" is a duplicate.

// Similarly, the function should also disregard duplicate consonants of differing cases. For example, "Dad" passed into the function should return 1 as "d" and "D" are duplicates.

// Examples
// "add" ==> 1
// "Dad" ==> 1
// "aeiou" ==> 0
// "sillystring" ==> 7
// "abcdefghijklmnopqrstuvwxyz" ==> 21
// "Count my unique consonants!!" ==> 7

/*
function countConsonants(str) {
    let uniqueChars = new Set(str.toLowerCase());
    let consonants = [...uniqueChars].join(``).match(/[a-z]/g);
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let result = 0;

    consonants.forEach(el => vowels.includes(el) ? result : result++);

    return result;
}

console.log(countConsonants('SGsDD')) // 7
console.log(countConsonants('sillystring'))
*/