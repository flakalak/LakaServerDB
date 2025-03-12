const mongoose = require('mongoose');

const bookExchangeSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    }
}, { timestamps: true });

const Book = mongoose.model('Book', bookExchangeSchema);

module.exports = Book;
