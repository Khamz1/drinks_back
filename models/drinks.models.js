const mongoose = require('mongoose');
const drinksSchema = mongoose.Schema({
    name: String,
    price: Number,
    remaining: {
        type:Boolean,
        default:true
    },
    cofein: {
        type: Boolean,
        default:true
    },
    volume: Number,
    description:String
})

const Drinks = mongoose.model('Drinks',drinksSchema);

module.exports = Drinks