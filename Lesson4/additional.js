// - Створити клас або функцію конструктор, за допомоги якої можна створювати об'єкти наступного вигляду.
// Конструктор повинен приймати значення для кожної властивості, в т.ч і для властивостей внутрішніх об'єктів
//
// {
//     id: 1,
//     name: 'Leanne Graham',
//     username: 'Bret',
//     email: 'Sincere@april.biz',
//     address: {
//         street: 'Kulas Light',
//         suite: 'Apt. 556',
//         city: 'Gwenborough',
//         zipcode: '92998-3874',
//         geo: {
//              lat: '-37.3159',
//              lng: '81.1496'
//         }
//     },
//     phone: '1-770-736-8031 x56442',
//     website: 'hildegard.org',
//     company: {
//         name: 'Romaguera-Crona',
//         catchPhrase: 'Multi-layered client-server neural-net',
//         bs: 'harness real-time e-markets'
//     }
// }

class UserCard {
    constructor(id, name, username, email, street, suite, city, zipcode, lat, lng, phone, website, companyName, catchPhrase, bs) {
        this.id = id;
        this.name = name;
        this.username = username;
        this.email = email;
        this.address = {
            street: street,
            suite: suite,
            city: city,
            zipcode: zipcode,
            geo: {
                lat: lat,
                lng: lng
            }
        }
        this.phone = phone;
        this.website = website;
        this.company = {
            name: companyName,
            catchPhrase: catchPhrase,
            bs: bs
        }
    }

}

let user1 = new UserCard(1, 'Leanne Graham', 'Bret', 'Sincere@april.biz', 'Kulas Light', 'Apt. 556', 'Gwenborough', '92998-3874', '-37.3159', '81.1496', '1-770-736-8031 x56442', 'hildegard.org', 'Romaguera-Crona', 'Multi-layered client-server neural-net', 'harness real-time e-markets')

console.log(user1);



// -  Створити функцію конструктор / клас  який описує об'єкт тегу
// Поля :
//     -назва тегу ()
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результуючого об'єкту
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
//
// }

class Tag {
    constructor(tagName, actionsDescription,attributeName1,attributeDescription1,attributeName2,attributeDescription2) {
        this.tagName = tagName;
        this.actionsDescription = actionsDescription;
        this.attributesArray = [
            {
                attributeName: attributeName1,
                attributeDescription: attributeDescription1
            },
            {
                attributeName: attributeName2,
                attributeDescription: attributeDescription2
            }
        ]

    }

}

let a = new Tag('a','Предназначен для создания ссылок.','href','Задает адрес документа, на который следует перейти.','name','Устанавливает имя якоря внутри документа.')
let div = new Tag('div', 'Элемент является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого.','align','Задает выравнивание содержимого тега <div>.', 'title', 'Добавляет всплывающую подсказку к содержимому.')
let h1 = new Tag('h1','Представляет собой наиболее важный заголовок первого уровня','align','Определяет выравнивание заголовка.','dir','Задает направление и отображение текста — слева направо или справа налево')
let span = new Tag('span','Предназначен для определения строчных элементов документа. ','class','Определяет имя класса, которое позволяет связать тег со стилевым оформлением','id','Указывает имя стилевого идентификатора.')
let input = new Tag('input','Предназначен для создания текстовых полей, различных кнопок, переключателей и флажков. ','type','Сообщает браузеру, к какому типу относится элемент формы.','name','Имя поля, предназначено для того, чтобы обработчик формы мог его идентифицировать.')
let form = new Tag('form','Устанавливает форму на веб-странице, предназначеную для обмена данными между пользователем и сервером.','action','Адрес программы или документа, который обрабатывает данные формы.','target','Имя окна или фрейма, куда обработчик будет загружать возвращаемый результат.')
let option = new Tag('option','Определяет отдельные пункты списка, создаваемого с помощью контейнера select.','disabled','Заблокировать для доступа элемент списка.','selected','Заранее устанавливает определенный пункт списка выделенным.')
let select = new Tag('select','Позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором','multiple','Позволяет одновременно выбирать сразу несколько элементов списка.','required','Список обязателен для выбора перед отправкой формы.')

console.log(a);
console.log(div);
console.log(h1);
console.log(span);
console.log(input);
console.log(form);
console.log(option);
console.log(select);
