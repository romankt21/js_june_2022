// let str = 'hello okten';
// console.log(str);
// console.log(str[0]);
// console.log(str.length);
// for (const strElement of str) {
//     console.log(strElement);
// }
//
// let s = new String('ggh');
// console.log(typeof s);

// let str = 'hello Okten';
 // let s = str.concat('!!!');
//  console.log(s)
//


// console.log(str.toUpperCase());
// console.log(str.toLowerCase());
// console.log(str.startsWith('he'));
// console.log(str.startsWith('llo', 2));
// console.log(str);


// console.log(str.endsWith('en'));


// console.log(str.substring(0, 7));



// console.log(str.indexOf('h'));
// console.log(str.lastIndexOf('o'));
// console.log(str.indexOf('e', 5));

// let userInfo = 'vasyl-31';
// let indexOfTyre = userInfo.indexOf('-');
// let name = userInfo.substring(0, indexOfTyre);
// console.log(name);
//
// let age = userInfo.substring(indexOfTyre+1, userInfo.length);
// console.log(age);



// console.log(str.charAt(8));
//  console.log(str.replace('e', '!'));
// console.log(str.replaceAll('e', '!'));
// let split = str.split(' ');
// console.log(split);
// let userInfo2 = 'petro-33:186:90-'
// console.log(userInfo2.split(/[-:]/));


// console.log(str.includes('ok'));


// let arr = [];
// console.log(typeof arr);
// console.log(typeof {});
// console.log(Array.isArray());
// console.log(Array.isArray(arr));
//
// arr[arr.length] = 100;
// arr[arr.length] = 'asd';
//
// arr.push('new element');
// arr.push('new element2');
// arr.push('new element3');
// console.log(arr);
//
//
// console.log(arr.pop());
// console.log(arr);
//
// arr.unshift('first element');
// console.log(arr);
//
// console.log(arr.unshift('first element'));
//
// arr.shift();
// console.log(arr);
// console.log(arr.shift());
//
// let join = arr.join(';-');
// console.log(join);
//
// let nums = [11, 22, 33];
//
// let concat = arr.concat(nums);
// console.log(concat);
//
// let concat2 = nums.concat(arr);
// console.log(concat2);
// let users1 = [
//     {name: 'ivan', age: 42},
//     {name: 'pero', age: 20}
//     ];
//
// let num1 = [1, 2, 3,];
// let concat3 = users1.concat(num1);
// console.log(concat3);

// let users1 = [
//     {name: 'ivan', age: 42},
//     {name: 'pero', age: 20}
//     ];
//
//
// let concat3 = users1.concat(1, 2, 3);
// console.log(concat3);



// console.log(arr);
// console.log(nums);
//
// console.log(nums.reverse());
//
// console.log(concat);
// let slice = concat.slice(0, 4);
// console.log(slice);
// console.log(concat);
//
// console.log('-----------');
//
// console.log(concat);
// let splice = concat.splice(3, 2, 'q', 'w', 'e');
// console.log(splice);
// console.log(concat);

// let arr = ['num1', 'num2', 'num3', 11, 22, 33,]
// let splice1 = arr.splice(1, 1, -20, 'l');
// console.log(splice1);
// console.log(arr)




//console.log(concat.indexOf(11));


// let splice2 = concat.splice(concat.indexOf(11),2);
// console.log(concat);
// console.log(splice2);

// console.log(concat.includes(11));


// let users = [
//     {name: 'vasyl', age: 31, status: false},
//     {name: 'petro', age: 30, status: true},
//     {name: 'mykola', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'ganna', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andriy', age: 29, status: true},
//     {name: 'maria', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true},
// ]



// users.forEach(function (value,index,array){
//     console.log(value, index)
//     // console.log(array)
// });
// users.forEach(value => console.log(value));

