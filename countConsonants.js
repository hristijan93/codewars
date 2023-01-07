/*
// Write a function consonantCount, consonant_count or ConsonantCount that takes a string of English-language text and returns the number of consonants in the string.

// Consonants are all letters used to write English excluding the vowels a, e, i, o, u.

function consonantCount(str) {
    let result = 0;
    let vowels = ['A', 'E', 'I', 'O', 'U', 'a', 'e', 'i', 'o', 'u', ' '];
    let letters = str.match(/[a-zA-Z]/g)

    // ovde proveruva dali letters e true ustvari zaradi izvicnikon dali ne e false
    if (!letters) return 0

    // ovde ako bukvata ne e vo array vowels go zgolemuva result za +1
    letters.forEach(l => !vowels.includes(l) ? result++ : result)

    return result;
}


console.log(consonantCount(' ')) // 0
console.log(consonantCount('aaaaa')) // 0
console.log(consonantCount('XaeiouX')) // 2
console.log(consonantCount('Bbbbb')) // 5
console.log(consonantCount('helLo world')) // 7
console.log(consonantCount('h^$&^#$&^elLo world')) // 7
*/