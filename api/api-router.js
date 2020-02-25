const bcrypt = require('bcryptjs');
const router = require('express').Router();

const authRouter = require('../auth/auth-router');
const usersRouter = require('../users/users-router');
const restricted = require('../auth/restricted-middleware');

router.use('/auth', authRouter);
router.use('/users', restricted, usersRouter);

router.get('/hash', (req, res) => {
    console.log(req.headers)
    const authentication = req.headers.authentication;

    const hash = bcrypt.hashSync(authentication, 8)

    res.json({ originalValue: authentication, hashValue: hash});
});

router.get('/', (req, res) => {
    res.json({ api: 'App is working' });
});

module.exports = router;