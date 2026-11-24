//Registration Form
let registerForm = document.getElementById('registerForm');
registerForm.addEventListener('submit', register)

function register(e){
    e.preventDefault()
    let firstname = document.getElementById('firstname').value;
    let lastname = document.getElementById('lastname').value;
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    let bio = document.getElementById('bio').value;

    //User Object
    const regUser = {
        username: username,
        password: password,
        firstname: firstname,
        lastname: lastname,
        bio: bio
    }

    console.log(regUser);

}

//Login Form
let loginForm = document.getElementById('loginForm');
loginForm.addEventListener('submit', login)

function login(e){
    e.preventDefault()
    let username = document.getElementById('loginUsername').value;
    let password = document.getElementById('loginPassword').value;

    //User Object
    const loginUser = {
        username: username,
        password: password
    }

    console.log(loginUser);
}


