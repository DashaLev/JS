//classwork

// Дан масив ['a', 'b', 'c']. Додайте йому в кінець елементи input_with_name, products, 3 за допомогою циклу.
let letters = ['a', 'b', 'c']
for (let i=1, index = 3; i<4; i++, index++) {
    letters[index]=i
}
console.log(letters);

// Дан масив [input_with_name, products, 3]. Зробіть з нього новий масив [3, products, input_with_name].
let numbers = [1, 2, 3]
numbers.reverse()
console.log(numbers);

// - Дан масив [input_with_name, products, 3]. Додайте йому в кінець елементи 4, 5, 6.
let numbersArr = [1, 2, 3]
numbersArr.push(4,5,6)
console.log(numbersArr);

// - Дан масив [input_with_name, products, 3]. Додайте йому в початок елементи 4, 5, 6.
let numbersArray = [1, 2, 3]
numbersArray.unshift(4,5,6)
console.log(numbersArray);

// - Дан масив [input_with_name, products, 3, 4, 5]. Перетворіть масив в [4, 5].
let numArr = [1,2,3,4,5]
let numArrSlice = numArr.slice(3)
console.log(numArrSlice);

// - Дан масив [input_with_name, products, 3, 4, 5]. Перетворіть масив в [input_with_name,products].
let numArrSlice2 = numArr.slice(0,2)
console.log(numArrSlice2);

// - Дан масив [input_with_name, products, 3, 4, 5]. Зробіть з нього масив [input_with_name, products, 3, 'a', 'b', 'c'].
let numArray = [1, 2, 3, 4, 5]
numArray.push('a','b','c')
console.log(numArray);

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