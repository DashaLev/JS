// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
// Взяти масив (Client []).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
class Client {
    constructor(id, name, surname, email, phone) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = ['milk', 'sugar', 'juice']
    }

    add(product) {
        this.order.push(product);
    }
}


let client1 = new Client(1, 'Ivan', 'Petrov', '12@gmail.com', 380987456321)
client1.add('candies')
let client2 = new Client(2, 'Viktor', 'Ivanov', '123@gmail.com', 380987556321)
client2.add('candies')
client2.add('bread')
client2.add('cola')
client2.add('coffee')
let client3 = new Client(3, 'Dima', 'Sidorov', '124@gmail.com', 380987456321)
let client4 = new Client(4, 'Din', 'Popov', '125@gmail.com', 380987222321)
client4.add('water')
let client5 = new Client(5, 'Svetlana', 'Bim', '126@gmail.com', 380955456321)
client5.add('candies')
client5.add('meat')
client5.add('ice cream')
let client6 = new Client(6, 'Nina', 'Bush', '127@gmail.com', 380987226321)
let client7 = new Client(7, 'Masha', 'Rush', '128@gmail.com', 380987455521)
client7.add('tea')
let client8 = new Client(8, 'Jim', 'Spoon', '129@gmail.com', 380987454771)
let client9 = new Client(9, 'Sindy', 'Big', '110@gmail.com', 380989516321)
client9.add('candies')
client9.add('tea')
let client10 = new Client(10, 'Witny', 'Small', '111@gmail.com', 380982146321)
client10.add('candies')
client10.add('ice cream')
client10.add('tea')

let clients = [
    client1,
    client2,
    client3,
    client4,
    client5,
    client6,
    client7,
    client8,
    client9,
    client10
]

clients.sort(function (cl1, cl2) {
    return cl1.order.length - cl2.order.length
})
console.log(clients);


// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car

function Car(model, manufacturer, yearOfManufacture, maxSpeed, engineCapacity) {
    this.model = model;
    this.manufacturer = manufacturer;
    this.yearOfManufacture = yearOfManufacture;
    this.maxSpeed = maxSpeed;
    this.engineCapacity = engineCapacity;
    this.drive = function () {
        console.log(`Їдемо зі швидкістю ${this.maxSpeed} км на годину`)
    };
    this.info = function () {
        console.log(`Модель - ${this.model}, виробник - ${this.manufacturer}, рік випуску - ${this.yearOfManufacture}, максимальна швидкість - ${this.maxSpeed}, об'єм двигуна - ${this.engineCapacity}  `)
    };
    this.increaseMaxSpeed = function (newSpeed) {
        this.maxSpeed = maxSpeed + newSpeed;
    }
    this.changeYear = function (newValue) {
        this.yearOfManufacture = newValue;
        this.info()
    }
    this.addDriver = function (name, age) {
        this.driver = {
            name,
            age
        }
    }
}

let car1 = new Car('320i', 'BMW', 2003, 226, '2.2')
car1.drive();
car1.info();
car1.increaseMaxSpeed(20);
car1.changeYear(2000);
car1.addDriver('Sam', 32);
console.log(car1);

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
class Car2 {
    constructor(model, manufacturer, yearOfManufacture, maxSpeed, engineCapacity) {
        this.model = model;
        this.manufacturer = manufacturer;
        this.yearOfManufacture = yearOfManufacture;
        this.maxSpeed = maxSpeed;
        this.engineCapacity = engineCapacity;
    }

    drive() {
        console.log(`Їдемо зі швидкістю ${this.maxSpeed} км на годину`)
    };

    info() {
        console.log(`Модель - ${this.model}, виробник - ${this.manufacturer}, рік випуску - ${this.yearOfManufacture}, максимальна швидкість - ${this.maxSpeed}, об'єм двигуна - ${this.engineCapacity}  `)
    };

    increaseMaxSpeed(newSpeed) {
        this.maxSpeed = this.maxSpeed + newSpeed;
        console.log(`Значення максимальної швидкості підвищене на ${newSpeed} км/год та складає ${this.maxSpeed} км на годину`)
    }

    changeYear(newValue) {
        this.yearOfManufacture = newValue;
        console.log(`Рік випуску змінено на ${this.yearOfManufacture}`)
    }

    addDriver(name, age) {
        this.driver = {
            name,
            age
        }
        console.log(`Додано водія ${this.driver.name}, вік - ${this.driver.age} р.`)
    }
}

let car3 = new Car2('RS4', 'Audi', 2007, 250, '4.2');
car3.drive();
car3.info();
car3.increaseMaxSpeed(40);
car3.changeYear(1999);
car3.addDriver('Sam', 32);
console.log(car3);

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити 10 попелюшок , покласти їх в масив.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
class Cinderella {
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}

let cinderella1 = new Cinderella('Olivia', 20, 37)
let cinderella2 = new Cinderella('Isabella', 21, 38)
let cinderella3 = new Cinderella('Emma', 22, 37)
let cinderella4 = new Cinderella('Ava', 20, 38)
let cinderella5 = new Cinderella('Charlotte', 24, 39)
let cinderella6 = new Cinderella('Sophia', 21, 37)
let cinderella7 = new Cinderella('Amelia', 25, 38)
let cinderella8 = new Cinderella('Mia', 21, 36)
let cinderella9 = new Cinderella('Elizabeth', 22, 38)
let cinderella10 = new Cinderella('Penelope', 26, 37)

let cinderellasList = [
    cinderella1,
    cinderella2,
    cinderella3,
    cinderella4,
    cinderella5,
    cinderella6,
    cinderella7,
    cinderella8,
    cinderella9,
    cinderella10
]

class Prince {
    constructor(name, age, shoeSize) {
        this.name = name;
        this.age = age;
        this.shoeSize = shoeSize;
    }
    findCinderella(array, shoeSize = this.shoeSize, name = this.name) {
        for (let cinderella of array) {
            if (cinderella.footSize === shoeSize) console.log(`${name} and ${cinderella.name}`)
        }
    }
    findCinderella2(array, shoeSize = this.shoeSize, name = this.name) {
        array.find(function (cinderella) {
            if (cinderella.footSize === shoeSize) console.log(`${name} and ${cinderella.name}`)
        })
    }
}

let prince = new Prince('Eric', 27, 36)
let prince2 = new Prince('Derek', 26, 39)

prince.findCinderella(cinderellasList)
prince2.findCinderella2(cinderellasList)


