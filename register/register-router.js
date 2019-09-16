const express = require('express');
const Register = require('./register-model.js');
// const router = express.Router();
const router = express.Router();

router.get('/', (req, res) => {
    res.send("It's alive!");
});
router.get('/register', (req, res) => {

    const name = req.query.name
    // const hash = ''
    const hash = bcrypt.hashSync(name, 14) //the highest the number the most secure
    res.send(`The hash for ${name} is ${hash}`)

});


module.exports = router;