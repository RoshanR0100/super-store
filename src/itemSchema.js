const mongoose = require('mongoose');

const ItemSchema = mongoose.Schema
({
    name: {type: String/*, required: true*/},
    description: {type: String/*, required: true*/},
    price: {type: Number/*, required: true*/},
    // date: {type: Date, default: Date.now},
    stock: {type: Number/*, required: true*/}
});


const Item = mongoose.model('item', ItemSchema);

module.exports = Item;