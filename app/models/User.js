const mongoose = require("mongoose");

mongoose.connect('mongodb://' + process.env.DB_HOST + '/' + process.env.DB_NAME, {useNewUrlParser: true, useUnifiedTopology: true})

const schema = new mongoose.Schema ({
    name: String,
    username: String,
    email: String,
    phone: String,
    website: String,
    adress: {
        street: String,
        suite: String,
        city: String,
        zipcode: String,
        geo: {
            lat: Number,
            lng: Number,
        }
    },
    company: {
        name: String,
        catchPhrase: String,
        bs: String
    }
});
 
module.exports = mongoose.model('User', schema);