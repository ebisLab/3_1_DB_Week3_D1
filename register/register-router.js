const express = require('express');
const Register = require('./register-model.js');
const bcrypt = require('bcryptjs');
const router = express.Router();

router.get('/', (req, res) => {
    res.send("It's alive!");
});

router.get('/', (req, res) => {

    const name = req.query.name
    const hash = bcrypt.hashSync(name, 14) //the highest the number the most secure
    res.send(`The hash for ${name} is ${hash}`)

});


module.exports = router;