module.exports = ((req, res, next) => {
    if (req.session.isloggedIn) {
        next()
    } else {
        // res.render('/users/login.ejs')
    }
});