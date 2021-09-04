const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true // Error string if title is not provided
        // minLength: 4,// values are mentioned in validator
        // maxLength: 150 // values are mentioned in validator
    },
    body: {
        type: String,
        required: true // Error string if body is not provided

    }
       
});

const model = mongoose.model("Post", postSchema);
module.exports = {
    model:model
};