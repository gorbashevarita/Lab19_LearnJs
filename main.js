 for (let i = 0; i < 5; i++) {
     console.log(i);
 }
let sum = 0;
for (let i = 1; i <= 10; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
    sum += i;
}
console.log(sum);
let count = 0;
while (count < 3) {
    console.log("Count:", count)
    count++;
}
let number = 5;
while (number > 0) {
    console.log("Number:", number);
    number--;
}
let doValue = 0;
do {
    console.log("Value:", doValue);
    doValue++;
} while (doValue < 3);
for (let i = 0; i < 10; i ++) {
    if (i === 5) {
        break;
    }
    console.log(i)
}
for (let num = 1; num < 10; num++) {
    if (num === 5) {
        continue;
    }
    if (num === 8) {
        break;
    }
    console.log(num);
}
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j ++) {
        console.log(`i = ${i}, j = ${j}`);
    }
}
for (let i = 1; i <= 4 ; i++) {
    let line = '';
    for (let j = 1; j <= i; j++) {
        line += '*'
    }
    console.log(line);
}


function sum(a, b) {
    return a + b;
}
console.log(sum(3, 5));
function multiply(a, b) {
    return a * b
}
console.log(multiply(3, 5));
function sayHello(name) {
    console.log(`Hello, ${name}`);
}
sayHello("Тимофей");
function printInfo(name, age) {
    console.log(`Name: ${name}, age: ${age}`);
}
printInfo("Rita", 18)
function greet(name = "Гость") {
    console.log("Привет " + name);
}
greet();
greet("Анастасия");
function calculateDiscount(a, b = 10) {
    console.log((a * b)/100);
}
calculateDiscount(100);
calculateDiscount(100, 50);
const add = function (a, b) {
    return a + b;
};
console.log(add(2, 3));
function makeCounter() {
    let count = 0;
    return function() {
        count++;
        return count;
    };
}
const counter = makeCounter();
console.log(counter());
console.log(counter());
console.log(counter());
const sumFunc2 = (a, b) => a + b;
const double = x => x * 2;
const sumFunc3 = (a, b) => a + b;
const sayGreeting = () => console.log("Hello");
const square = x => x * x;

const calculate = (a, b) => {
    let result = a + b;
    return result * 2;
};
/////// git commit -m "Step 6: functions in JavaScript"  /////////

let numbersArr = [1, 2, 3, 4, 5];
console.log(numbersArr);
console.log(numbersArr[0]);
console.log(numbersArr[1]);

let colors = ['красный', 'синий', 'зеленый'];
console.log(colors[0]);
console.log(colors[2]);
colors[1] = 'оранжевый';
console.log(colors[1]);

console.log(numbersArr.length);
numbersArr.push(10);
console.log(numbersArr);
numbersArr.pop();
console.log(numbersArr);

let students = [];
students.push('Майя', 'Федор', 'Агафья');
students.pop();
console.log(students);

let numbers2 = [10, 20, 30];
for (let i = 0; i < numbers2.length; i++) {
    console.log(numbers2[i]);
}

for (let value of numbers2) {
    console.log(value);
}

let mixedArray = [1, "text", true, 3.14];
console.log(mixedArray);

console.log(numbersArr.includes(1));
console.log(numbersArr.indexOf(2));

let cities = ["Москва", "Рязань", "Волжский"];
if (cities.includes("Москва")) {
    console.log(cities.indexOf("Москва"));
} else {
    console.log("Города нет");
}
///////// git commit -m "Step 7: arrays in JavaScript" ///////

let user2 = {
    name: "Ivan",
    age: 20,
    isStudent: true,
    sayHello: function () {
        console.log(`Hello, my name is ${name}`);
    },
};
user2.sayHello();
console.log(user2);
console.log(user2.name);
console.log(user2.age);
console.log(user2["name"]);

let book = {
    title: "Нетерпение сердца",
    author: "Стефан Цвейг",
    year: 1938
};
console.log(book);
book.year = 2026;
console.log(book);

user2.name = 30;
user2.name = "Кирилл";
delete user2.isStudent;
console.log(user2);

let car = {
    brand: "BMW",
    year: 2025,
    getInfo: function () {
        caonsole.log(`${brand}, ${year}`);
    },
};
console.log(car);

for (let key in user2) {
    console.log(key + ": " + user2[key]);
}

let product = {
    name: "bread",
    year: 1378, 
    kg: 999
}
for (let key in product) {
    console.log(key + ": " + product[key]);
}

let student = {
    name: "Grigori",
    skills: ["HTML", "CSS", "JS"],
    address: {
        city: "Volzhski", 
        street: "Pushkina street",
    },
};
console.log(student.skills[0]);
console.log(student.address.city);

//////// git commit -m "Completed Lab 18: JavaScript basics" //////
