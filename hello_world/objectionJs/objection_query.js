const User = require('./models/User');



async function queryUsers(){
    //query for all in a table 
    await User.query()
    .then(users => {
        console.log(users);
    })

    //query user where in a table 
    await User.query().findById(2).select('username')
    .then(user => {
        console.log(user);
    })
}

queryUsers();



// User.query()
//     .where('id', id)
//     .eager('messages')
//     .then(user => {
//         res.json(user)
//     })