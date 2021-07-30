const imageUrl = 'http://localhost:3000/images/1';
const fgTitle = el('fg-title');
const fgImage = el('fg-image');
const fgLikes = el('fg-likes');
const fgComments = el('fg-comments');
const likeButton = el('like-button');
const commentForm = el('fg-comment-form');

let likes = 0;

likeButton.addEventListener("click", () => {
    likes++;
    renderLikes();
});

commentForm.addEventListener("submit", (e) => {
    e.preventDefault();
    addComment(e.target.comment.value);
    e.target.comment.value = '';
});

fetch(imageUrl)
    .then((res)=> res.json())
    .then(renderImage);


function renderImage(data){
    fgTitle.innerText = data.title;
    fgImage.src = data.image;
    likes = data.likes;
    renderLikes();
    setComments(data.comments);
}

function renderLikes() {
fgLikes.innerText = `${likes} likes`;
}

function setComments(comments) {
    fgComments.innerHTML = '';
    comments.forEach(comment => addComment(comment.content));   
}

function addComment(comment){
    const li = document.createElement('li');
    li.innerText = comment;
    fgComments.append(li);
}

function el(id){
    return document.getElementById(id);
}