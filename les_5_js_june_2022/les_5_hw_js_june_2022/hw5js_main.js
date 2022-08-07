// //- створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// function areaRectangle (a, b) {
//     return  a *b;
// }
//
// console.log(areaRectangle(5,4));
//
// let areaRectangleS = (c, d) => c *d
// console.log(areaRectangleS(10,20))


//- створити функцію яка обчислює та повертає площу кола з радіусом r
// function areaCyrcle (r) {
//     return 3.14 * r ** 2
// }
//     console.log(areaCyrcle(2));
//
// let areaCyrcleS = (r) => 3.14 * r ** 2;
// console.log(areaCyrcleS(2))

// //- створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

// function squareCylinder (r, h) {
//     return 2* 3.14 *  r * h
// }
//
// console.log(Math.round(squareCylinder(2, 10)));
//
// let squareCylinderS = (r, h) => 2 * 3.14 *  r * h;
//
// console.log(Math.round(squareCylinderS(2,10)))

// //- створити функцію яка приймає масив та виводить кожен його елемент

// let array = [1, 10, -200, 'ok', true];
//
// function itemArray (arr) {
//     for (const arrElement of arr) {
//         console.log(arrElement)
//     }
//
// }
// itemArray(array)

// //- створити функцію яка створює параграф з текстом. Текст задати через аргумент

// function paragraph (text) {
//     document.write(`<p> ${text}</p>`)
// }
// paragraph('some text')
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// function unList (text) {
//     document.write(`<ul>`)
//         document.write(`<li>${text}</li>`)
//         document.write(`<li>${text}</li>`)
//         document.write(`<li>${text}</li>`)
//     document.write(`</ul>`)
// }
// unList('some text')
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// function unList (text, i) {
//     document.write(`<ul>`);
//     for (let j = 0; j < i; j++) {
//
//         document.write(`<li>${text}</li>`)
//
//
//     }
//
//     document.write(`</ul>`)
//
//
// }
// unList('some text',3)

// // - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// let array = [1, 10, -200, 'ok', true];
// function arr (items) {
//     document.write(`<ol>`)
//     for (const item of items) {
//         document.write(`<li>${item}</li>`)
//     }
//
//     document.write(`<ol>`)
// }
// arr(array)


// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.
// let users = [
//     {id: 1, name: 'ivan', age: 20 },
//     {id: 2, name: 'mycola', age: 30 },
//     {id: 3, name: 'ira', age: 25 },
// ]
// function arrayUsers (items) {
//     for (const argument of items) {
//         document.write(`<div>${argument.id} ${argument.name} ${argument.age}</div>`)
//     }
// }
// arrayUsers(users)

// - створити функцію яка повертає найменьше число з масиву
// let arrayNumbers = [100, 300, 5, -20];
// function minNumber (numbers) {
//     let min = arrayNumbers[0];
//     for (const minElement of numbers) {
//         if (minElement < min) {
//             min = minElement
//         }
//     }
//     console.log( min)
// }
// minNumber(arrayNumbers)

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву
// та повертає його. Приклад [1,2,10]->13

let arrayNumbers = [1, 2, 3];
function sumNumbers (numbers) {
    let sum = arrayNumbers[0];
    for (let i = 1; i < numbers.length; i++) {
        sum += arrayNumbers[i]
    }
    console.log(sum);
}
sumNumbers (arrayNumbers);