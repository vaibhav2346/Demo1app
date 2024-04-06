const mg = require('mongoose');

const schema = new mg.Schema({FirstName: {type: String}, LastName: {type: String}, Email: {type: String},
Address: {type: String}, City: {type: String}, State: {type: String}, } ,{versionKey: false})

module.exports = mg.model("account", schema)

