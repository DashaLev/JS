// Отримати відповідь з ресурсу та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/users
// кожному елементу юзера створити кнопку, при клику на яку в окремий блок виводяться всі пости поточного юзера.
// кожному елементу post створити кнопку, при клику на яку в окремий блок виводяться всі коментарі поточного поста
let usersWrap = document.createElement('div');
    usersWrap.style.width = 'max-content'
    usersWrap.style.margin = '0 auto'

let usersTitle = document.createElement('h2')
    usersTitle.innerText = 'Users'

let postsCommentsWrap = document.createElement('div');
    postsCommentsWrap.style.display = 'flex'
    postsCommentsWrap.style.justifyContent = 'center'

let postsWrap = document.createElement('div')
    postsWrap.style.marginLeft = '20px'
    postsWrap.style.width = '50%'

let commentsBox = document.createElement('div');
    commentsBox.style.width = '50%'

usersWrap.appendChild(usersTitle)
postsCommentsWrap.append(postsWrap, commentsBox)

document.body.append(usersWrap,postsCommentsWrap);


fetch('https://jsonplaceholder.typicode.com/users')
    .then(value => value.json())
    .then(value => {

        for (const user of value) {
            let userDiv = document.createElement('div');
            userDiv.innerText = user.id + '. ' + user.name + ', username: ' + user.username +
                ', email: ' + user.email + ', company: ' + user.company.name;
            userDiv.style.marginBottom = "5px"

            let btnPosts = document.createElement('button');
            btnPosts.style.marginLeft = "20px"
            btnPosts.innerText = 'Show posts';

            btnPosts.onclick = function () {

                fetch(`http://jsonplaceholder.typicode.com/users/${user.id}/posts`)
                    .then(value => value.json())
                    .then(value => {

                        postsWrap.innerText = '';
                        commentsBox.innerText = '';

                        let postsTitle = document.createElement('h2')
                        postsTitle.innerText = `Posts by ${user.name}`

                        postsWrap.appendChild(postsTitle)

                        for (const post of value) {

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
                                        commentsTitle.innerText = `Comments to Post '${post.title}'`
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


            };
            userDiv.appendChild(btnPosts);
            usersWrap.append(userDiv);

        }
    });