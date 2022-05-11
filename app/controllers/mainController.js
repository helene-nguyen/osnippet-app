//~import module
const errorController = require('./errorController.js');

//~controller
module.exports = {

    async renderHomePage(req, res) {
        try {
            res.render('pages/homePage', { title: 'Home page', error: ''});       
        } catch (err) {
            errorController._500(err, req, res);
        }
    }
};
