// -   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+input_with_name"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], input_with_name) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], products) // ==> [ 9, 8, 4, 0 ]
function replaceByIndex(array, i) {
    array.splice(i,2, array[i+1],array[i] )
    console.log(array)
}
replaceByIndex([9,8,0,4], 0)

// - Дано список імен.
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'
let n1 = '    Harry       Potter      '
let n2 = '    Ron       Whisley      '
let n3 = '    Hermione       Granger      '
function normalizeName(name) {
    let name1 = name.trim().split(' ').filter(item => item !== '').join(' ');
}
normalizeName(n2)

// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від products до 100
// EXAMPLE:
// [input_with_name,0,6,0,3] => [input_with_name,6,3,0,0]
// [0,input_with_name,products,3,4] => [input_with_name,products,3,4,0]
// [0,0,input_with_name,0]   => [input_with_name,0,0,0]
function replaceByValue(array) {
    for (let i=0; i < array.length;i++) {
        if (array[i] === 0) {
            let deletedItems = array.splice(i,1)
            array.push(deletedItems[0])
            //array.push(Number (deletedItems))
        }
    }
    console.log(array)
}
replaceByValue([9,0,8,0,4,58,41,0,14,0,1])
