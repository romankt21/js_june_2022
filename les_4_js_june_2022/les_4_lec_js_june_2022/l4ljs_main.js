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
//     console.log(users[i])
// }

// for (let i = 0; i < users.length; i++) {
//     let user = users[i];
//     document.write(`<div>${user.name} ${user.age} ${user.status}</div>`)
//     console.log(user)
// }

// for (let i = 0; i < users.length; i++) {
//     let user = users[i];
//     if (user.status) {
//         document.write(`<div>${user.name} ${user.age} ${user.status}</div>`)
//         console.log(user)
//     }
// }
//
// for (let i = 1; i < users.length-1; i++) {
//     if (i % 2 === 0) {
//         document.write(`<div>${users[i].name} ${users[i].age} ${users[i].status}</div>`)
//         console.log(users[i])
//     }
//     }
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

// // //debugger;
// for (let user of users) {
//     if (user.status){
//         console.log(user)
//
//     document.write(`<div>${user.name} ${user.age} ${user.status}</div>`)
//     }
// }


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
//     },
// ];


// for (const product of products) {
//     document.write(
//         `<div class="product">
// <h2>${product.title} ${product.title}</h2>
// <img src="${product.image}"
// </div>`)
//     console.log(product)
// }

// for (const product of products) {
//     if (product.price > 25) {
//         document.write(
//             `<div class="product">
// <h2>${product.title} ${product.title}</h2>
// <img src="${product.image}" alt="${product.title}"
// </div>`)
//         console.log(product)
//     }
// }


    //     document.write(
//         `<div class="product-card">
// <h3 class="product title">${product.title} Price - ${product.price}</h3>
// <img src ="${product.image}" alt="image products"
//
//
// </div>-->`)
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
// let i = 0;
// do {
//     console.log(users[i]);
//     i++;
//     } while (i < users.length)




// let user = {name: 'vasyl', age: 31, status: false};
// user.email = 'krok';
// console.log(user)
// for (let userKey in user) {
//   //  console.log(userKey);
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
        console.log(userKey,user[userKey]);
        document.write(`<li>${userKey}- ${user[userKey]} </li>`)
    }
    document.write('</ol>');
}
