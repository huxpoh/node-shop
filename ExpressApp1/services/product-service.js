var ProductRepository = require('../repository/product-repository');
var async = require('async');

function ProductService() {
    var self = this;

    var productRepository = new ProductRepository();

    self.getProductPaggedList = function (perPage, pageNum, chunckSize, callback) {

        var an = function (perPage, pageNum, chunckSize, callbackouter) {
            async.parallel({
                    //get docs
                    docs: function (callback) {

                        var page = Math.max(0, pageNum);

                        productRepository.getProductList(perPage, page * perPage, function (docs) {
                            var productChunks = [];

                            for (var i = 0; i < docs.length; i += chunckSize) {
                                productChunks.push(docs.slice(i, i + chunckSize));
                            }

                            callback(null, {productChunks:productChunks, page: page});
                        });
                    },
                    //getCount
                    count: function (callback) {
                        productRepository.getProductCount(function (countRes) {
                            console.log(callback);
                            callback(null, countRes);
                        });
                    }
            },
            //DONE
            function (err, result) {
                console.log("callback hell");
                callbackouter(result.docs.productChunks, result.docs.page, result.count);
            });
        } (perPage, pageNum, chunckSize, callback);
    };

    console.log("Product Service Constructor");
    return self;
};

module.exports = ProductService;