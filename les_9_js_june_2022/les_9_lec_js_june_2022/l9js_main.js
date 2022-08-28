// console.log(document);

// console.log(document.head);
// console.log(document.head.innerHTML);
// console.log(document.head.children);
// console.log(document.body.innerHTML);

// let ul1 = document.getElementById('list-1');
// console.log(ul1);

// let menuCollection = document.getElementsByClassName('menu');
// console.log(menuCollection);
// for (const menuCollectionElement of menuCollection) {
//     console.log(menuCollectionElement);
// }

// //tag
// let ulList = document.getElementsByTagName('ul');
// console.log(ulList);


// let liList = document.getElementsByTagName('li');
// console.log(liList);

// let list1 = document.getElementById('list-1');
// console.log(list1);

// let list1Licolection = list1.getElementsByTagName('li');
// console.log(list1Licolection);


// console.log(document.querySelector('.menu'));
// console.log(document.querySelectorAll('.menu'));

// console.log(document.querySelectorAll('.menu:nth-child(2)>li'));

// let nodeListOf = document.querySelectorAll('#list-2 > li');
// console.log(nodeListOf);
//
// for (const node of nodeListOf) {
//     console.log(node);
// }


// let target = document.getElementById('target');
// console.log(target.innerText);

// target.innerText = 'okten';

// target.style.background = 'silver';

// console.log(target.classList);
//
//
// target.classList.add('foo');
// target.classList.add('bar');
//
// console.log(target.classList.item(0));
//
// console.log(target.classList.contains('bar'));
//
// target.classList.toggle('asd');

// console.log(target.getAttribute('xxx'));
// console.log(target.getAttribute('id'));
// console.log(target.getAttribute('class'));

// target.setAttribute('id', 'qwe')

// console.log(target.previousElementSibling);
//
// console.log(target.nextElementSibling);
//
// console.log(target.children);
// console.log(target.childNodes);


// target.innerText = '<b>dfgh</b>';
//
// target.innerHTML = '<b>dfgh</b>';
//
// console.log(target.outerHTML);

// let collectionOfDiv = document.getElementsByClassName('point');
//
// for (const divElement of collectionOfDiv) {
//     divElement.innerText = 'wer'
//     divElement.classList.add('qqq');
// }

// console.log(document.forms);
//
// console.log(document.forms['f1']);
//
// console.log(document.forms['f2'].userEmail);
// console.log(document.forms['f2'] ['userEmail']);
// console.log(document.forms.f1.userName);

//  //  створення елементів в структурі

// let h2 = document.createElement('h2');
// h2.innerText = 'some title';
// document.body.appendChild(h2);
//
// let allUsersDiv = document.getElementsByClassName('users') [0];
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
// for (const user of users) {
//     let div = document.createElement('div');
//     div.classList.add('user');
//     div.innerText = user.name;
//     allUsersDiv.appendChild(div);
// }

//
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
// for (const user of users) {
//     let userInfoDiv = document.createElement('div');
//
//     let h2 = document.createElement('h2');
//     h2.innerText = user.name;
//
//
//     let p = document.createElement('p');
//     p.innerText = user.status + ' ' + user.age;
//
//     userInfoDiv.append(h2, p);
//
//
//
//     document.body.appendChild(userInfoDiv);
//
// };


//  // події - events

// let target = document.querySelector('.target')
// console.log(target);

// target.onclick = function () {
//     console.log('.');
// };


// target.onclick = function (e) {
//     console.log(e);
// };


// target.onmouseover = function () {
//     console.log('.');
// };

// target.onmouseover = function (e) {
//     console.log(e);
// };

// target.onmousemove = function () {
//     console.log('.');
// };

// target.onmousemove = function (e) {
//     console.log(e.clientY);
// };

// let f1 = document.forms.f1;
//     f1.login.oninput = function () {
//     let value = this.value
//     console.log(value);
//     if (value.includes('asd')) {
//         alert('!!!');
//     }
// };
//
//     f1.onsubmit = function (e) {
//         alert('submit');
//     };
//

    // f1.onsubmit = function (e) {
    //     e.preventDefault()
    //     console.log(this.login.value)
    // };

// f1.addEventListener('submit', function (e) {
//     e.preventDefault();
//     console.log('.');
// });
//
// f1.addEventListener('submit', function (e) {
//     e.preventDefault();
//     console.log(',');
// });

function explorer(htmlElement) {
    console.log(htmlElement);
}

explorer(document.body);