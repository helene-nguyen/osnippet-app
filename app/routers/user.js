//~import modules
const { Router } = require('express');
const router = Router();

const { renderProfilePage, registerUser, logInUser } = require('../controllers/userController.js');

//~router
router.get('/profile', renderProfilePage);
router.post('/signup', registerUser);
router.post('/signin', logInUser);

module.exports = router;