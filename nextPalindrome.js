/*
function nextPal(val) {
    let palindrome = val + 1;

    while(!palCheck(palindrome)) {
        palindrome++;
    }

    return palindrome;
}

function palCheck(num) {
    return +String(num).split(``).reverse().join(``) == num;
}

console.log(nextPal(11)) // 22
console.log(nextPal(188)) // 191
console.log(nextPal(191)) // 202
console.log(nextPal(2541)) // 2552
*/