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
// document.write(`<div>${users[0].name} ${users[0].age} ${users[0].status}</div>`)
// document.write(`<div>${users[1].name} ${users[1].age} ${users[1].status}</div>`)
//
// for (let i = 0; i < users.length; i++) {
//     document.write(`<div>${users[i].name} ${users[i].age} ${users[i].status}</div>`)
// }
//
// for (let i = 1; i < users.length-1; i++) {
//     document.write(`<div>${users[i].name} ${users[i].age} ${users[i].status}</div>`)
// }
//
//
//     for (let i = users.length - 1; i >= 0; i--) {
//         const user = users[i];
//         document.write(`<div>${user.name} ${user.age} ${user.status}</div>`)
//     }
//
//
// // let x = 0;
// // let y = x++;
// // console.log(x, y)
//
//
// let x = 0;
// let y = ++x;
// console.log(x, y)
//
// let x = 0;
// x = x + 1;
// x = x * 2;
//
// let x = 0;
// x += 500;
// console.log(x)


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

// for (let user of users) {
//     document.write(`<div>${user.name} ${user.age} ${user.status}</div>`)
// }

// let i = 0;
// while (i < users.length) {
//     let user = users [i]
//     document.write(`<div>${user.name} ${user.age} ${user.status}</div>`)
//     i++;
//
// }

// do {
//     console.log('qwer')
// }  while (false)


// let user = {name: 'vasyl', age: 31, status: false, email: 'rt'};
// for (let userKey in user) {
//     // console.log(userKey);
// console.log(userKey, user[userKey]);
// }

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
for (const user of users) {
    document.write('<ol>');
    for (const userKey in user) {
        document.write(`<li>${userKey}- ${user[userKey]} </li>`)
    }
    

    document.write('</ol>');
}
