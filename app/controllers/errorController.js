const errorController = {
    _400(req, res) {
        res.status(400).send('BAD REQUEST');
    },

    _401(req, res) {
        res.status(401).render('errors/401', { title: 'ERROR AUTH' });
    },

    _403(req, res) {
        res.status(403).render('errors/403', { title: 'ACCESS DENIED' });
    },

    _404(req, res) {
        res.status(404).render('errors/404', { title: 'ERROR 404 NOT FOUND' });
    },

    _500(err, req, res) {
        res.status(500).send(err.message);
    }
};

module.exports = errorController;