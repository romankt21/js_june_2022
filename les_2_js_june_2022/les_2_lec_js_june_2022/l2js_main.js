// let music = ['qwe', 'asd', 'zxc'];
// console.log(music);
// console.log(music[2]);
// console.log(music[3]);
//
// music [3] = 'sdf';
// console.log(music[3]);
//
// music = ['hello', 'hi', 'qw', 145, [1, 78, 121]];
// console.log(music);
// console.log(music[4] [2]);

// let user = {
//     name: 'vasya',
//     age: 31,
//     status: true,
//     skills: ['html', 'js'],
//     wife: {
//         name: 'olya',
//         age: 22,
//         skills: ['react', 'python']
//     }
// };
// console.log(user);
// console.log(user.name);
// console.log(user.age);
// console.log(user.skills);
// console.log(user.skills[0]);
// console.log(user.wife);
// console.log(user.wife.name);
// console.log(user.wife.skills);


// console.log(user['name']);
// console.log(user['age']);
// console.log(user['skills']);
// console.log(user['skills'][0]);
// console.log(user['wife']);
// console.log(user['wife']['name']);
// console.log(user['wife'].name);
// console.log(user['wife']['skills']);

// let users = [
// {name: 'vasya', age: 31, status: true, skills: ['html', 'js'], wife: {name: 'olya', age: 22, skills: ['react', 'python']}},
// {name: 'ivan', age: 32, status: true, skills: ['html', 'js'], wife: {name: 'anna', age: 22, skills: ['react', 'python']}},
// {name: 'mykola', age: 33, status: false, skills: ['html', 'js']},
// ]
// let vasya = users[0];
// console.log(vasya)
//
// let ivan  = users[1];
// console.log(ivan);
//
// console.log(users[0].wife.skills);
//
// let mykola = users[2];
// mykola.druzhyna = 'maria';
// console.log(mykola);

// mykola.druzhyna = null;
// delete mykola.skills;
// console.log(mykola);

// mykola.son = {name: 'ivan', age: 5};
// mykola['daughter'] = {name: 'zoryana'};
// mykola.son2 = 'petro';


// console.log(!!{});
// console.log(!![]);

// const user = {age: 11};
// user.name = 'kokos';
// user.age = 123;
// console.log(user);
// user.name = 'ivan';
// console.log(user);


// let x = 0;
// let y = x;
// console.log(x, y);
//
// y = 100;
// console.log(x, y);
//
// x = 50;
// console.log(x, y);

// let user1 = {name: 'kokos'};
// let user2 = user1;
// console.log(user1, user2);
//
// user2.name = 'abrykos';
// console.log(user1, user2);
// console.log(user1 === user2);
//
// let user3 = {name: 'kokos'};
// console.log(user1 === user3);


//з лекції
// let arr =[123, 234, 345, -123, 0, true, 'asiugahd'];
// console.log(arr);
// console.log(arr[0]);
// console.log(arr[2]);
// console.log(arr[4]);
// console.log(arr.length);
//
// arr[0] = 'new value'
// console.log(arr);
// arr[7] = 'okten';
// console.log(arr);

// let v1 = 3;
//
// let enginesvalue = [v1, 3.6, 4.2];
// console.log(enginesvalue);
//
// console.log(enginesvalue[2]);
//
// enginesvalue[3] = 4.5;
// console.log(enginesvalue);
//
// enginesvalue[2] = 4.8
// console.log(enginesvalue);
//
// enginesvalue[9] = 'ttt'
// console.log(enginesvalue);
//
// console.log(enginesvalue.length);
//
// let round = Math.round(enginesvalue.length/2);
// console.log(round);

// let rap = ['coolio', '2pac', 'eminem', 'snoop dog'];
// let rock = ['quenn', 'pink floyd', 'acdc'];
//
// let music =[rap, rock];
// console.log(music);
//
// console.log(music[0][1]);


// let user1 = {
//     name: 'vasyl',
//     age: 31,
//     status: true
// };
//
// console.log(user1)
//
// let car = {
//     producer: 'porsche',
//     model: 'cayenne',
//     volume: 3.6,
//     turbo: false,
//     wheels: [21, 21, 21, 21]
//
// };
//
// console.log(car);
//
// console.log(car.model);
// console.log(car['model']);
//
// console.log(car.wheels);
// console.log(car['wheels']);

// let car = {
//     producer: 'porsche',
//     model: 'cayenne',
//     volume: 3.6,
//     turbo: false,
//     wheels: [
//         {radius: 21, producer: 'toyo', side: 'front'},
//         {radius: 21, producer: 'toyo', side: 'front'},
//         {radius: 22, producer: 'nokian', side: 'back'},
//         {radius: 22, producer: 'nokian', side: 'back'}
//     ]
// };
//
// console.log(car['wheels'][0]['producer']);
// console.log(car.wheels[0].producer);

// let x = 100;
// let y = x;
// console.log(x, y);
//
// y = 200;
// console.log(x, y);
//
// x = 300;
// console.log(x, y);


let arr1 = [];
let arr2 = arr1;

arr2 [0] = 'hello';
console.log(arr1);
console.log(arr2);

// arr1[0] = 20;
// console.log(arr1);
// console.log(arr2);

// let cat ={};
// let cat2 = cat;
// cat2.name ='koko';
// cat2['age'] = 2;
//
// console.log(cat2);
// console.log(cat);
//
// cat['name'] = 'kit'
// cat.age = 10;
// console.log(cat2);
// console.log(cat)
