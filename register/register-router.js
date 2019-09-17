const express = require('express');
const Register = require('./register-model.js');
const restricted = require('../auth/restricted-middleware')
const bcrypt = require('bcryptjs');
const router = express.Router();

router.get('/', (req, res) => {

    const name = req.query.name
    const hash = bcrypt.hashSync(name, 14) //the highest the number the most secure
    res.send(`The hash for ${name} is ${hash}`)

});

router.post('/register', (req, res) => {
    let { username, password } = req.body;
    const hash = bcrypt.hashSync(password, 8)

    Register.add({ username, password: hash })
        .then(saved => {
            res.status(201).json(saved);
        })
        .catch(error => {
            res.status(500).json(error);
        });
});

router.post('/login', (req, res) => {
    let { username, password } = req.body;

    Register.findBy({ username })
        .first()
        .then(user => {
            if (user && bcrypt.compareSync(password, user.password)) {
                res.status(200).json({ message: `Welcome ${user.username}!` });
            } else {
                res.status(401).json({ message: 'Invalid Credentials' });
            }
        })
        .catch(error => {
            res.status(500).json(error);
        });
});

router.get('/users', restricted, (req, res) => {
    Register.find()
        .then(users => {
            res.json(users);
        })
        .catch(err => res.send(err));
});


module.exports = router;