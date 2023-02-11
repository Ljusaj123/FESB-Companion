const express = require('express');

const rootRouter = express.Router();

rootRouter.get('/', (req, res) => {
    res.send('Fesb companion!');
})

module.exports = rootRouter;