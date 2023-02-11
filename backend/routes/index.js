const express = require('express');

const rootRouter = require('./root');
const userRouter = require('./users');

const router = express.Router();

router.use('/', rootRouter);
router.use('/users', userRouter);

module.exports = router;
