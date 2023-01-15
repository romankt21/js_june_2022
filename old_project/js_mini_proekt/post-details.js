
let url = new URL (location.href);
let  post = JSON.parse(url.searchParams.get('data'));
console.log(post);
let postContainer = document.getElementsByClassName('post') [0];
postContainer.innerText = JSON.stringify(post);

let commentsContainer = document.getElementsByClassName('comments') [0];
fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)

    .then(value => value.json())
    .then(value => {
        console.log(value);
        for (const comentItem of value) {
            let commentContainer = document.createElement('li');
            commentContainer.innerText = comentItem.body;
            commentsContainer.appendChild(commentContainer);
        }
    })

