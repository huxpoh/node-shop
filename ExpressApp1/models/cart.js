module.exports = function Cart(oldCart) {
    this.items = oldCart.items || {};
    this.totalQty = oldCart.totalQty || 0;
    this.totalPrice = oldCart.totalPrice || 0;

    this.add = function(item, id) {
        var storedItem = this.items[id];
        if (!storedItem) {
            storedItem = this.items[id] = { item: item, price: 0, qty: 0 }
        }
        storedItem.qty++;
        storedItem.price = storedItem.item.price * storedItem.item.qty;
        this.totalQty++;
        this.totalPrice += storedItem.item.price;
    };

    this.generateArray = function() {
        var arr = [];
        for (var id in this.items) {
            arr.push(this.items[id]);
        }
        return arr;
    };
};



//var mongoose = require('mongoose');
//var Schema = mongoose.Schema;
//var bcrypt = require('bcrypt');

//var userSchema = new Schema({
//    email: { type: String, required: true },
//    password: { type: String, required: true }
//});

//userSchema.methods.encryptPassword = function (password) {
//    return bcrypt.hashSync(password, bcrypt.genSaltSync(5), null);
//};

//userSchema.methods.validPassword = function (password) {
//    return bcrypt.compareSync(password, this.password);
//};

//module.exports = mongoose.model('User', userSchema);