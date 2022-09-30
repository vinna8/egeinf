const {Schema, model} = require('mongoose');

const schema = new Schema({
    all: [{type: Number, required: true}],
    right: [{type: Number, required: true}],
    statistic: [{type: Number, required: true}],
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    login: {type: String, required: true, unique: true}
})

module.exports = model('Statistic', schema);