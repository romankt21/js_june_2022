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

// let numbers = [10,8,-7,55,987,-1011,0,1050,0]
//
// let strings = numbers.map(value => value.toString());
// let strings = numbers.map(value => value + '');
// console.log(strings);





// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує
// його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

// let nums = [11,21,3];
// let sortNums =(arr, direction) => {
//     if (direction==='ascending') {
//         console.log([3,11,21])
//     } else if (direction === 'descending') {
//         console.log([21,11,3])
//     }
// }
//
// sortNums(nums,'descending')

//  // 2 спосіб
// let nums = [11,21,3];
// let sortNumsSec = (arr, direction) =>
// {
//     if (direction === 'ascending') {
//         arr.sort ((n1, n2) => n1 - n2 )
//     } else if (direction === 'descending') {
//         arr.sort ((n1, n2) => n2 - n1)
//     }
//     return arr;
// }
//
//     console.log(sortNumsSec( nums, 'ascending'));
//     console.log(sortNumsSec( nums, 'descending'));





//
// - є масив

// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
//
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// let sortCourse = coursesAndDurationArray.sort((m1, m2) => {
//     return (m1.monthDuration - m2.monthDuration)
//
// })
// console.log(sortCourse)
//
// let filterCourse = coursesAndDurationArray.filter(function (value){
//     return value.monthDuration > 5;
// });
//
// console.log(filterCourse)
//
// //  // стрілочна ф-ція
// let filterCourse2 = coursesAndDurationArray.filter (val => val.monthDuration > 5);
// console.log(filterCourse2)

//  // сам пробував
// let sortCourse = coursesAndDurationArray.sort((m1, m2) => {
//
// if (m1.title > m2.title) { return 1}
// else if (m1.title < m2.title) {return -1}
// else if (m1.title = m2.title) {return 0}
// })
//     console.log(sortCourse)



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

let deckOfCards = [
    {
        secondcolor: null,
        value: 'car',
        color: 'black'
    },

    {
        secondcolor: null,
        value: 'car',
        color: 'red'
    },

    {
       secondcolor: 'blue',
        value: 'one',
        color: 'black'
    },

    {
        secondcolor: 'blue',
        value: 'two',
        color: 'black'
    },

    {
        secondcolor: 'blue',
        value: 'three',
        color: 'black'
    },

    {
        secondcolor: 'blue',
        value: 'four',
        color: 'black'
    },

    {
        secondcolor: 'blue',
        value: 'five',
        color: 'black'
    },

    {
        secondcolor: 'blue',
        value: 'six',
        color: 'black'
    },


    {
        secondcolor: 'blue',
        value: 'seven',
        color: 'black'
    },

    {
        secondcolor: 'blue',
        value: 'eight',
        color: 'black'
    },
    {
        secondcolor: 'blue',
        value: 'nine',
        color: 'black'
    },
    {
        secondcolor: 'blue',
        value: 'ten',
        color: 'black'
    },


    {
        secondcolor: 'yellow',
        value: 'one',
        color: 'black'
    },

    {
        secondcolor: 'yellow',
        value: 'two',
        color: 'black'
    },

    {
        secondcolor: 'yellow',
        value: 'three',
        color: 'black'
    },

    {
        secondcolor: 'yellow',
        value: 'four',
        color: 'black'
    },

    {
        secondcolor: 'yellow',
        value: 'five',
        color: 'black'
    },

    {
        secondcolor: 'yellow',
        value: 'six',
        color: 'black'
    },


    {
        secondcolor: 'yellow',
        value: 'seven',
        color: 'black'
    },

    {
        secondcolor: 'yellow',
        value: 'eight',
        color: 'black'
    },
    {
        secondcolor: 'yellow',
        value: 'nine',
        color: 'black'
    },
    {
        secondcolor: 'yellow',
        value: 'ten',
        color: 'black'
    },

    {
        secondcolor: 'green',
        value: 'one',
        color: 'red'
    },

    {
        secondcolor: 'green',
        value: 'two',
        color: 'red'
    },

    {
        secondcolor: 'green',
        value: 'three',
        color: 'red'
    },

    {
        secondcolor: 'green',
        value: 'four',
        color: 'red'
    },

    {
        secondcolor: 'green',
        value: 'five',
        color: 'red'
    },

    {
        secondcolor: 'green',
        value: 'six',
        color: 'red'
    },


    {
        secondcolor: 'green',
        value: 'seven',
        color: 'red'
    },

    {
        secondcolor: 'green',
        value: 'eight',
        color: 'red'
    },
    {
        secondcolor: 'green',
        value: 'nine',
        color: 'red'
    },
    {
        secondcolor: 'green',
        value: 'ten',
        color: 'red'
    },
    {
        secondcolor: 'grey',
        value: 'one',
        color: 'red'
    },

    {
        secondcolor: 'grey',
        value: 'two',
        color: 'red'
    },

    {
        secondcolor: 'grey',
        value: 'three',
        color: 'red'
    },

    {
        secondcolor: 'grey',
        value: 'four',
        color: 'red'
    },

    {
        secondcolor: 'grey',
        value: 'five',
        color: 'red'
    },

    {
        secondcolor: 'grey',
        value: 'six',
        color: 'red'
    },


    {
        secondcolor: 'grey',
        value: 'seven',
        color: 'red'
    },

    {
        secondcolor: 'grey',
        value: 'eight',
        color: 'red'
    },
    {
        secondcolor: 'grey',
        value: 'nine',
        color: 'red'
    },
    {
        secondcolor: 'grey',
        value: 'ten',
        color: 'red'
    },


]

// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше

// let deckOfCardsCar = deckOfCards.find (val => val.value === 'car' && val.color === 'red');
// console.log(deckOfCardsCar);
//
// let deckOfCardsSix = deckOfCards.filter(val => val.value === 'six');
// console.log(deckOfCardsSix);
//
// let deckOfCardsRed = deckOfCards.filter (val => val.color === 'red');
// console.log(deckOfCardsRed)
//
// let deckOfCardsYellow = deckOfCards.filter(val => val.secondcolor === 'yellow');
// console.log(deckOfCardsYellow);
//
// let deckOfCardsBlueSix = deckOfCards.filter(val => val.secondcolor === 'blue' && (val.value === 'six' || val.value === 'seven' || val.value === 'eight' || val.value === 'nine' || val.value === 'ten'));
// console.log(deckOfCardsBlueSix);


// Додатково по reduce
// Взяти описану колоду карт, та за допомоги редюсу попакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }

let reduce = deckOfCards.reduce((accumulator, card) => {
    if (card.secondcolor === 'blue') {
        accumulator.secondcolorBlue.push(card)
    } else if (card.secondcolor === 'yellow') {
        accumulator.secondcolorYellow.push(card)
    } else if (card.secondcolor === 'green') {
        accumulator.secondcolorGreen.push(card)
    } else if (card.secondcolor === 'grey') {
        accumulator.secondcolorGrey.push(card)
    }



    return accumulator;

}, {secondcolorBlue: [], secondcolorYellow: [], secondcolorGreen: [], secondcolorGrey: []} )
// 1.31
//     else {
//         accumulator.statF.push(user);
//     }
//     return accumulator;
// },{statT:[], statF:[]});

console.log(reduce);


