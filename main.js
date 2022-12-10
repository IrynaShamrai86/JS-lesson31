//1) Можливі варіанти створення функцій:
// a) Function Declaration - декларація функції
function fullName(firstname, lastname) {
    console.log(`Hello, ${firstname} ${lastname}`);
}
fullName('Iryna', 'Shamrai');


// b) Function Expression - вираз функції
let greet = function() {
    alert(`Hello World!`);
}
greet();


// c) Arrow Function - стрілкова функція
let rectangleArea = (width, height) => width * height;
console.log(rectangleArea(20, 10));


//2) Створи функцію, яка буде виводити кількість переданих їй аргументів
function users(user1, user2, user3, user4, user5) {
}
console.log(users.length);


//3) Напиши функцію, яка приймає 2 числа і повертає :
// a) -1, якщо перше число менше, ніж друге;
// b) 1 - якщо перше число більше, ніж друге;
// c) 0 - якщо числа рівні.
function getNumbers(first, second) {
    if (first < second) {
        console.log(-1);
    }
    else if (first > second) {
        console.log(1);
    }
    else (first = second) {
        console.log(0);
    }
}
getNumbers(2, 3);


//4) Напиши функцію, яка обчислює факторіал переданого їй числа.

// let number = enterNumber(prompt('Введи число, для якого потрібно вичислити факторіал: '));
// if (number < 0) {
//     console.log('Помилка. Факторіалу для відємного числа не існує');
// }
// else if (number <= 1) {
//     console.log('Факторіал ${number} є число 1');
// }
// else {
//     console.log('Факторіал ${number} є число ${number * enterNumber(number - 1)}');
// }
//
//
// function factorialize(num) {
//     if (num < 0)
//         return -1;
//     else if (num <= 1)
//         return 1;
//     else {
//         return (num * factorialize(num - 1));
//     }
// }
// factorialize(5);


//5) Напиши функцію, яка приймає три окремі цифри і перетворює їх в одне число.
// Наприклад: цифри 1, 4, 9 перетворяться в число 149.
let x = [1,4,9]
let y = Number(x.join(''));
console.log(y);


//6) Напиши функцію, яка приймає довжину і ширину прямокутника і обчислює його площу.
// Якщо в функцію передали 1 параметр, то вона обчислює площу квадрата.
function getrectArea(width, height) {
    if (width && height >= 1)
        return width * height;
    else {
        return width * width || height * height
    }
}
let rectArea = getrectArea(20, 1);
console.log(rectArea);