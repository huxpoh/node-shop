function ProductRepository() {
    var private = {};
    var self = this;
    
    self.getProd = function() {
        console.log("sex test");
    };

    console.log("Product Constructor");

    return self;
};

module.exports = ProductRepository;