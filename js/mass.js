// const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax','popa'];
// console.table(friends);
// // const lastIndex = friends.length - 1;
// friends[2] = 'mama';
// console.table(friends);
// // console.log(lastIndex);
// Если нужно получить доступ к индексу или изменить значение
// for (let i = 0; i < friends.length ; i += 1) {
//     friends[i] += '- ok';
// }
// console.log(friends);
// (forOFF) Если не нужно получить доступ к индексу или изменить значение
// for (const friend of friends) {
//     console.log(friend);
// }


// Payment
// Посчитать общую сумму покупок в корзине
// const cart = [54, 28, 105, 70, 92, 17, 120];
// let total=0
// перебрать масив чтобы получить доступ к элементам
// сделать переменную total до цыкла так как будет не видна если объявить в цикле или после него
// каждый элемент приплюсовать к total
// for (let i = 0; i < cart.length; i += 1){
//     cart[i] = cart[i] * 1.2;
//     // добавили 20 процентов
//     total += cart[i] ;
// }
// // forOFF
// for (const value of cart) {
//     total += value;
// }
// console.log('Total:', Math.round(total));
// console.log(cart)

// Вычеслить сумму всех четных чисел

const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 11]

let total = 0;
// for (let i = 0; i < numbers.length; i += 1) {
//     const number = numbers[i];
//     // console.log(numbers[i]);
//     if (number % 2 === 0) {
//         // console.log('четное');
//         total += number;
//     }
// }


// for (const number of numbers) {
//     // console.log(number);
//     if (number % 2 !== 0) {
        
//         console.log(`${number} - No четное`);
//         total += number;
//     }
// }

for (const number of numbers) {

    if (number % 2 !== 0) {
        console.log(`${number} - Эту итерацию нужно пропустить`);
        continue;
    }
    
         console.log(`${number} - четное`);
        total += number;
    
}



console.log('Total:', Math.round(total));
// перебрать массив
// на каждой итерации проверить четное число(если четное то суммировать)