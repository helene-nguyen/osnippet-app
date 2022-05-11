//~import modules
const {
    Router
} = require('express');
const router = Router();

const auth = require('../middlewares/auth.js')
const {
    renderProfilePage,
    registerUser,
    logInUser
} = require('../controllers/userController.js');

//~router
router.get('/profile', auth, renderProfilePage);
router.post('/signup', registerUser);
router.post('/signin', logInUser);

module.exports = router;