//~import module
const errorController = require('./errorController.js');
const bcrypt = require('bcrypt');
const emailValidator = require('email-validator');
const passwordValidator = require('password-validator');
const assert = require('assert');

const schema = new passwordValidator();
//Add properties
schema
    .is().min(8) // Minimum length 8
    .is().max(100) // Maximum length 100
    .has().uppercase(1) // Must have uppercase letters
    .has().lowercase(1) // Must have lowercase letters
    .has().digits(2) // Must have at least 2 digits
    .has().symbols(1) // Must have at least 1 symbol
    .has().not().spaces() // Should not have spaces
    .is().not().oneOf(['Passw0rd', 'Password123']); // Blacklist these values

const {
    User
} = require('../models/index.js');

//~controller
module.exports = {
    async renderProfilePage(req, res) {
        try {
            res.render('pages/profile', {
                title: 'My profile'
            });
        } catch (err) {
            errorController._500(err, req, res)
        }
    },

    async registerUser(req, res) {
        try {
            const {
                username,
                email,
                password,
                passwordConfirm
            } = req.body

            const emailExist = await User.findOne({
                where: { email }
            });

            const userExist = await User.findOne({
                where: { username }
            });

            //~https://www.w3schools.com/nodejs/met_assert_ok.asp
            //if false, it's like throw new Error
            assert.ok(!Boolean(emailExist), `${email} already exist !`);
            assert.ok(!Boolean(userExist), `${username} already exist !`);
            assert.ok(emailValidator.validate(email), `${email} is not valid`);
            assert.ok(password === passwordConfirm, `Not the same password`);
            assert.ok(schema.validate(password), `Password must have 8 characters, lowercase, uppercase, 2 digits, 1 symbol, no spaces`)

            const encryptedPwd = await bcrypt.hash(req.body.password, 10);

            const user = await User.create({
                ...req.body,
                password: encryptedPwd,
                role_id: 2
            });

            res.locals.user = user;

            res.render('pages/homePage', {
                title: 'Home Page'
            });

        } catch (err) {
            res.locals.error = err.message;

            //todo test destroy
            res.locals.destroy();

            return res.status(500).render('pages/homePage', {
                title: 'Home Page'
            });
        }
    },

    async logInUser(req, res) {
        try {

            res.redirect('/profile');

        } catch (err) {
            errorController._500(err, req, res);

        }
    }
};