const removeFromArray = function() {
let arg = arguments.length;

// although arguments length less than 2 is not in the test, include here.
if (arg<2) {
    return "ERROR";
}

let inArr = arguments[0];
// loop through the list of elements to be removed
for (let i=1; i<arg; i++) {
    let thisElm = arguments[i];
    let idx = inArr.indexOf(thisElm);
    while (idx>-1) {
        inArr.splice(idx,1);
        idx = inArr.indexOf(thisElm);
    }
}

return inArr;
};

// Do not edit below this line
module.exports = removeFromArray;
