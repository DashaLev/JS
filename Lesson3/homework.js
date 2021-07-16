// - створити функцію яка обчислює та повертає площу прямокутника висотою
function rectangleArea(a,b) {
    console.log(a*b)
}
rectangleArea(10,5)

// - створити функцію яка обчислює та повертає
function circleArea(r) {
    console.log(3.14*r**2)
}
circleArea(7)

// - створити функцію яка обчислює та повертає
function cylinderArea(r,h) {
    console.log(2*3.14*r**2 + 2*3.14*r*h)
}
cylinderArea(7, 5)

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
let numbersArray2 = [5,7,8,5,2,-5,18,201,258,1]
function getMaxAndMinNumbers(numbers){
    let max=0;
    let min=0;
    for( let number of numbers ){
        if (number > max) max = number;
        if (number < min) min = number;
    }
    console.log(max);
    return min;
}
let minNumber = getMaxAndMinNumbers(numbersArray2)
console.log(minNumber);

// - створити функцію яка при створює блок з текстом. Текст задати через аргумент
function blockWithText(text) {
    document.write(`<div>${text}</div>`)
}
blockWithText('Lorem ipsum dolor')

// - створити функцію яка при створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function ulWithText(text) {
    document.write(`<ul>
                    <li>${text}</li>
                    <li>${text}</li>
                    <li>${text}</li>`)
    document.write(`</ul>`)
}
ulWithText('Lorem ipsum')

// - створити функцію яка при створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function ulLiNumberWithText(text,number) {
    document.write('<ul>')
        for (let i=0; i<number; i++) {
            document.write(`<li>${text}</li>`)
        }
    document.write('</ul>')
}
ulLiNumberWithText('Lorem ipsum2',5)

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let arrUl = [1,2,8,910,'summer','winter', true]
function ulFromArray(array) {
    document.write('<ul>')
        for (let i=0; i<array.length; i++) {
            document.write(`<li>${array[i]}</li>`)
        }
    document.write('</ul>')
}
ulFromArray(arrUl)