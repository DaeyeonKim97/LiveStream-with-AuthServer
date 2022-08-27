const mongoose = require('mongoose');
const shortid = require('shortid');
let Schema = mongoose.Schema;

let StreamSchema = new Schema({
    userName : String,
    streamKey : String,
    isOn : String,
})

StreamSchema.generateStreamKey = () => {
    return shortid.generate();
}

module.exports = mongoose.model('Stream',StreamSchema);