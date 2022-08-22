//  //constructor
// function User (name, age, status) {
//     this.name = name;
//     this.age = age;
//     this.status = status;
//     console.log(this);
//
// }
//
// let user1 = new User("ivan", 25, true);
// let user2 = new User("petro", 25, true);
// let user3 = new User("vasyl", 25, true);


// function User (name, age, status, wife) {
//     this.name = name;
//     this.age = age;
//     this.status = status;
//     console.log(this);
//     this.wife = wife
//
// }
//
// let user1 = new User("ivan", 25, true, {name: 'halyna', age: 25});



// function User3 (name, age, status, wifeName, wifeAge) {
//     this.name = name;
//     this.age = age;
//     this.status = status;
//     this.wife = {name: wifeName, age: wifeAge};
//     this.greeting = function () {
//         console.log('hi')
//     }
//
// }
//
// let user1 = new User3("ivan", 25, true, 'halyna',  25);
// console.log(user1);
// console.log(user1.greeting);

//  // prototype call apply bind  виклик прототипу застосувати прив'язку

// function User(name, age) {
//     this.name = name;
//     this.age = age;
// }
//
// let user = new User('vasyl', 31);
// user.greeting = function () {
//     console.log('hi')
// };
// console.log(user);
// user.greeting();

//
// let user2 = new User('ira', 30);
// console.log(user2);
// user.greeting();


// console.log(User);
// User.prototype.greeting = function () {
//     return `hello my name is ${this.name}`;
// };
//
// let user = new User('vasyl', 12)
// console.log(user.greeting());

// function User(name, age) {
//     this.name = name;
//     this.age = age;
// }
//
// let user = new User('vasyl', 12)
// user.greeting = function () {
//     return `hello my name is ${this.name}`;
// };
//
// console.log(user.greeting());
// let user2 = new User('ira', 10);
// console.log(user.greeting.apply(user2));
// function User(name, age) {
//     this.name = name;
//     this.age = age;
// }
//
// let user = new User('vasyl', 12)
// user.greeting = function (msg, asd) {
//     return `${msg} or ${asd} my name is ${this.name}`;
// };
//
// console.log(user.greeting('hi', 'bongur'));
// let user2 = new User('ira', 10);
// console.log(user.greeting.apply(user2, ['hello', 'bon']));

let nums = [11, 22, 33];
Array.prototype.print = function () {
    console.log(this);
}

nums.print();




// // call
// function User(name, age) {
//     this.name = name;
//     this.age = age;
// }
//
// let user = new User('vasyl', 12)
// user.greeting = function (msg, asd) {
//     return `${msg} or ${asd} my name is ${this.name}`;
// };
//
// console.log(user.greeting('hi', 'bongur'));
// let user2 = new User('ira', 10);
// console.log(user.greeting.call(user2, ['hello'], ['bon']));


// function User(name, age) {
//     this.name = name;
//     this.age = age;
// }
//
// let user = new User('vasyl', 12)

//  // user.greeting = msg => {return `${msg} my name is ${this.name}`;};

// user.greeting = function (msg) {
//     return `${msg} my name is ${this.name} `;
// };
// console.log(user.greeting('hi'));
//
// let user2 = new User('ira', 10);
// let greetingCopy = user.greeting.bind(user2, 'привіт')
// console.log(greetingCopy());
//


//  // classes extends

// class User {
//
//
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     greeting() {
//         return `hello my nime is ${this.name}`
//     }
//
// }
//
// let user = new User('vasyl', 31);
// console.log(user);
// console.log(user.greeting())

// class User {
//
//
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     work() {
//         return `work in process`
//     }
//
// }
//
// class Customer extends User{
//     constructor(name, age, password) {
//         super(name, age);
//         this.password = password;
//     }
//     work() {
//         return `hello`
//     }
// }
//
// let customer = new Customer('vasyl', 31, '111');
// console.log(customer);
// console.log(customer.work());


// function User(name, age) {
//     this.name = name;
//     this.age = age;
// }
//
// function Customer(name, age, password){
//     User.apply(this, [name,age]);
//     // User.apply(this, [arguments]);
//     this.password = password;
// }
//
// let customer = new Customer('ivan', 25, 'www');
// console.log(customer);
