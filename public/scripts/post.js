let postForm = document.getElementById('postForm')
postForm.addEventListener('submit', post)

function post(e){
    e.preventDefault()
    let newPost = document.getElementById('item').value;

    const userPost = {
        newPost: newPost
    }

    console.log(userPost);
    
}


