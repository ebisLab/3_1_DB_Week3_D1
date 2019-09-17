const Register = require('../register/register-model');
// const bcrypt = require('bcryptjs');


module.exports = (req, res, next) => {

    //is the user logged in.
    if (req.session && req.session.user) { //they logged in correctly
        next();
    } else {
        res.status(401).json({ message: 'Where you think you goin foo?' })
    }

    //change it so that it's relying on the user without refreshing
    // let { username, password } = req.headers//req.body; //we cannot send data in the body

    // Register.findBy({ username })
    //     .first()
    //     .then(user => {
    //         //check
    //         if (user && bcrypt.compareSync(password, user.password)) {
    //             // res.status(200).json({ message: `Welcome ${user.username}!` });
    //             next();
    //         } else {
    //             res.status(401).json({ message: 'Invalid Credentials' });
    //         }
    //     })
    //     .catch(error => {
    //         res.status(500).json(error);
    //     });

}