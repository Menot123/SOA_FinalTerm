exports.loggedin = (req, res, next) => {
    if (req.session.loggedin) {
        return next();
    } else {
        res.redirect('/login')
    }
}

exports.admin = (req, res, next) => {
    if (req.session.admin) {
        return next();
    } else {
        res.redirect('/login')
    }
}

