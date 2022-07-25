// let music = ['qwe', 'asd', 'zxc'];
// console.log(music);
// console.log(music[2]);
// console.log(music[3]);
//
// music [3] = 'sdf';
// console.log(music[3]);
//
// music = ['hello', 'hi', 'qw', 145, [1, 78, 121]];
// console.log(music);
// console.log(music[4] [2]);

// let user = {
//     name: 'vasya',
//     age: 31,
//     status: true,
//     skills: ['html', 'js'],
//     wife: {
//         name: 'olya',
//         age: 22,
//         skills: ['react', 'python']
//     }
// };
// console.log(user);
// console.log(user.name);
// console.log(user.age);
// console.log(user.skills);
// console.log(user.skills[0]);
// console.log(user.wife);
// console.log(user.wife.name);
// console.log(user.wife.skills);


// console.log(user['name']);
// console.log(user['age']);
// console.log(user['skills']);
// console.log(user['skills'][0]);
// console.log(user['wife']);
// console.log(user['wife']['name']);
// console.log(user['wife'].name);
// console.log(user['wife']['skills']);

let users = [
{name: 'vasya', age: 31, status: true, skills: ['html', 'js'], wife: {name: 'olya', age: 22, skills: ['react', 'python']}},
{name: 'ivan', age: 32, status: true, skills: ['html', 'js'], wife: {name: 'anna', age: 22, skills: ['react', 'python']}},
{name: 'mykola', age: 33, status: false, skills: ['html', 'js']},
]
let vasya = users[0];
console.log(vasya)

let ivan  = users[1];
console.log(ivan);

console.log(users[0].wife.skills);

let mykola = users[2];
mykola.druzhyna = 'maria';
console.log(mykola);

// mykola.druzhyna = null;
// delete mykola.skills;
// console.log(mykola)

mykola.son = {name: 'ivan', age: 5};
mykola['daughter'] = {name: 'zoryana'}
mykola.son2 = 'petro'


