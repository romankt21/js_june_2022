// //- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
//
// for (let i = 0 ; i < 10; i++) {
//     document.write(`<div> text</div>`)
// }
//
// // - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
// for (let i = 0; i <10; i++) {
//     document.write(`<div> text ${i} </div>`)
// }
//
// // - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// let i = 0;
//     while (i < 20) {
//     document.write(`<h1> title </h1>`)
// i++
// }
//
//
// // - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
// let i = 0;
// while (i < 20) {
//     document.write(`<h1> title ${i}</h1>`)
//     i++
// }
//
// //
// // - Використовуючи данні з масиву, за допомоги document.write та циклу
// // побудувати структуру по шаблону
// // Масив:
// //
// //     let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
// //
// // ШАБЛОН:
// //     <ul>
// //         <li>ITEM OF ARRAY</li>
// //         <!--
// //             і тд інші об'єкти масиву
// //              ...
// //              ...
// //              ...
// //         -->
// //     </ul>
// //
// // замість 'ITEM OF ARRAY' підставити елемент з масиву щоб получився цілий список з даними з масиву
// //
// // -----------------------------------------------
//
//
// let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
// document.write(`<ul>`)
// for (const list of listOfItems) {
//     document.write(`<li>${list}</li>`)
//  }
// document.write(`<ul>`)
//
// //     Використовуючи данні з масиву, за допомоги document.write та циклу
// // побудувати структуру по шаблону  Зробити адекватну стилізацію
// // Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон
//
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
//     },
// ];
//
// // ШАБЛОН
// // <div class="product-card">
// //     <h3 class="product-title">TITLE. Price - PRICE</h3>
// //
// // </div>
// // Замість TITLE PRICE IMAGE - підставити відповідні поля з об'єкту
//
// for (const product of products) {
//     document.write(
//         `<div class="product-card">
// <h3 class="product title">${product.title} Price - ${product.price}</h3>
// <img src ="${product.image}" alt="image products"
//
//
// </div>`)
// }
//
//
//
//
//
// // --------------------
// //     є масив
// // let users = [
// //     {name: 'vasya', age: 31, status: false},
// //     {name: 'petya', age: 30, status: true},
// //     {name: 'kolya', age: 29, status: true},
// //     {name: 'olya', age: 28, status: false},
// //     {name: 'max', age: 30, status: true},
// //     {name: 'anya', age: 31, status: false},
// //     {name: 'oleg', age: 28, status: false},
// //     {name: 'andrey', age: 29, status: true},
// //     {name: 'masha', age: 30, status: true},
// //     {name: 'olya', age: 31, status: false},
// //     {name: 'max', age: 31, status: true}
// // ];
// // за допомоги циклу вивести:
// //     - користувачів зі статусом true
// // - користувачів зі статусом false
// // - користувачів які старші за 30 років
//
//
//
// for (const user of users) {
//     if (user.status) {
//         console.log(user);
//
//     }
//     if (!user.status) {
//         console.log(user)
//     }
// if (user.age > 30) {
//     console.log(user)
// }
// }
//
//
//
//
// // additional
// //
// // --створити масив з:
// //     - з 5 числових значень
// // - з 5 стічкових значень
// // - з 5 значень стрічкового, числового та булевого типу
// // - та вивести його в консоль
// //
// // -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
//
// let arrayNumber = [0, 5, -20, 555, -200];
// console.log(arrayNumber);
//
//
// let arrayString = ['hello', 'ok', 'september', 'Ukraine', 'car'];
// console.log(arrayString);
//
//
// let arrayMix = [22, 'ok', 'september', 14, true];
// console.log(arrayMix);
//
// // - є масив [2,17,13,6,22,31,45,66,100,-18] :
//
//
// let array = [2,17,13,6,22,31,45,66,100,-18];
//
// // 1. перебрати його циклом while
// let i = 0;
// while (i < array.length) {
//     console.log(array [i])
//    i++
// }
//
//     // 2. перебрати його циклом for
// for (const number of array) {
//     console.log(number)
// }
//
//
// // 3. перебрати циклом while та вивести  числа тільки з непарним індексом
// let i = 0;
// while (i < array.length) {
//     if (i % 2 !==0) {
//         console.log(array[i])
//     }
//     i++
// }
//
// // 4. перебрати циклом for та вивести  числа тільки з непарним індексом
// for (let i = 0; i < array.length; i++) {
//     const arrayElement = array[i];
//     if (i % 2 !== 0) {
//         console.log(arrayElement)
//     }
// }
//
//
// // 5. перебрати циклом while та вивести  числа тільки парні  значення
// let i = 0;
// while (i < array.length) {
//     if (i % 2 === 0) {
//         console.log(array[i])
//     }
//     i++
// }
//
//
// // 6. перебрати циклом for та вивести  числа тільки парні  значення
// for (let i = 0; i < array.length; i++) {
//     if (i % 2 === 0 ) {
//         console.log(array[i])
//     }
// }
//
// // 7. замінити кожне число кратне 3 на слово "okten"
//
// for (let i = 0; i < array.length; i++) {
//     if (i % 3 === 0) {
//         array[i] = "okten";
//         console.log(array[i])
//     }
// }
// console.log(array);
//
// // 8. вивести масив в зворотньому порядку.
// for (let i = array.length-1; i >= 0; i--)  {
//     console.log(array[i])
// }
//
//
// // 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
//
// // 1. перебрати його циклом while
// let i = array.length-1;
// while (i >= 0) {
//     console.log(array [i])
//    i--
// }
//
//
//
//
//
// // 3. перебрати циклом while та вивести  числа тільки з непарним індексом
// let i = array.length-1;
// while (i >= 0) {
//     if (i % 2 !==0) {
//         console.log(array[i])
//     }
//     i--
// }
//
//
//
// // 4. перебрати циклом for та вивести  числа тільки з непарним індексом
// for (let i = array.length-1; i >= 0 ; i--) {
//     const arrayElement = array[i];
//     if (i % 2 !== 0) {
//         console.log(arrayElement)
//     }
// }
//
//
// // 5. перебрати циклом while та вивести  числа тільки парні  значення
// let i = array.length-1;
// while (i >= 0 ) {
//     if (i % 2 === 0) {
//         console.log(array[i])
//     }
//     i--
// }
//
//
// // 6. перебрати циклом for та вивести  числа тільки парні  значення
// for (let i = array.length-1; i >= 0 ; i--) {
//     if (i % 2 === 0 ) {
//         console.log(array[i])
//     }
// }
//
// // 7. замінити кожне число кратне 3 на слово "okten"
//
// for (let i = array.length-1; i >= 0 ; i--) {
//     if (i % 3 === 0) {
//         array[i] = "okten";
//         console.log(array[i])
//     }
// }
// console.log(array);
//
//
//
// // - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
// // - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
// // - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
//
// let array = ['a', 'c', 'c'];
// let str = '';
// for (let i = 0; i < array.length; i++) {
//     str += array[i]
//
// }
// console.log(str)
// console.log(typeof str)
//
//
// let array = ['a', 'b', 'c'];
// let i = 0;
// let str ='';
// while (i < array.length) {
//     str += array[i]
//     i++
// }
// console.log(str)
//
//
// let array1 = ['a', 'b', 'c'];
// let j = array1.length - 1;
// let str1 = '';
// while (j >= 0) {
//
//     str1 += array1[j]
//         j--;
// }
// console.log(str1)
// let array = ['a', 'b', 'c'];
// let str = '';
// for (let element of array) {
//        str += element;
//     console.log(str);
// }
//
//
// // стоврити масив книжок (назва, кількість сторінок, автори , жанри).
// // -знайти наібльшу книжку.
// // - знайти книжку/ки з найбільшою кількістю жанрів
// // - знайти книжку/ки з найдовшою назвою
// // - знайти книжку/ки які писали 2 автори
// // - знайти книжку/ки які писав 1 автор
//
//
// let arrOfBooks = [
//     {
//         name: 'Alice in Wonderland',
//         pages: 256,
//         author: ['Lewis Carroll'],
//         genre: ["Children's literature", 'fantasy', "literature of the absurd"]
//     },
//     {
//         name: 'Cinderella',
//         pages: 134,
//         author: ['Charles Perrault', 'Brothers Grimm'],
//         genre: ["Fairy tale", "Children's literature", 'uu', 'pp']
//     },
//     {
//         name: 'Harry Potter',
//         pages: 452,
//         author: ['Joanne Rowling'],
//         genre: ['fantasy']
//     }
// ]
//
// let numberOfPage = arrOfBooks[0];
// for (const elementarrOfBook of arrOfBooks) {
//     if (elementarrOfBook.pages > numberOfPage.pages) {
//         numberOfPage = elementarrOfBook;
//     }
// }
// console.log(`найбільша книжка:' ${numberOfPage.name}`);
// document.write(`<div>${numberOfPage.name}</div>`);
//
//
//
// let numberOfGenre = arrOfBooks[0];
// for (const elementarrOfBook of arrOfBooks) {
//     if (elementarrOfBook.genre.length > numberOfGenre.genre.length) {
//         numberOfGenre = elementarrOfBook
//     }
// }
//     console.log(`книжка з найбільшою кількістю жанрів:' ${numberOfGenre.name} кількість жанрів: ${numberOfGenre.genre.length}`);
//
//
// let numberOfName = arrOfBooks[0];
// for (const elementarrOfBook of arrOfBooks) {
// if (elementarrOfBook.name.length > numberOfName.name.length) {
//     numberOfName = elementarrOfBook
// }
// }
// console.log(`книжка з найдовшою назвою:' ${numberOfName.name}, кількість сторінок ${numberOfName.name.length}`);
//
// for (const elementarrOfBook of arrOfBooks) {
// if (elementarrOfBook.author.length >= 2) {
// console.log(`${elementarrOfBook.name} цю книжку написали два автори`);
// } if (elementarrOfBook.author.length === 1) {
//     console.log(`${elementarrOfBook.name} цю книжку написав один автор`)
// }
// }