// let filterUsers = users.filter(function (value){
//     return value.age > 30;
// });
// console.log(filterUsers);
//
//
let users = [
    {name: 'vasyl', age: 31, status: false},
    {name: 'petro', age: 30, status: true},
    {name: 'mykola', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'ganna', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andriy', age: 29, status: true},
    {name: 'maria', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true},
]
let  cars = [
    {model: 'renault', year: '2010'},
    {model: 'zaz', year: '2003'},

]


// let asd = function (x) {
//     console.log('hello', x)
// }
//
// users.forEach(asd);

// let asd = function (x) {
//     if (x.status == false) {
//     console.log('hello', x)
//     }
// }
//
// users.forEach(asd);
//
//
// let arr = function (car) {
//     console.log(car)
// }
//
// cars.forEach(asd)



//
// console.log('---------------')
//
// users.forEach(function (y){
//     console.log('hello', y)
// });

// console.log('------------')
// users.forEach((user) => {
//     console.log(user)}
//
// );

// console.log('------------')
// users.forEach((user) => {
//         if (user.age > 30) {
//             console.log(user)
//         }
//     }
// );




// let filterUsers = users.filter(value => value.age > 30);
// console.log(filterUsers);

// let mapeUsers = users.map(function (value, index){
//     return  {
//         name: value.name,
//         age: value.age,
//         status: value.status,
//         id: index + 1
//     }
//
// });
// console.log(mapeUsers);

// let map = users.map(user => ({name:user.name, age: user.age}));
// console.log(map);

// let map = users.map((user, index) => ({name: user.name, age: user.age, status: user.status, id: index + 1}));
// console.log(map)
//
// let map1 = users.map((user, index) => ({...user, id: index +1}));
// console.log(map1);

// let find = users.find(value => value.name === 'max');
// console.log(find);

// let every = users.every(value => value.status);
// console.log(every);
//
// let some = users.some(value => value.status);
// console.log(some);


// let sort = users.sort((u1, u2) =>{
//     return u1.age - u2.age
// });
// console.log(sort);

// let sort = users.sort((u1, u2) =>{
//     return u2.age - u1.age
// });
// console.log(sort);

// console.log(users.sort((a, b) => {
//     if (a.name > b.name) {
//         return 1;
//     }
//     if (a.name < b.name) {
//         return -1;
//     }
//     if (a.name === b.name) {
//         return 0;
//     }
//
// }));

// console.log(users.sort((user1, user2) => user1.name.length - user2.name.length));
// console.log(users.sort((a, b) => {
//     if (a.name < b.name) {
//         return 1;
//     }
//     if (a.name > b.name) {
//         return -1;
//     }
//     if (a.name === b.name) {
//         return 0;
//     }
//
// }));


// let reduce = users.reduce((accumulator, user) => {
//    if (user.status) {
//        accumulator.statT.push(user);
//    } else {
//        accumulator.statF.push(user);
//    }
//    return accumulator;
// },{statT:[], statF:[]});
//
// console.log(reduce);

// let users = [
//     {name: 'vasyl', age: 31, status: false},
//     {name: 'petro', age: 30, status: true},
//     {name: 'mykola', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'ganna', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andriy', age: 29, status: true},
//     {name: 'maria', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true},
// ]
//
//
// function filter (array, predicatefn) {
//     let filterArr = [];
//     for (const item of array) {
//         if (predicatefn (item)) {
//             filterArr.push(item)
//         }
//
//     }
//     return filterArr;
// }
//
// console.log(filter(users, (item) => item.status));
// console.log(filter(users, (item) => item.age > 30));
// console.log(filter(users, (item) => item.name === 'max'));
//
// let products = [
//     {
//         title: 'milk',
//         price: 22,
//         image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
//     },
//     {
//         title: 'juice',
//         price: 27,
//         image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
//     },
//     {
//         title: 'tomato',
//         price: 47,
//         image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
//     },
//     {
//         title: 'tea',
//         price: 15,
//         image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
//     }
//     ];
//
// console.log(filter(products, (value) => value.price > 15));

