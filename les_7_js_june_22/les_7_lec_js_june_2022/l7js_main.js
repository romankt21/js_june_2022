// let a = 10;
// let a = 2;
// console.log(a);


// console.log(b);

// let user = {};
// user.xxx();
// let a = 10;
// console.log('hello');
// try {
// console.log(a);
//
// } catch (e) {
//     console.error(e);
// }
// finally {
//     console.log('finally block')
// }
// console.log(5);


// function calc (a, b) {
//     if (b === 0) {
//         throw new Error ('b is zero! fail');
//     }
//     return a / b;
// }
// calc(10,0);

// function calc1 (a, b) {
//     if (b === 0) {
//         throw new Error ('b is zero! fail');
//     }
//     return a / b;
// }
// try {
//     calc1(10,0);
// } catch (e) {
//     console.log(calc1(10, 1))
// }

// let user = {
//     name : {}
// };
//
// user?.name?.fn;

// let name = 'vasyl';
// let  age = 31;
// let user ={
//     name: name,
//     age: age,
// }
// console.log(user);

// let name = 'vasyl';
// let  age = 31;
// let user ={
//     name,
//     age,
//     foo() {
//         console.log(this);
//     },
// }
// console.log(user);
// user.foo();

// let name = 'vasyl';
// let  age = 31;
// let user ={
//     name,
//     age,
//     foo() {
//         console.log(this);
//     },
// }
// console.log(user);
// user.foo();

// let user = {
//     name: 'vasyl',
//     age: 31,
//     foo() {
//         console.log('foo');
//     },
// };

// let {age, name} = user;
// console.log(name);
// console.log(age);
//
// function asd ({name}) {
//     console.log(name)
// }
//
// asd({a: 'afghhh', name: 'zoryana'})

// let user = {
//     name: 'vasyl',
//     age: 31,
//     foo() {
//         console.log(this);
//     },
//     wife : {
//         name: 'anna',
//         age: 20,
//     }
// };
//
// let {name:userName, age:userAge, wife:{name:wifeName, age:wifeAge}, wife:wifeUser} = user;
//
// console.log(userName, userAge, wifeName, wifeAge, wifeUser);


// let numbers = [11, 22, 33];
// let [a, b] = numbers;
// console.log(a, b);

// let [a, , c] = numbers;
// console.log(a, c);

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
// let [user1, user2] =users;
// // let {name, age, status} = user1;
// console.log(user1.name);
// console.log(user2);

// //spred operator

// let user = {
//     name: 'vasyl',
//     age: 32,
//     wife: {
//         name: 'anna'
//     }
// };
// let user2 = user;
// let user3 = {
//     name: 'vasyl',
//     age: 32,
// };
// console.log(user === user2);
// console.log(user === user3);
// console.log(user2 === user3);
//
//
// let userCopy = {...user};
// console.log(userCopy);
// console.log(userCopy === user);
// let userCopy2 = {...user, name: 'ivan'};
// console.log(userCopy2);
//
// console.log(user.wife === userCopy.wife);
// userCopy.wife.name = 'olga'
// console.log(userCopy.wife);
// console.log(userCopy2.wife);
// console.log(user.wife)


// let nums = [11, 22, 33];
// let nums2 = nums;
// console.log(nums === nums2);
//
// let nums3 = [...nums];
// console.log(nums === nums3);
// nums3.push(44);
// console.log(nums3);
// console.log(nums);

// // shallow and deep copy – поверхнева і глибока копія


// let user = {
//     name: 'vasyl',
//     skils: ['html', 'js'],
// };

// let userClone = {...user};
// console.log(user === userClone);
// console.log(user.skils === userClone.skils);
//
// userClone.skils.push('sql');
// console.log(user.skils);
// console.log(userClone.skils);

// let s = JSON.stringify(123);
// console.log(s);
// console.log(typeof s);

// let str = JSON.stringify(user);
// console.log(str);
// console.log(typeof str);
//
// let json = ' {"name": "vasyl", "skils": ["html", "js"],}'

// let userJSONClone = JSON.stringify(user);
// console.log(userJSONClone);
// let parse = JSON.parse('123');
// let parseBoolean = JSON.parse('true');
// console.log(parse);
// console.log(typeof parse);
// console.log(parseBoolean);
// console.log(typeof parseBoolean);

// let parseClone = JSON.parse(userJSONClone);
// console.log(parseClone);
// console.log(user);
//
// console.log(parseClone === user);
// console.log(parseClone.skils === user.skils);

// let user = {
//     name: 'vasyl',
//     skils: ['html', 'js'],
//     greeting: function () {
//
//     },
// };

// let userJSONClone = JSON.stringify(user);
// console.log(userJSONClone);
// let parseClone = JSON.parse(userJSONClone);
// console.log(parseClone);
// console.log(user);
// let user = {
//     name: 'vasyl',
//     age: 31,
//     wife: {
//         name: 'anna'
//     }
// };
//
// let kokos = {
//     ...user,
//     status: true,
//     name: 'kokos',
// };
// console.log(user === kokos);
// console.log(user.wife === kokos.wife);
// console.log(user.wife.name === kokos.wife.name);

// let userJSON = JSON.stringify(user);
// console.log(userJSON);
// let parseUser = JSON.parse(userJSON);
// console.log(parseUser);
// console.log(parseUser === user);
// console.log(parseUser.wife === user.wife);
// let parseUser = JSON.parse(JSON.stringify(user));
// console.log(parseUser);

// let assign = Object.assign({}, user);
// console.log(assign);
// console.log(user);
// console.log(assign === user);
// console.log(assign.skils === user.skils);

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
//
// let users2 = [...users];

// console.log(users2);
// console.log(users2 === users);
// console.log(users2[0] === users[0]);

// let users3 = JSON.parse(JSON.stringify(users));
// console.log(users3);
// console.log(users3 === users);
// console.log(users3[0] === users[0]);


// //closures
// function asd () {
//     let x = 10;
//     function inner() {
//         return ++x;
//     }
//     return inner;
//
// }
//
// // console.log(asd()() )
// let foo = asd();
// console.log(foo());
// console.log(foo());
// console.log(foo());
// console.log(foo());


// let user = {name: 'vasyl', age: 12};
// user.age = -100500;

// function userBuilder (name, age) {
//     let user = {name, age};
//     return {
//         getName(index) {
//             return user.name;
//         },
//         getAge() {
//             return user.age;
//         },
//         setAge(age){
//             if (age > 0 ){
//                 user.age = age
//             }
//         },
//     }
//
// }
// let Builder = userBuilder('vasyl', 31);
// console.log(Builder)
//
// console.log(Builder.getAge());
// console.log(Builder.getName());
//
// Builder.setAge(100);
// console.log(Builder.getAge());
//
//
//
function userBuilder (name, age) {
    let user = {name, age};
    return {
        getName(index) {
            return user.name;
        },
        getAge() {
            return user.age;
        },
        setAge(age){
            if (age > 0 ){
                user.age = age
            }
        },
        info() {
            return {...user}
        }
    }

}
let Builder = userBuilder('vasyl', 31);
console.log(Builder)

console.log(Builder.getAge());
console.log(Builder.getName());

Builder.setAge(100);
console.log(Builder.getAge());


console.log(Builder.info());