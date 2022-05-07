//~import modules
const { Router } = require('express');
const router = Router();

const { renderHomePage } = require('../controllers/mainController');

//~router
router.get('/', renderHomePage);

module.exports = router;