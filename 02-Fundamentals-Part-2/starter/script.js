"use scrict";

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
/* const luka = {
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
}; */

// for LOOP

/*
let luka = ['luka', 'javascript', true, 23, ['bincas', 'sergio', 'igor']];

const types = [];

console.log('--- ONLY STRINGS ---')
for (let i = 0; i < luka.length; i++) {
    if (typeof luka[i] !== 'string') continue;

    console.log(luka[i], typeof luka[i]);
};

<<<<<<< HEAD
console.log('--- BREAK WITH NUMBER ---')
for (let i = 0; i < luka.length; i++) {
    if (typeof luka[i] === 'number') break;

    console.log(luka[i], typeof luka[i]);
};
*/

// backward loop and loops in loops

// const luka = [
//     'Luka',
//     'Cerqueira',
//     2037 - 1991,
//     'TI Support and Designer from BUZZFUN',
//     'for sure',
//     true
// ];

// for (let i = luka.length - 1; i >= 0; i--) {
//     console.log(i, luka[i])
// };

// for (let exercise = 1; exercise <= 3; exercise++) {
//     console.log(`---------- STARTING EXERCISE ${exercise}`)

//     for (let rep = 1; rep < 6; rep++) {
//         console.log(`Lifting weight repetition ${rep}`)

//         for (let bingaboo = 1; bingaboo < 6; bingaboo++) {
//             console.log(exercise)
//         }
//     };
// };

// let rep = 1;
// while (rep <= 10) {
//     console.log(10)
//     rep++
// };

// let dice = '';

// while (dice !== 6) {
//     console.log(dice)
//     dice = Math.trunc(Math.random() * 6) + 1;
//     if (dice === 6) console.log('Loop is abound to end.')
// }
=======
luka.location = "Brasil";
luka['twitter'] = '@luka9kw';
console.log(luka);
>>>>>>> b3c11d9 (nem sei oq mudou)
