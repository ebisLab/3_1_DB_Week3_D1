const Register = require('../register/register-model');
// const bcrypt = require('bcryptjs');


module.exports = (req, res, next) => {

    //is the user logged in.
    if (req.session && req.session.user) { //they logged in correctly
        next();
    } else {
        res.status(401).json({ message: 'Where you think you goin foo?' })
    }

    //change it so that it's relying on the user without refreshing.. or at least its supposed to

}