//~import modules
const { Router } = require('express');
const router = Router();

//~routers
const mainRouter = require('./main.js');
router.use(mainRouter);

const userRouter = require('./user.js');
router.use(userRouter);

module.exports = router;
