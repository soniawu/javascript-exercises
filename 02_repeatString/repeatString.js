const repeatString = function(inString, num) {
    // return Error if num is a negative number
    if (num<0) return "ERROR";

    //handle normal condition
    let builtString ="";
    for (let i=1; i<=num; i++) {
        builtString += inString;
    }
    return builtString;
};

// Do not edit below this line
module.exports = repeatString;
