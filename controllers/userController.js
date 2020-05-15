const db = require("../models")
const md5 = require("md5");

// const getSession = (account)=>{

//     return {
//         id: account._id,
//         name: account.name,
//         email: account.email,
//         token: md5(account.email + account.date)
//     }
// }; 

create: (req,res) => {

    console.log("Creating user . . . ");
    let account = req.body;
    account.email = req.body.email.toLowerCase();
    account.password = md5(req.body.password);
    db.user.create(account)
        .then((dbModel) => {
            console.log(getSession(dbModel));
            res.json(getSession(dbModel));
        })
.catch((err) => {
    console.log(err);
    res.status(422).json(err);
});
}