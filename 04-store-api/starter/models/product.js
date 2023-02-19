const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        requried: [true, 'product name must be provided']
    },
    price: {
        type: Number,
        requried: [true, 'product price must be provided']
    },
    featured: {
        type: Boolean,
        default: false
    },
    rating: {
        type: Number,
        default: 4.5
    },
    createdAt: {
        type: Date,
        default: Date.now(),
      },
    company: {
        type: String,
        enum: {
            values: ['ikea', 'liddy', 'caressa', 'marcos'],
            messages: '{VALUE} is not supported'
        },
        // enum: ['Ikea', 'Liddy', 'caressa', 'carcos']
    },
})

module.exports = mongoose.model('Product', productSchema)