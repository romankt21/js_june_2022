// console.log(1);
// setTimeout(() => {
//     console.log(2)
// }, 0);
// console.log(3);


let money = 0;

function goWork(isWorkingDay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isWorkingDay) {
                money += 500
                resolve(money)
                reject('вихідний')
            } else {
                console.log('вихідний')
            }
        }, 800);
    })

}

function goToCroatia(money) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (money < 800) {
                console.log('No money no honey')
                reject('поїду в село')
            } else {
                console.log('swiming all day');
                money -= 600
                resolve(money);
            }
        }, 400)
    })
}

function buySouvenirs(money) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (money < 300) {
                console.log('просто фотки')
                reject('не було грошей')
            } else {
                console.log('купив магнітика');
                money -= 250
                resolve(money)
            }
        }, 1000)
    })
}

// //goWork(true)
//    // .then(payment => {
//     //    console.log(`я отримав ${payment} за робочий день`)
//    //     return 'THEN321'
//    // })
//   //
//   //  .then((str) => {
//     //    console.log(str, 'IN SECOND THEN')
//  //
//     //    return 'THEN 2'
//    // })
//     //.then((s) => {
//     //    console.log(s)
//   //  })


// goWork(true)
//     .then(payment => {
//         console.log(`я отримав ${payment} за робочий день`)
//
//         return goToCroatia(money)
//     })
//
//     .then(moneyAfterTrip => {
//         console.log(`Після подорожі я буду мати ${moneyAfterTrip}`)
//         return buySouvenirs(money)
//     })
//     .then(moneyAfterShoping => {
//         console.log(`я маю ${moneyAfterShoping} після вихідного`)
//     })
//     .catch(reason => {
//         console.warn('ой ', reason)
//     })
//     .finally (() => {
//         console.log('finaly');
//     })


// async function vacation () {
//     try {
//         const payment = await goWork (true);
//         console.log(payment, 'payment');
//
//         const moneyAfterTrip = await goToCroatia(payment);
//         console.log(moneyAfterTrip, 'moneyAfterTrip');
//
//         const moneyAfterShoping = await buySouvenirs(moneyAfterTrip);
//         console.log(moneyAfterShoping, 'moneyAfterShoping')
//
//     } catch(e) {
//         console.warn('ой', e)
//
//     }
//
// }
//
// vacation()


// async function vacation (isWorkingDay) {
//     try {
//         const payment = await goWork (isWorkingDay);
//         console.log(payment, 'payment');
//
//         const moneyAfterTrip = await goToCroatia(payment);
//         console.log(moneyAfterTrip, 'moneyAfterTrip');
//
//         const moneyAfterShoping = await buySouvenirs(moneyAfterTrip);
//         console.log(moneyAfterShoping, 'moneyAfterShoping')
//
//     } catch(e) {
//         console.warn('ой', e)
//
//     }
//
// }

// vacation(false);
// vacation(true);

const one = new Promise(resolve => {
    setTimeout(()=>{
        resolve(1)
    },2000)

})

const two = new Promise(resolve => {
    setTimeout(()=>{
        resolve(2)
    }, 1000)

});

const three = new Promise(resolve => {
    setTimeout(()=>{
        resolve(3)
    }, 2000)

})

// Promise.all([one, two, three])
//     .then(value => {
//     console.log(value);
// })
// // Promise.all([one, two, three]).then(value2 => {
// //     console.log(value2)
//
// // })
// .catch(e => {
//
//     console.warn(e)
// })

// Promise.allSettled([one, two, three])
//
//     .then(value => {
//         console.log(value);
//     })
//
//     .catch(e => {
//
//         console.warn(e)
//     })

Promise.race([one, two, three])

    .then(value => {
        console.log(value);
    })
