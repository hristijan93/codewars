/*
// DESCRIPTION:
// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.

// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"
// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

function toCamelCase(str){
    if (!str) return str
  
    let toArray = str.split(/[-_ ]+/)
    
    let camelized = toArray.map((el, i) => {
        if (str[0] == str[0].toUpperCase()) {
            return el[0].toUpperCase() + el.slice(1)
        } else {
            if (i == 0) {
                return el
            } else {
                return el[0].toUpperCase() + el.slice(1)
            }
        }
    })

    return camelized.join(``)
}

console.log(toCamelCase("the_Stealth_Warrior"));
console.log(toCamelCase(`Hello World!`));
*/