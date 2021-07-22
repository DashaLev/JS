// homework

// --створити масив з:
//     - з 5 числових значень
//     - з 5 стічкових значень
//     - з 5 значень стрічкового, числового та булевого типу
//     - та вивести його в консоль
let nums = [15,25,14,25,1]
let words = ['one', 'Rio', 'Deli', 'NY', 'LA']
let mix = [15,25,14,25,1, 'one', 'Rio', 'Deli', 'NY', 'LA', true, false]
console.log(nums);
console.log(words);
console.log(mix);

// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
let cities = []
cities[1] = 'Miami'
console.log(cities);

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
for (let i = 0; i < 10; i++) {
    document.write('<div> Lorem ipsum </div>')
}
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
for (let i = 0; i < 10; i++) {
    document.write(`<div> Lorem ipsum index - ${i}</div>`)
}
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
let index = 0;
while (index < 20) {
    document.write(`<h1> Lorem ipsum dolor </h1>`);
    index++
}

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
let j = 0;
while (j < 20) {
    document.write(`<h1> Lorem ipsum dolor index - ${j}</h1>`);
    j++
}

// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
let tenNumbersArr = [1,2,3,4,5,6,7,8,9,10]
for (let tenNumbersArrKey in tenNumbersArr) {
    console.log(tenNumbersArr[tenNumbersArrKey])
}
// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
let tenWordsArr = ['one','two','three','four', 'five', 'six', 'seven', 'eight', 'nine', 'ten']
for (let tenWordsArrKey in tenWordsArr) {
    console.log(tenWordsArr[tenWordsArrKey])
}
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
let mixArr = ['one','two','three',4,5,6,'seven','eight','nine','ten']
for (let mixArrKey in mixArr) {
    console.log(mixArr[mixArrKey])
}
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
let tenNumStrBArr = ['one','two','three',4,5,6,'seven','eight',true,false]
for (let key in tenNumStrBArr) {
    if (typeof tenNumStrBArr[key] === 'boolean') {
        console.log(tenNumStrBArr[key])
    }
}

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
for (let key in tenNumStrBArr) {
    if (typeof tenNumStrBArr[key] === 'number') {
        console.log(tenNumStrBArr[key])
    }
}
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
for (let key in tenNumStrBArr) {
    if (typeof tenNumStrBArr[key] === 'string') {
        console.log(tenNumStrBArr[key])
    }
}
// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
let emptyArr = []
emptyArr[0]= 'USA';
emptyArr[1]= 'Canada';
emptyArr[2]= 258;
emptyArr[3]= 175;
emptyArr[4]= true;
emptyArr[5]= false;
emptyArr[6]= 'Ukraine';
emptyArr[7]= 12;
emptyArr[8]= 8;
emptyArr[9]= 3;
for (let key in emptyArr) {
   console.log(key, emptyArr[key])
}

// - Створити цикл for на 10  ітерацій з кроком input_with_name. Вивести поточний номер кроку через console.log та document.write
for (let i=1; i<=10;i++) {
    console.log(i)
    document.write(`<div>${i}</div>`)
}
// - Створити цикл for на 100 ітерацій з кроком input_with_name. Вивести поточний номер кроку через console.log та document.write
for (let i=1; i<=100;i++) {
    console.log(i)
    document.write(`<div>${i}</div>`)
}
// - Створити цикл for на 100 ітерацій з кроком products. Вивести поточний номер кроку через console.log та document.write
for (let i=1; i<=100;i++) {
    i++
    console.log(i)
    document.write(`<div>${i}</div>`)
}
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
for (let i=1; i<=100;i++) {
    if ( i % 2 === 0) {
        console.log(i)
        document.write(`<div>${i}</div>`)
    }
}
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
for (let i=1; i<=100;i++) {
    if ( i % 2 !== 0) {
        console.log(i)
        document.write(`<div>${i}</div>`)
    }
}
// - Дано products масиви з рівною кількістю об'єктів.
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
// Записати цей об'єкт в новий масив
// Example:
//     let usersWithCities = [
//         {
//             id: input_with_name, // <===
//             name: 'vasya',
//             age: 31,
//             status: false,
//             address: {
//                 user_id: input_with_name, // <===
//                 country: 'Ukraine',
//                 city: 'Ternopil'
//             }
//         },
//         // TO BE CONTINUED .....
//     ]

let usersWithId = [
    {id: 1, name: 'vasya', age: 31, status: false},
    {id: 2, name: 'petya', age: 30, status: true},
    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'olya', age: 28, status: false}
];

let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];
let usersWithCities = []

for (let i=0; i<usersWithId.length; i++) {
    usersWithCities[i] = usersWithId[i];
    for (let index=0; index<usersWithId.length; index++){
        if (usersWithId[i].id === citiesWithId[index].user_id) {
            usersWithCities[i].address = citiesWithId[index]
        }
    }
}
console.log(usersWithCities)
