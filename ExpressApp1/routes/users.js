var express = require('express');
var router = express.Router();
var Product = require('../models/product');
var csurf = require('csurf');
var passport = require('passport');
var Session = require('../models/session');

var csurfProtection = csurf();
router.use(csurfProtection);

router.get('/profile', isLoggedIn, function (req, res, next) {
    Session.find(function (err, docs) {
        res.render('user/profile',{docs:docs});
    });
});

router.get('/logout', isLoggedIn, function (req, res, next) {
    req.logout();
    res.redirect('/');
});

router.use('/', notLoggedIn, function(req, res, next) {
    next();
});

router.get('/', function (req, res) {
    res.send('respond with a resource');
});

router.get('/signup', function (req, res, next) {
    var messages = req.flash('error');
    res.render('user/signup', { csrfToken: req.csrfToken(), messages: messages, hasErrors: messages.length > 0 });
});

router.post('/signup', passport.authenticate('local.signup',
{
    successRedirect: '/user/profile',
    failureRedirect: '/user/signup',
    failureFlash: true
}));

router.get('/signin', function (req, res, next) {
    var messages = req.flash('error');
    res.render('user/signin', { csrfToken: req.csrfToken(), messages: messages, hasErrors: messages.length > 0 });
});

//router.post('/signin', passport.authenticate('local.signin',
//    {
//        successRedirect: '/user/profile',
//        failureRedirect: '/user/signin',
//        failureFlash: true
//    }));


router.post('/signin', function (req, res, next) {
    passport.authenticate('local.signin', function (err, user, info) {
        if (err) { return next(err); }
        if (!user) {
             return res.redirect('/');
        }

        
        req.logIn(user, function (err) {
            if (err) {
                return next(err);
            }
            //OPEN ISSUE AJAX RENDER PARTIAL AFTER LOGIN
            //return !req.xhr ? res.redirect('/user/profile') :
            //                 res.render('partials/header', { layout: false });

            return res.redirect('/user/profile');
        });

    })(req, res, next);

});




function isLoggedIn(req,res,next) {
    if (req.isAuthenticated()) {
        return next();
    }

    res.redirect('/');
};

function notLoggedIn(req, res, next) {
    if (!req.isAuthenticated()) {
        return next();
    }

    res.redirect('/');
};


module.exports = router;