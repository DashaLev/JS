// Зробити свій розпорядок дня.
//
// У вас має бути більше 10 асинхронних дій з рандомними затримками.
// Вам необхідно синхронізувати всі свої дії за допомогою промісів та async await (Код має бути написаний окремо)
// Затримка має бути НЕ в порядку зростання, а будь яка. При тому ваші дії мають бути синхронізовані.
//
// Напиклад.
// Прикнутись - 0.3с
// Поснідати - 1с
// Піти в душ - 0.5с
// Дочекатись автобус - 3с
// Пообідати - 1с
//
// І так далі


// 07:00 Прокинутись
// 07:30 Сніданок
// 07:50 Почистити зуби
// 08:00 Прогулянка з собакою
// 08:30 Покормити собаку
// 08:40 Навчання - перегляд відеоматеріалів
// 10:20 Перерва на каву
// 10:35 Навчання - виконання домашнього завдання
// 12:00 Навчання - лекція
// 13:40 Обід
// 14:00 Прогулянка з собакою
// 14:30 Покормити собаку


//// проміси

function orderOfDay1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('07:00 Прокинутись')
            resolve('All ok');
        }, 1100)
    });
}
function orderOfDay2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('07:30 Сніданок')
            resolve('All ok');
        }, 1600)
    });
}
function orderOfDay3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('07:50 Почистити зуби')
            resolve('All ok');
        }, 1600)
    });
}
function orderOfDay4() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('08:00 Прогулянка з собакою')
            resolve('All ok');
        }, 1500)
    });
}
function orderOfDay5() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('08:30 Покормити собаку');
            resolve('All ok');
        }, 500)
    });
}
function orderOfDay6() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('08:40 Навчання - перегляд відеоматеріалів');
            resolve('All ok');
        }, 400)
    });
}
function orderOfDay7() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('10:20 Перерва на каву');
            resolve('All ok');
        }, 700)
    });
}
function orderOfDay8() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('10:35 Навчання - виконання домашнього завдання');
            resolve('All ok');
        }, 1800)
    });
}
function orderOfDay9() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('12:00 Навчання - лекція');
            resolve('All ok');
        }, 1500)
    });
}
function orderOfDay10() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('13:40 Обід');
            resolve('All ok');
        }, 800)
    });
}
function orderOfDay11() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('14:00 Прогулянка з собакою');
            resolve('All ok');
        }, 600)
    });
}
function orderOfDay12() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('14:30 Покормити собаку');
            resolve('All ok');
        }, 300)
    });
}

function orderOfDay(no, ok) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (no) {
                reject('Розпорядок недоступний')
            } else {
                resolve('Розпорядок')
            }

        }, 500)
    });
}

// orderOfDay(null, 'ok')
//     .then((value) => {
//         console.log(value)
//         return orderOfDay1()
//     })
//     .then(() => orderOfDay2())
//     .then(() => orderOfDay3())
//     .then(() => orderOfDay4())
//     .then(() => orderOfDay5())
//     .then(() => orderOfDay6())
//     .then(() => orderOfDay7())
//     .then(() => orderOfDay8())
//     .then(() => orderOfDay9())
//     .then(() => orderOfDay10())
//     .then(() => orderOfDay11())
//     .then(() => orderOfDay12())
//     .catch(reason => console.log(reason))


///////// async await

function dayOrder1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('06:00 Прокинутись')
            resolve('All ok');
        }, 900)
    });
}
function dayOrder2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('06:15 Спорт')
            resolve('All ok');
        }, 600)
    });
}
function dayOrder3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('06:30 Сніданок')
            resolve('All ok');
        }, 800)
    });
}
function dayOrder4() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('06:45 Почистити зуби')
            resolve('All ok');
        }, 1100)
    });
}
function dayOrder5() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('06:50 Зібратись на роботу');
            resolve('All ok');
        }, 600)
    });
}
function dayOrder6() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('07:10 Дорога до роботи');
            resolve('All ok');
        }, 500)
    });
}
function dayOrder7() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('08:00 Початок робочого дня');
            resolve('All ok');
        }, 900)
    });
}
function dayOrder8() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('11:00 Перерва на каву');
            resolve('All ok');
        }, 1300)
    });
}
function dayOrder9() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('13:00 Обід');
            resolve('All ok');
        }, 1400)
    });
}
function dayOrder10() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('17:00 Дорога до дому');
            resolve('All ok');
        }, 700)
    });
}
function dayOrder11() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('17:50 Вечеря');
            resolve('All ok');
        }, 500)
    });
}
function dayOrder12() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('18:00 Вільний час');
            resolve('All ok');
        }, 400)
    });
}


async function dayOrder() {

    try {

        console.log('Розпорядок 2');

        const order1 = await dayOrder1();
        const order2 = await dayOrder2();
        const order3 = await dayOrder3();
        const order4 = await dayOrder4();
        const order5 = await dayOrder5();
        const order6 = await dayOrder6();
        const order7 = await dayOrder7();
        const order8 = await dayOrder8();
        const order9 = await dayOrder9();
        const order10 = await dayOrder10();
        const order11 = await dayOrder11();
        const order12 = await dayOrder12();

    } catch (reason) {
        console.warn(reason)
    }
}


dayOrder()

