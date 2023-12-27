const palindromes = function (str) {
/*
    A palindrome is a string that is spelled 
    the same both forwards and backwards, usually without 
    considering punctuation or word breaks:
*/
let newStr = "";

for (let i = 0; i < str.length; i++) {
    let c = str[i];
    if (((c >= "A") && (c <= "Z")) || 
        ((c >= "a") && (c <= "z")) ||
        ((c >= "0") && (c <= "9"))) {
        newStr += c;
    }
}

newStr = newStr.toUpperCase();
const len = newStr.length;

// When string length is 1, it is alway a palindromes
if ((len === 0) || (len === 1)) return true;

//let rMid = 0; // middle point from the right 
let lMid = 0; // middle point from the left
let l = 0;
let r = len - 1; 

/* 
    We will start at both ends, until the middle point is met.
*/
lMid = Math.floor(len / 2);  // middle point from left is the same
//rMid = lMid + 1 + (len%2);      // middle point from right will skip the mid char 
let isPal = true;
do {
    if (newStr[l] !== newStr[r]) {isPal = false; break};
    l++;
    r--;
} while (l !== lMid);
return isPal;
}

// Do not edit below this line
module.exports = palindromes;
