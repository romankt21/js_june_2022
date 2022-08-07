// function writer(text) {
//     document.write(`<div>${text}</div>`);
// }
// writer('hello');
// writer('okten');

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
// ];
//
// let products = [
//     {
//         title: 'milk',
//         price: 22,
//         image: 'https://img2.zakaz.ua/1.1612232018.ad72436478c_2021-02-03_Tatyana_L/1.1612232018.SNCPSG10.obj.0.1.jpg.oe.jpg.pf.jpg.350nowm.jpg.350x.jpg'
//     },
//     {
//         title: 'juice',
//         price: 27,
//         image: 'https://aquamarket.ua/65083-large_default/galicia-yabluchno-grushevij-02-l-galichina-sik-naturalnij-bez-dodavannya-cukru.jpg'
//     },
//     {
//         title: 'tomato',
//         price: 47,
//         image: 'https://florium.ua/media/catalog/product/cache/1/file/9df78eab33525d08d6e5fb8d27136e95/_/_/__1_1_68.jpg'
//     },
//     {
//         title: 'tea',
//         price: 15,
//         image: 'https://images.prom.ua/668543501_chaj-chernyj-zavarnoj.jpg'
//     },
// ];
//
// function arrayPrinter (array) {
//     for (const item of array) {
//         console.log(item)
//     }
//
// }
// arrayPrinter(users);
// arrayPrinter(products)

// function sumTwoNumbers (a, b) {
//     return res= a +b;
// }
//
// console.log(sumTwoNumbers(100,200));

// function tax(sum, taxBound) {
//     return sum - (sum/100 * taxBound);
// }
//
// let sallaryWithoutPDFO = (tax(10000, 20));
// console.log(sallaryWithoutPDFO);
// let sallaryWithoutPDFO_WarTax = tax(sallaryWithoutPDFO, 2);
// console.log(sallaryWithoutPDFO_WarTax);
// let result = tax(sallaryWithoutPDFO_WarTax, 5);
// console.log(result)


// function calculator (a, b, action) {
//     switch (action) {
//         case '+':
//             return a + b;
//         case '-':
//             return a - b
//     }
// }
// console.log(calculator(10, 20, '+'));
// console.log(calculator(10, 20, '-'));

// function calculator (a, b, action) {
//     let res
//     switch (action) {
//         case '+':
//             res = a + b;
//             break;
//         case '-':
//             res = a - b
//             break;
//
//         default:
//             res = 0;
//
//     }
//     return res;
// }
// console.log(calculator(10, 20, '+'));
// console.log(calculator(10, 20, '-'));


// function foo() {
//     console.log(arguments);
// }
//
// foo(1, 2, 3, 4, 5, 'asd', true);

// function upgrateCalc() {
//     let res = 0;
//     switch (arguments[0]) {
//         case '+':
//
//             for (let i = 1; i < arguments.length; i++) {
//                 const num = arguments[i];
//                 res += num;
//             }
//             break;
//             case '-':
//
//             for (let i = 1; i < arguments.length; i++) {
//                 const num = arguments[i];
//                 res -= num;
//             }
//             break;
//     }
//     return res;
// }
//
// console.log(upgrateCalc('+', 1, 2, 3, 4));
// console.log(upgrateCalc('-', 1, 2, 3, 4));

// let calc = () => {}

// let calc = (a, b) => {
//     return a + b;
// }
//
// console.log(calc(10, 20));

// console.log(asd());
// function asd () {
//     return 1000;
// };
// let qwe = () => {
//     return 2000;
// }
// console.log(qwe());

// let zxc = (a, b)=> a + b;
// console.log(zxc(10, 20));

// function foobar(a,b,c,...xxx) {
//     console.log(xxx)
//     console.log(a,b,c,xxx)
// }
// foobar(1,2,3,4,5,6);

// let asd = {
//     name: 'vasyl',
//     greeting: function () {
//         // console.log(this)
//         console.log(`hello my name is ${this.name}`)
//     },
//     vitannya: () => {
//         console.log(`hello my name is ${this.name}`)
//     }
// }
//  asd.greeting();
//
// asd.vitannya();

// console.log(Math.round(Math.random()*100));
// console.log(Math.floor(Math.random()*50));


//консультація
// const obj = {
//     name: 'Max',
//     getname: function () {
// console.log(this.name);
//       return this.name
//     }
// }
//
// console.log(obj.getname());

//поміняти числа місцями
// let arr = [1, 2, 3, 4];
//
// let swap = (array, index) => {
//     let tmp = array[index];
//     array[index] = array[index+1]
//     array[index+1] = tmp
//     return arr
// }
//
// console.log(swap(arr, 1))

// //знайти найменше число масиву
// let arr = [1, 5, 2, -12, 45];
// let findMin =  (array) => {
//     let minnumber = array[0]
//     for (let item of array) {
//         if (item < minnumber) {
//             minnumber = item
//         }
//
//     }
//   return minnumber
// }
//
// console.log(findMin(arr));

// let a = 5;
// console.log(a)
// a += 5;
// console.log(a)

// let arr1 = [];
// for (let i = 0; i < 10; i++) {
//     arr1[i] =Math.round(Math.random()*100);
//     }
// let arr2 = [];
// for (let i = 0; i < arr1.length; i++) {
//     arr2[i] = arr1[i]*5;
//
// }
// console.log(arr1);
// console.log(arr2);

// let arr = [0, 2, 0, 2, 6, 0, 1];
// let res = [];
// let count = 0;
// let index = 0;
//
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === 0) {
//         count++
//     } else {
//         res[index++] = arr[i]
//     }
//
//
// }
// console.log(res);
// let zeroCount = res.length
// for (let i = 0; i < count; i++) {
//     res[zeroCount++]=0;
//
// }
// console.log(res);

let arr = [1, 2, 3]

console.log(arr.length);
arr [3] = 10;
console.log(arr);

let arr1 = [1, 2, 3]
arr[arr1.length] = 5;
console.log(arr1);
