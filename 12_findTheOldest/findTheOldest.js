const findTheOldest = function(people) {
    const currentyear = (new Date()).getFullYear();
    let lastAge = 0;
    let age = 0;
    let oldest = [];

    people.forEach(person => {
        let bYear = person.yearOfBirth;
        let dYear = currentyear;
        if (typeof person.yearOfDeath !== "undefined") {dYear = person.yearOfDeath}
        age = dYear - bYear + 1;
        if (age > lastAge) {
            oldest.pop();
            oldest.push(person);
            lastAge = age;
        }
    });
    return oldest[0];
};

// Do not edit below this line
module.exports = findTheOldest;
