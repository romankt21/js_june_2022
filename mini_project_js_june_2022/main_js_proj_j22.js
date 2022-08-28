
let usersArr = document.getElementsByClassName('users')[0];
fetch('https://jsonplaceholder.typicode.com/users')
    .then(value => value.json())
    .then(value => {
    for (const valueElement of value) {
        let userFromArr = document.createElement('div');
        userFromArr.classList.add('user');
        let link = document.createElement('a');
        link.innerText = `${valueElement.id} - ${valueElement.name}`;
        link.href = `./user-details.html?data=${JSON.stringify(valueElement)}`;
        userFromArr.appendChild(link);
        usersArr.appendChild(userFromArr);



    }
})

