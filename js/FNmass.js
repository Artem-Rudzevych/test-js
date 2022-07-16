// Payment
// Посчитать общую сумму покупок в корзине
const cards = function (items) {
    let total = 0;
    // перебрать масив чтобы получить доступ к элементам
    // сделать переменную total до цыкла так как будет не видна если объявить в цикле или после него
    // каждый элемент приплюсовать к total
    // for (let i = 0; i < carts.length; i += 1) {
    //     carts[i] = carts[i] * 1.2;
    //     // добавили 20 процентов
    //     total += carts[i];
    // }
    // forOFF
    for (const value of items) {
        total += Math.round(value);
    }
    return total;
    // console.log('Total:', Math.round(total));
    // console.log(cart);
};

console.log(cards([54, 28, 105, 70, 92, 17, 120]));
console.log(cards([54, 28, 105, 70, 92, 17]));
console.log(cards([54, 28, 105, 70, 92]));
