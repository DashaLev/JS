//Отримати відповідь з ресурсу та вивести в документ як в прикладі на занятті
//https://jsonplaceholder.typicode.com/posts
// зробити кнопку до кожного поста, при кліку на яку виводяться в окремий блок всі коментарі поточного поста

let postsWrap = document.createElement('div')
    postsWrap.style.backgroundColor = 'antiquewhite'
    postsWrap.style.height = '250px'
    postsWrap.style.overflow = 'auto'

let postsTitle = document.createElement('h2')
    postsTitle.innerText = 'Posts'

let commentsBox = document.createElement('div');
    commentsBox.style.backgroundColor = 'aliceblue'

    postsWrap.appendChild(postsTitle)
    document.body.append(postsWrap,commentsBox);

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(value => value.json())
    .then(value => {

        for (let post of value) {

            let postDiv = document.createElement('div')
            let postTitle = document.createElement('h3')
            let postBody = document.createElement('p')
            let btnComments = document.createElement('button')

            postTitle.innerText = post.title
            postBody.innerText = post.body
            btnComments.innerText = 'Show comments'

            btnComments.onclick = function () {

                fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)

                    .then(value => value.json())
                    .then(value => {

                        commentsBox.innerHTML = ''

                        let commentsTitle = document.createElement('h2')
                            commentsTitle.innerText = 'Comments'
                            commentsBox.appendChild(commentsTitle)

                        for (const comment of value) {
                            let commentDiv = document.createElement('div');
                            let commentTitle = document.createElement('h4');
                            let commentBody = document.createElement('p');

                            commentTitle.innerText = comment.name + ' by ' + comment.email;
                            commentBody.innerText = comment.body;

                            commentDiv.append(commentTitle, commentBody)
                            commentsBox.appendChild(commentDiv);

                        }
                    })
            }

            postDiv.append(postTitle, postBody, btnComments)
            postsWrap.appendChild(postDiv)


        }
    });