// - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
function setRandomNumbersArr(length) {
    let arr = []
    for (let i = 0; i < length; i++) {
        arr.push(Math.round(Math.random() * 100))
    }
    console.log(arr);
}
setRandomNumbersArr( 10)

// - Змінти попередню функцію, щоб діапазон можна було визначити через аргументи.
function setRandomNumbersArrWithDiapason(length, diapason) {
    let arr = []
    for (let i = 0; i < length; i++) {
        arr.push(Math.round(Math.random() * diapason))
    }
    return arr
}
setRandomNumbersArrWithDiapason(15,1500)
// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort
let randomArr = setRandomNumbersArrWithDiapason(17,500).sort(function (i1, i2) {
    return i1-i2
})
console.log(randomArr);

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, за лишивши тільки парні числа
let randomArr2 = setRandomNumbersArrWithDiapason(11,330).filter(function (item) {
    return item % 2 === 0
})
console.log(randomArr2);

// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) . за допомоги map та колбеку перетворити всі об'єкти в масиві на срінгові.
let randomArr3 = setRandomNumbersArrWithDiapason(11,330).map(function (item) {
    return item.toString()
})
console.log(randomArr3);

// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
//створити пустий масив, наповнити його 10 об'єктами new User(....)
//Взяти масив цей  User[] та: Відфільтрувати , залишивши тільки об'єкти з парними id (filter) та Відсортувати його по id. по зростанню (sort)
function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}
let users = [
    new User (21,'Ivan', 'Ivanov', '1111@.gmail.com', 380123456789),
    new User (202,'Petro', 'Petrov', '2222@.gmail.com', 380123456789),
    new User (103,'Olena', 'Ivanova', '3333@.gmail.com', 380123456789),
    new User (14,'Victor', 'Ivanov', '4444@.gmail.com', 380123456789),
    new User (15,'Svetlana', 'Petrova', '5555@.gmail.com', 380123456789),
    new User (62,'Vlad', 'Ivanov', '6666@.gmail.com', 380123456789),
    new User (27,'Nina', 'Ivanova', '7777@.gmail.com', 380123456789),
    new User (81,'Dina', 'Ivanova', '8888@.gmail.com', 380123456789),
    new User (90,'Kate', 'Petrova', '9999@.gmail.com', 380123456789),
    new User (140,'Ivan', 'Ivanov', '1010@.gmail.com', 380123456789)
]

let usersFiltered = users.filter(function (user) {
    return user.id % 2 === 0
}).sort(function (user1,user2) {
    return user1.id- user2.id
})

console.log(users);
console.log(usersFiltered);