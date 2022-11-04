const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const dateSchema = new Schema({
    date: {
        type: Number
    }
})

module.exports = mongoose.model('Date', dateSchema);