var Product = require('../models/product');

function ProductRepository() {
    var self = this;

    self.getProductList = function (take, skip, callback, sort) {
        
        Product.find().limit(take).skip(skip)
            .sort({
                name: sort || 'asc'
            })
            .exec(function (err, docs) {
                callback(docs);
            });
    };

    self.getProductCount = function (callback) {

        Product.count().exec(function (err, count) {
            callback(count);
        });
    };

    console.log("Product Repository Constructor");
    return self;
};

module.exports = ProductRepository;