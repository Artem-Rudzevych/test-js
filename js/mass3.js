// const title = 'Нужно сшить этот тексть с помощью тире';
// // Дикларативный код
// const slug = title.toLowerCase().split(' ').join('-');

// console.log(slug);

// const array1 = [1, 2, 3, 4, 5];
// const array2 = [1, 2, 3];
// const numbers = array1.concat(array2);

// let total = 0;

// for (const number of numbers) {
//     total += number;
// }

// console.log(total);
// console.log(numbers);

const card = ['Card-1', 'Card-2', 'Card-3', 'Card-4', 'Card-5'];

console.table(card);

const cardToRemuve = 'Card-2';
const index = card.indexOf(cardToRemuve);
console.log(index);

card.splice(index, 1);
console.table(card);

const cardToInsert = 'Card-2_new';
const indexN = 1;
card.splice(indexN, 0, cardToInsert);
console.table(card);

const cardToInsertNew = 'Card-2-NEW';
card.splice(1, 1, cardToInsertNew);
console.table(card);
