let url = new URL(location.href);
let user = JSON.parse(url.searchParams.get('data'));
console.log(user);

let userDetails = document.getElementsByClassName('user-details')[0];
let postsContainer = document.getElementsByClassName('posts')[0];

let postsDetailsButton = document.getElementsByClassName('postsDetailsButton')[0];

userDetails.innerText =`${JSON.stringify(user)}`;
// userDetails.innerText =`${JSON.stringify(user.id)}  ${JSON.stringify(user.name)}`;


postsDetailsButton.onclick = function () {
    this.disabled = true;
    fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
        .then(value => value.json())
        .then(value => {

            for (const postItem of value) {
                let postContainer = document.createElement('div');
                postContainer.classList.add('post');
                postContainer.innerText = postItem.title;
                let postDetailsButton = document.createElement('button');
                postDetailsButton.innerText = 'post details';

                // let location = document.createElement('a');
                postDetailsButton.onclick = function () {
                    location.href = `./post-details.html?data=${JSON.stringify(postItem)}`

                }


                postContainer.appendChild(postDetailsButton);
                postsContainer.appendChild(postContainer);


            }
        });

};



