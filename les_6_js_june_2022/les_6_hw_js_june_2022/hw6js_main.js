// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'


// let str1 = 'hello world';
// console.log(str1.length);
//
// let str2 = 'lorem ipsum';
// console.log(str2.length);
//
// let str3 = 'javascript is cool';
// console.log(str3.length);


// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

// let str1 = 'hello world'
// console.log(str1.toUpperCase());
//
// let str2 = 'lorem ipsum';
// console.log(str2.toUpperCase());
//
// let str3 = 'javascript is cool';
// console.log(str3.toUpperCase());


// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

// let str1 = 'HELLO WORLD'
// console.log(str1.toLowerCase());
//
// let str2 = 'LOREM IPSUM';
// console.log(str2.toLowerCase());
//
// let str3 = 'JAVASCRIPT IS COOL';
// console.log(str3.toLowerCase());



// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

// let str = ' dirty string   '
// let trim = str.trim();
// console.log(trim);



// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// //let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
//
// let splitStr = str.split();
// console.log(splitStr);
// console.log(Array.isArray(splitStr));



// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку
// перетворити всі об'єкти в масиві на стрінгові.

let numbers = [10,8,-7,55,987,-1011,0,1050,0]

let mapeNumbers = numbers.map(function (value){
    return {name: value.name}
})
console.log(mapeNumbers);

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



// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує
// його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
//
//
// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
//
// описати колоду карт
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
//
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
//
//
// Додатково по reduce
// Взяти описану колоду карт, та за допомоги редюсу попакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }
// Footer
// © 2022 GitHub, Inc.
//     Footer navigation
// Terms
// Privacy
// Securi