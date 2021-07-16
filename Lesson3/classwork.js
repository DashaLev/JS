// - створити функцію яка приймає масив та виводить його
function arrDeduce(array) {
    console.log(array);
}

let numArr = [1, 5, 7, 8, 9, 6,]
arrDeduce(numArr)

// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
function smallestNumber(a, b, c) {
    if (a < b) {
        if (a < c) {
            console.log(a);
        } else {
            console.log(c);
        }
    } else if (b < c) {
        console.log(b);
    } else {
        console.log(c);
    }
}

smallestNumber(1, 5, 10)
smallestNumber(25, 20, 15)
smallestNumber(55, 60, 50)

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
function biggestNumber(a, b, c) {
    if (a > b) {
        if (a > c) {
            console.log(a);
        } else {
            console.log(c);
        }
    } else if (b > c) {
        console.log(b);
    } else {
        console.log(c);
    }
}

biggestNumber(1, 5, 10)
biggestNumber(25, 30, 15)
biggestNumber(75, 60, 50)

// - створити функцію яка повертає найбільше число з масиву
let arrNum = [2, 5, 8]
biggestNumber(arrNum[0], arrNum[1], arrNum[2])
smallestNumber(arrNum[0], arrNum[1], arrNum[2])

// - створити функцію яка повертає найменьше число з масиву
smallestNumber(arrNum[0], arrNum[1], arrNum[2])

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
function sumArray(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i]
    }
    return sum
    // console.log(sum)
    // console.log(a[0] + a[1] + a[2])
}

let numbersArray = [2, 8, 10, 11, 14]
sumArray(numbersArray)

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
function arithmeticMean(array) {
    // return sumArray(a) / a.length
    console.log(sumArray(array) / array.length)
}

arithmeticMean(numbersArray)

// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
// Для виведення використати попередню функцію.
let randomArr = []

function pushRandom(array, number) {
    for (let i = 0; i < number; i++) {
        array.push(Math.round(Math.random() * 100))
    }
    console.log(array);
}
pushRandom(randomArr, 15)

// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]
function objectKeysReturn(array) {
    for (let object of array) {
        for (let item in object) {
            console.log(item)
        }
    }
}
let usersArr = [{name: 'Din', age: 13},{name: 'Lina', age: 12},{name: 'Nika', age: 10}]
objectKeysReturn(usersArr)

//     - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]
function objectValuesReturn(array) {
    for (let object of array) {
        for (let item in object) {
            console.log(object[item])
        }
    }
}
objectValuesReturn(usersArr)

//     - створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     EXAMPLE:
//     [1,2,3,4]
//     [2,3,4,5]
//     результат
//     [3,5,7,9]

let array1 = [6,7,8,9,10];
let array2 = [4,3,2,1,0];


function sumValues(array1, array2) {
    let array3 = [];
    for (let i=0; i<array1.length;i++) {
        for (let j=0; j<array2.length;j++) {
            if (i === j) {
                let sum = 0;
                sum = array1[i] + array2[j];
                array3.push(sum);
            }
        }
    }
    return array3
}
console.log(sumValues(array1, array2))


// Дан масив ['a', 'b', 'c']. Додайте йому в кінець елементи 1, 2, 3 за допомогою циклу.
let letters = ['a', 'b', 'c']
for (let i=1, index = 3; i<4; i++, index++) {
    letters[index]=i
}
console.log(letters);

// Дан масив [1, 2, 3]. Зробіть з нього новий масив [3, 2, 1].
let numbers = [1, 2, 3]
numbers.reverse()
console.log(numbers);

// - Дан масив [1, 2, 3]. Додайте йому в кінець елементи 4, 5, 6.
let numbersArr = [1, 2, 3]
numbersArr.push(4,5,6)
console.log(numbersArr);

// - Дан масив [1, 2, 3]. Додайте йому в початок елементи 4, 5, 6.
let numberArray = [1, 2, 3]
numberArray.unshift(4,5,6)
console.log(numberArray);

// - Дан масив [1, 2, 3, 4, 5]. Перетворіть масив в [4, 5].
let numArray = [1,2,3,4,5]
let numArrSlice = numArray.slice(3)
console.log(numArrSlice);

// - Дан масив [1, 2, 3, 4, 5]. Перетворіть масив в [1,2].
let numArrSlice2 = numArr.slice(0,2)
console.log(numArrSlice2);

// - Дан масив [1, 2, 3, 4, 5]. Зробіть з нього масив [1, 2, 3, 'a', 'b', 'c'].
let numArray1 = [1, 2, 3, 4, 5]
numArray1.push('a','b','c')
console.log(numArray1);

// - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
let arrNumbers = [1,2,3,4,5,6,7,8,9,10]
for (let arrNumber of arrNumbers) {
    if (arrNumber % 2 === 0 ) {
        console.log(arrNumber);
    }
}

// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
let arrNumbersNew = []
for (let i=0; i<arrNumbers.length; i++) {
    arrNumbersNew[i] = arrNumbers[i];
}
console.log(arrNumbersNew);

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
let abcArr = ['a', 'b', 'c']
let word = "";
for (let i=0; i< abcArr.length;i++) {
    word += abcArr[i];
}
console.log(word)

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
let g = 0;
let word1 = "";
while (g <  abcArr.length){
    word1 += abcArr[g];
    g++;
}
console.log(word1);
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
let word2 = "";
for (let letter of abcArr){
    word2 += letter;
}
console.log(word2);

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
let word3 = "";
for (let letter in abcArr){
    word3 += abcArr[letter];
}
console.log(word3);