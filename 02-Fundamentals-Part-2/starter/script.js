'use scrict';


const actualYear = new Date().getFullYear();
const collegeAge = 18;


const collegeYear = function (name, birthYear) {

    const age = actualYear - birthYear;

    const collegeYear = birthYear + collegeAge;
    const yrsUntilCollege = collegeYear - actualYear;

    // Who will be born
    if (birthYear > actualYear) {

        const yrsUntilBirth = birthYear - actualYear;

        const resultText = `There are ${yrsUntilBirth} years left until ${name}'s birthday. ${name} is going to college in ${collegeYear}, there are approximately ${yrsUntilCollege} years left.`;

        return resultText;
    }
    // Who are born
    else if (age <= 18) {
        const resultText = `${name} is ${age} years old. ${name} is going to college in ${collegeYear}, there are approximately ${yrsUntilCollege} years left.`;
        return resultText;
    }
    // Who are older then 18
    else {
        const resultText = `For the people who were born in ${birthYear}, the average year that they got in the college is ${collegeYear} year`
        return resultText;
    };
};




console.log(collegeYear('Bincas', 2014));