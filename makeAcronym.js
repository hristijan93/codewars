/*
// Write function which takes a string and make an acronym of it.

// Rule of making acronym in this kata:

// split string to words by space char
// take every first letter from word in given string
// uppercase it
// join them toghether
// Eg:

// Code wars -> C, w -> C W -> CW

function toAcronym(inp){
    let arr = inp.split(` `)
    let firstLetters = [];

    arr.forEach(el => firstLetters.push(el[0]))

    return firstLetters.join(``).toUpperCase();
}

console.log(toAcronym(`Code wars`));
console.log(toAcronym(`Hello my name is Hrisitjan`));
*/