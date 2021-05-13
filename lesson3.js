// Задание 1
var MAXNUM = 100;
var primes = [];

var n = 2;
while (n < MAXNUM) {
    var j = 2;
    var isPrime = true;
    while (j < n) {
        if (n % j === 0) {
            isPrime = false;
        }
        j++;
    }
    if (isPrime === true) {
        primes.push(n);
    }
    n++;
}

console.log(primes);

//Задание 2
function getNumber(min, max) {
    let number = parseInt(Math.random() * (max - min) + min);
    if (number === -0) number = 0;
    return number;
}

var basket = [
    {
        product: "pen",
        price: getNumber(50, 100)
    },
    {
        product: "pencil",
        price: getNumber(50, 100)
    },
    {
        product: "file",
        price: getNumber(50, 100)
    },
    {
        product: "paper",
        price: getNumber(50, 100)
    }
];
var basketPrice = 0;
for (var prod of basket) {
    basketPrice += prod.price;
    console.log("Товар " + prod.product + " стоит: " + prod.price);
}

console.log("Стоимость корзины: " + basketPrice + " у.е.");

//Задание 3
function countBasketPrice(basket) {
    let funBasketPrice = 0;
    for (let prod of basket) {
        funBasketPrice += prod.price;
    }
    return funBasketPrice;
}

console.log("Стоимость корзины: " + countBasketPrice(basket) + " у.е.");