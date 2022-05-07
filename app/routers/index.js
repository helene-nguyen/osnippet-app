//~import modules
const { Router } = require('express');
const router = Router();

//~routers
const mainRouter = require('./main');
router.use('/', mainRouter);

module.exports = router;