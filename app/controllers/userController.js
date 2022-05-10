//~import module
const errorController = require('./errorController.js');
const bcrypt = require('bcrypt');
const emailValidator = require('email-validator');
const passwordValidator = require('password-validator');
const assert = require('assert');

const schema = new passwordValidator();
//Add properties
schema
    .is().min(8); // Minimum length 8


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
                where: {
                    email
                }
            });

            const userExist = await User.findOne({
                where: {
                    username
                }
            });

            assert.ok(!Boolean(emailExist), `${email} already exist !`);
            assert.ok(!Boolean(userExist), `${username} already exist !`);
            assert.ok(emailValidator.validate(email), `${email} is not valid`);
            assert.ok(password === passwordConfirm, `Not the same password`);

            const encryptedPwd = await bcrypt.hash(req.body.password, 10);

            const user = await User.create({
                ...req.body,
                password: encryptedPwd,
                role_id: 2
            });

            res.locals.user = user;

            res.render('pages/homePage', {title: 'Home Page'});

        } catch (err) {
            res.locals.error = err.message;
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
