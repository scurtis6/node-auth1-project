const bcrypt = require('bcryptjs');
const router = require('express').Router();

const authRouter = require('../auth/auth-router');
const usersRouter = require();
const restricted = require();

router.use('/auth', authRouter);
router.use('/users', restricted, usersRouter);

router.get('/', (req, res) => {
    res.json({ api: 'App is working' });
})

module.exports = router;