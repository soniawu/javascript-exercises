const fibonacci = function(nTh) {
    // idx is the position of the fibonacci squence user requested
    let idx = 0;

    // input is a number
    if ((typeof nTh) === "number") {
        idx = nTh
    // input is a number string
    } else if (((typeof nTh) === "string") && (!Number.isNaN(nTh))) {
        idx = Number(nTh);
    } else {
        return "OOPS";
    }
    let fibArr = [1, 1];
    if (idx < 0) return "OOPS";
    if (idx === 0) return 0;
    if (idx <= 2) return fibArr[idx-1];

    let val = 0;

    for (let i = 2; i < idx; i++) {
        val = fibArr[i-2] + fibArr[i-1];
        fibArr.push(val);
    }
    return val;
};

// Do not edit below this line
module.exports = fibonacci;
