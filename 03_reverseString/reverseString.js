const reverseString = function(inString) {
    let revString = "";
    for (let i=(inString.length-1); i>=0; i--) {
        revString += inString[i];
    }
    return revString;
};

// Do not edit below this line
module.exports = reverseString;
