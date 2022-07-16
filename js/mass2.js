// const logins = ['ava', 'aria', 'missi', 'loly', 'poly'];
// const loginToFind = 'missi';
// let message = '';

// for (const login of logins) {
//     if (login === loginToFind) {
//         message = `${loginToFind}- Found`;
//         break;
//     }
//     message = `${loginToFind}- Not Found`;
// }

// for (let i = 0; i < logins.length; i += 1){
//     const login = logins[i];

//     if (login === loginToFind) {
//         message = `${loginToFind}- Found`;
//         break;
//     }
//     message = `${loginToFind}- Not Found`;
//     // if (login !== loginToFind) {
//     //     message = `${loginToFind}- False`;
//     //     continue;
//     // }
//     // else {
//     //     message =`${loginToFind}- Found`
//     // }

// }

// Декларативный код (Абстракция)
// const message = logins.includes(loginToFind) ? 'да' : 'нет';
// console.log(message);

// const numbers = [51, 45, 6, 22, 78, 67, 77, 98 ]
// let smallNumber=numbers[0];
// for (const number of numbers) {
//     if (number > smallNumber) {
//         smallNumber = number;
//     }
// }

// console.log(smallNumber)

// const friends = ['mama', 'papa', 'red', 'martin'];
// let string = '';
// for (const frend of friends) {
//     string += frend + ',';

// }
// string = string.slice(0, string.length - 1);
// console.log(string);

// const string = friends.join(', ');
// console.log(string);
// console.log(friends);

const string = 'JavaScript';
const letters = string.split('');
let invertedString = '';

for (const letter of letters) {
    // if (letter === letter.toLowerCase()) {
    //     invertedString += letter.toUpperCase();
    // } else {
    //     invertedString += letter.toLowerCase();
    // }
    invertedString +=
        letter === letter.toLowerCase()
            ? letter.toUpperCase()
            : letter.toLowerCase();
}
console.log(invertedString);
