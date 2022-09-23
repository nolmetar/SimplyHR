const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const recruiterSchema = mongoose.Schema({
    email: { type: String, required: true, unique: true },
    firstname: {type: String, required: true},
    lastname: {type: String, required: true},
    password: { type: String, required: true }
});

recruiterSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Recruiter', recruiterSchema);