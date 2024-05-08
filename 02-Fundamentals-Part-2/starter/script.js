'use scrict';


/*
const cutFruitPieces = fruit => fruit * 4;

const fruitProcessor = (apples, oranges) => {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces oranges`;

    return juice;
};

console.log(fruitProcessor(3, 8)) */

// Arrays

const luka = {
    firstName: 'Luka',
    lastName: 'Cerqueira',
    birthYear: 2001,
    job: 'Freelancer and TI Technical Support',
    girlfriend: 'Bincas',
    hasDriverLicense: false,

    calcAge: function () {
        this.age = 2024 - this.birthYear
        return this.age;

    },

    challengeTxt: function () {
        const txt = `${this.firstName} is a ${this.calcAge()} years old ${this.job}, and he `

        if (this.hasDriverLicense) {
            const finalTxt = txt + `has driver's license`
            return finalTxt
        }

        else {
            const finalTxt = txt + `has no driver's license`
            return finalTxt
        }
    },

    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()} year old ${this.job}, and he has ${this.hasDriverLicense ? 'a' : 'no'} drivers license.`
    }

    // calcAge: function () {
    //     // console.log(this)
    //     return 2024 - this.birthYear
    // }
};

console.log(luka.challengeTxt())

console.log(luka.getSummary())

// console.log(luka.calcAge())

// console.log(luka.age);
// console.log(luka.age);
// console.log(luka.calcAge());
// console.log(luka.calcAge());



// console.log(luka['calcAge'])
// console.log(luka['firstName'])
