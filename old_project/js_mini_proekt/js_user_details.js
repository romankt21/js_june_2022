let url = new URL(location.href);
let user = JSON.parse(url.searchParams.get('data'));
console.log(user);

let userDetailsContainer = document.getElementsByClassName('user-details')[0];

let postsContainer = document.getElementsByClassName('posts')[0];

let postsDetailsButton = document.getElementsByClassName('postsDetailsButton') [0];
//let postsDetailsButton.innerText ('post detailsButton') [0];
//userDetalisContainer.innerText =`${JSON.stringify(user)}`;
userDetailsContainer.innerText = `${"id: "+JSON.stringify(user.id) +", name "+JSON.stringify(user.name)+",username: " +JSON.stringify(user.username)+", email: " +JSON.stringify(user.email)+",address: "+JSON.stringify(user.address)+"geo: "+JSON.stringify(user.geo)+ ", phone:" +JSON.stringify(user.phone)+", website:" +JSON.stringify(user.website)+ ", company: " +JSON.stringify(user.company)}`;
//let postsButton = document.createElement("button");//
//postsButton.innerText = 'show posts of user';//
postsDetailsButton.onclick = function () {
    this.disabled = true;

    fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
        .then(value => value.json())
        .then(value => {
            for (const postsItem of value) {
                let postContainer = document.createElement('div');
                postContainer.classList.add('post');
                postContainer.innerText = postsItem.title;
                let postDetailsButton = document.createElement("button")
                postDetailsButton.innerText = 'post details';
                postDetailsButton.onclick = function () {
                    location.href = `post-details.html`;
                }

                postContainer.appendChild(postDetailsButton);
                postsContainer.append(postContainer);

            }


        });

};

userDetalisContainer.appendChild(postsButton)