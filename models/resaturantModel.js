const mongoose = require('mongoose');

const restaurantSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    itemsArr: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Item'
    }]
},
{
    timestamps: true
});

module.exports = mongoose.model('Restaurant', restaurantSchema);