const bcrypt = require('bcryptjs');
const router = require('express').Router();

const Users = require('../users/users-model');

router.post('/register', (req, res) => {
    console.log(req.body)
    let user = req.body;

    const hash = bcrypt.hashSync(user.password, 8);

    user.password = hash;

    Users.add(user)
    .then(saved => {
        res.status(201).json(saved);
    })
    .catch(error => {
        res.status(500).json(error);
    })
});

router.post('/login', (req, res) => {
    let { username, password } = req.body;

    Users.findBy({ username })
    .first()
    .then(user => {
        console.log('login', user)
        if (user && bcrypt.compareSync(password, user.password)) {
            res.status(200).json({ message: `You are logged in ${user.username}!!!` })
        } else {
            res.status(401).json({ message: 'You shall not pass!' })
        }
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

module.exports = router;