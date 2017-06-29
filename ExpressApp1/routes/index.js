var express = require('express');
var router = express.Router();
var csurf = require('csurf');
var Cart = require("../modules/cart");
var ProductService = require("../services/product-service");
var Product = require('../models/product');
var Category = require('../models/category');

var csurfProtection = csurf();
router.use(csurfProtection);


var Handlebars = require("handlebars");
var paginate = require('handlebars-paginate');

Handlebars.registerHelper('paginate', paginate);

router.get('/:pageSize*?', function (req, res, next) {

    var prodService = new ProductService();
    console.log(global.docs);
    prodService.getProductPaggedList(10, req.params.pageSize-1 || 0, 3,
       
        function (productChunks, currentPage, pageCount) {
                    res.render('shop/index', {
                        title: 'Shopping Cart',
                        products: productChunks,
                        csrfToken: req.csrfToken(),
                        pagination: { page: currentPage, pageCount: parseInt(Math.ceil(pageCount / 10)) }
            });
        }
    );
});


router.get('/cart-partial', function (req, res, next) {
    res.render('partials/cart', { layout: false });
});

router.get('/add-to-cart/:id', function (req, res, next) {
    var productId = req.params.id;
    var cart = new Cart(req.session.cart ? req.session.cart : {});

    Product.findById(productId, function (err, product) {
        if (err) {
            return res.redirect("/");
        }

        cart.add(product, product.id);
        req.session.cart = cart;
        console.log(req.session.cart);

        return !req.xhr ? res.redirect('/') :
            res.render('partials/cart', { layout: false });
    });
});

router.get('/shopping-cart', function (req, res, next) {
    if (!req.session.cart) {
        return res.render("shop/shopping-cart", { products: null });
    }

    var cart = new Cart(req.session.cart);
    res.render("shop/shopping-cart", { products: cart.generateArray(), totalPrice: cart.totalPrice, disableMenu: true });
});


router.get('/checkout', function (req, res, next) {
    if (!req.session.cart) {
        return res.redirect("shop/shopping-cart", { products: null });
    }

    var cart = new Cart(req.session.cart);
    res.render("shop/checkout-nomoney", { total: cart.totalPrice });
});

module.exports = router;
