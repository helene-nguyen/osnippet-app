//~import module
const errorController = require('./errorController');
const { User } = require('../models/');

//~controller
module.exports = {

    async renderHomePage(req, res) {
        try {
            const user = await User.findAll();
            
            res.render('pages/homePage', {title: 'Home page', user});

        } catch (err) {
            errorController._500(err, req, res);
        }
    }
};