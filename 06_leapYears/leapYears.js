const leapYears = function(year) {
    // 1) case of divisible by 4 but not by 100
    if ((year % 4 === 0) && (year % 100 !== 0)) {
        return true;
    // 2) case divisible by 4 and 100 and 400 
    } else if ((year % 4 === 0) && (year % 100 === 0) && (year % 400 === 0)) {
        return true;
    // 3) every year not included in case 1) or 2)
    } else {
        return false;
    }

};

// Do not edit below this line
module.exports = leapYears;
