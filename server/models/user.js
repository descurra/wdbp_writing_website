const regUser = [
    {
        /*username: username,
        password: password,
        firstname: firstname,
        lastname: lastname,
        bio: bio*/ 

        username: "olivepiedolphin",
        password: "olive123",
        firstname: "Sam",
        lastname: "Jones",
        bio: "Nice to meet"


    }
]

function getAllUsers() {
    return regUser;
}

module.exports = { getAllUsers }