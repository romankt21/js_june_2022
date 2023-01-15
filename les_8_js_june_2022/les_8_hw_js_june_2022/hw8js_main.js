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



 // - (Те саме, тільки через клас)
 // Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість,
 // об'єм двигуна. додати в об'єкт функції:
 // -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
 // -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
 // -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
 // -- changeYear (newValue) - змінює рік випуску на значення newValue
 // -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

class Car2 {
    constructor(model, producer, year, maxSpeeds, engine) {
    }
}

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




