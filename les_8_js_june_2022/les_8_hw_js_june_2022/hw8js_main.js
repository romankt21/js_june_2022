 //- Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// function User (id, name, surname, email, phone) {
//     this.id = id,
//     this.name = name,
//     this.surname = surname,
//     this.email = email,
//     this.phone = phone;
// }
//
//  // створити пустий масив, наповнити його 10 об'єктами new User(....)
//
// let arr =  [
//     new User (1, 'ivan' ,'ivanenko', 'hh@gmail.com', 222 ),
//     new User (2, 'petro' ,'petrenko', 'hh@gmail.com', 222),
//     new User (3, 'mykola' ,'petrenko', 'hh@gmail.com', 222),
//     new User (4, 'vasyl' ,'petrenko', 'hh@gmail.com', 222),
//     new User (5, 'olya' ,'petrenko', 'hh@gmail.com', 222),
//     new User (6, 'ira' ,'petrenko', 'hh@gmail.com', 222),
//     new User (7, 'zoryana' ,'petrenko', 'hh@gmail.com', 222),
//     new User (8, 'kateryna' ,'petrenko', 'hh@gmail.com', 222),
//     new User (9, 'maria' ,'petrenko', 'hh@gmail.com', 222),
//     new User (10, 'vika' ,'petrenko', 'hh@gmail.com', 222),
//
//  ];
// console.log(arr)
// //
// // - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
// let couples = arr.filter(value => value.id % 2 === 0)
// console.log(couples)
//
//   // інший варіант коду
//  let filterUser = arr.filter((u) => {
//     if (u.id % 2 === 0){
//     return u
//     }});
// console.log(filterUser);
//
// //- Взяти масив з User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
//
// let sortUser = arr.sort((u1, u2) => {
//     return u1.id - u2.id
//     // return u2.id - u1.id  // в зворотньому порядку
//
// });
//
//
// console.log(sortUser);


//- створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
//створити пустий масив, наповнити його 10 об'єктами Client
//- Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

// class Client {
//     constructor(id, name, surname, email, phone, order) {
//         this.id = id;
//         this.nam = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = order;
//     }
// }
//
// let array  =  [];
//
// let client1 = new Client(1, 'ivan' ,'ivanenko', 'hh@gmail.com', 222, [1, 18, 25]);
// let client2 = new Client (2, 'petro' ,'petrenko', 'hh@gmail.com', 232, [1, 2, 3, 71]);
// let client3 = new Client(3, 'mykola', 'petrenko', 'hh@gmail.com', 422, [11, 22, 33, 125, 354]);
// let client4 = new Client (4, 'vasyl' ,'petrenko', 'hh@gmail.com', 112, [100, 75, 30]);
// let client5 = new Client (5, 'olya' ,'petrenko', 'hh@gmail.com', 352, [-1, 0, 5]);
// let client6 = new Client (6, 'ira' ,'petrenko', 'hh@gmail.com', 782, [1, 18, 25]);
// let client7 = new Client (7, 'zoryana' ,'petrenko', 'hh@gmail.com', 289, [1, 7]);
// let client8 = new Client (8, 'kateryna' ,'petrenko', 'hh@gmail.com', 1, [99]);
// let client9 = new Client (9, 'maria' ,'petrenko', 'hh@gmail.com', 333, [31, 45]);
// let client10 = new Client (10, 'vika' ,'petrenko', 'hh@gmail.com', 444, [-35]);
//
// array.push(client1, client2, client3, client4, client5, client6, client7, client8, client9, client10)
//
// console.log(array)
//
//  let sortOrder = array.sort((or1, or2) => {
//     return or1.order.length - or2.order.length
//  });
//  console.log(sortOrder)


// // - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
 // // максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
 // // -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
 // // -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
 // // -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
 // // -- changeYear (newValue) - змінює рік випуску на значення newValue
 // // -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

 // function Car (model, producer, year, maxSpeed, engine) {
 //     this.model = model;
 //     this.producer = producer;
 //     this.year = year;
 //     this.maxSpeeds = maxSpeed;
 //     this.engine = engine;
 //
 //     this.drive = function () {
 //         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
 //     }
 //
 //     this.info = function () {
 //         console.log(`model: ${this.model}, producer: ${this.producer}, year: ${this.year}, maxSpeed: ${this.maxSpeeds}, engine ${this.engine}`)
 //     }
 //
 //     this.info2 = function () {
 //         for (const item in this) {
 //             if (typeof this[item] !== 'function') {
 //                 console.log(`${item} -- ${this[item]}`)
 //             }
 //
 //         }
 //     }
 //
 //     this.increaseMaxSpeed = function(newSpeed) {
 //          this.maxSpeeds += newSpeed;
 //         console.log(this.maxSpeeds)
 //     }
 //
 //
 //
 //      this.changeYear  = function (newYear) {
 //            this.year = newYear
 //
 //          console.log(this.year)
 //      }
 //
 //      this.addDriver = function (driver) {
 //         this.driver = driver
 //      }
 //
 // }
 //
 //
 //     let car1 = new Car ('Scenic','Renault', 2010, 170, 1.5)
 // console.log(car1);
 // car1.drive();
 // car1.info();
 // car1.info2();
 // car1.increaseMaxSpeed(50);
 // car1.changeYear(2023)
 // car1.addDriver({name: 'Ivan', age: 22})



 // // - (Те саме, тільки через клас)
// // Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість,
// // об'єм двигуна. додати в об'єкт функції:
// // -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// // -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// // -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// // -- changeYear (newValue) - змінює рік випуску на значення newValue
// // -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// class Car2 {
//     constructor(model, producer, year, maxSpeed, engine) {
//         this.model = model;
//         this.producer = producer;
//         this.year = year;
//         this.maxSpeed = maxSpeed;
//         this.engine = engine;
//
//     }
//
//         drive () {
//             console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
//         };
//
//         info () {
//             for (const val in this) {
//                 if (typeof this[val] !== 'function') {
//                     console.log(`${val} -- ${this[val]}`)
//                 }
//
//             }
//         }
// // -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     increaseMaxSpeed (newSpeed) {
//             this.maxSpeed += newSpeed;
//         console.log(this.maxSpeed)
//
//     }
//
//
//     changeYear (newValue) {
//         this.year = newValue;
//     }
//
//     addDriver (driver) {
//             this.driver = driver
//     }
//
//
//
//
//
// }
//
// let car2 = new Car2 ('slavuta',  'zaz', 2003, 110, 1.2)
//
//  console.log(car2)
//  car2.drive();
//  car2.info();
//  car2.increaseMaxSpeed(100)
//  car2.changeYear(2020)
//  car2.addDriver('Mykola')
//  console.log(car2)

 //  // -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
 //  // Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
 //  //   За допомоги циклу знайти яка попелюшка повинна бути з принцом.
 //  //   Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

 class Cinderella {
     constructor(name, age, footSize) {
         this.name = name;
         this.age = age;
         this.footSize = footSize;
     }
 }

 let arrayCinderellas = [];

 let cinderella1 = new Cinderella('Zoriana', 38, 38);
 let cinderella2 = new Cinderella('Kateryna', 12, 32);
 let cinderella3 = new Cinderella('Olya', 67, 37);
 let cinderella4 = new Cinderella('Galyna', 30, 30);
 let cinderella5 = new Cinderella('Vasyyna', 31, 31);
 let cinderella6 = new Cinderella('Natalya', 32, 32);
 let cinderella7 = new Cinderella('Ulyiana', 33, 33);
 let cinderella8 = new Cinderella('Myroslava', 34, 34);
 let cinderella9 = new Cinderella('Sofia', 35, 35);
 let cinderella10 = new Cinderella('Nastya', 36, 36);

 arrayCinderellas.push (cinderella1, cinderella2, cinderella3, cinderella4, cinderella5, cinderella6, cinderella7, cinderella8, cinderella9, cinderella10)

 console.log(arrayCinderellas)


 //  // Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.

 class Prince {
     constructor(name, age, findFootSize) {
         this.name = name;
         this.age = age;
         this.findFootSize = findFootSize
     }
 }

 let prince = new Prince('Ivan', 35,35)
 //  //   За допомоги циклу знайти яка попелюшка повинна бути з принцом.

 // for (const value of arrayCinderellas) {
 //     if ( prince.findFootSize === value.footSize) {
 //         console.log(prince.footSize)
 //     }
 // }

 let findCinderellas = (arrayCinderellas, prince) => {
     for (const item of arrayCinderellas) {
         if (prince.findFootSize === item.footSize) {
             return `My cinderella is ${item.name}`;
         }

     }

 }

 console.log(findCinderellas(arrayCinderellas, prince));

