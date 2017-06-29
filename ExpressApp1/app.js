var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var expressHbs = require('express-handlebars');
var passport = require('passport');
var flash = require('connect-flash');
var validator = require('express-validator');
var Handlebars = require("handlebars");

var routes = require('./routes/index');
var users = require('./routes/users');

var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
var session = require('express-session');
var MongoStore = require('connect-mongo/es5')(session);

var app = express();

//var Category = require('../models/category');

mongoose.connect('localhost:27017/shopping');
require('./config/passport');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');


app.engine('.hbs', expressHbs({
    defaultLayout: 'layout', extname: '.hbs', helpers: {
        section: function (name, options) {
            if (!this._sections) {
                this._sections = {};
            }

            this._sections[name] += options.fn(this);
            return null;
        }
    }
}));

Handlebars.registerHelper('global',
    function(context, options) {
        return options.fn(JSON.stringify(global[context])); // Object is Backbone Collection
    });

app.use(favicon(__dirname + '/public/favicon.png'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(validator());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/scripts', express.static(__dirname + '/node_modules/ion-rangeslider/js/'));
app.use('/css', express.static(__dirname + '/node_modules/ion-rangeslider/css/'));
app.use('/img', express.static(__dirname + '/node_modules/ion-rangeslider/img/'));

app.use(session({
    secret: 'secret',
    saveUninitialized: false,
    resave: false,
    cookie: { path: '/', httpOnly: true, maxAge: 180 * 60 * 1000 },
    store: new MongoStore({ url: 'mongodb://localhost:27017/shopping' })
}));

app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

app.use(function (req, res, next) {

    app.locals.login = req.isAuthenticated();
    app.locals.session = req.session;

    if (req.isAuthenticated()) {
        app.locals.user = req.user.email;
    }

    next();
});

app.use('/', routes);
app.use('/user', users);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});




module.exports = app;
