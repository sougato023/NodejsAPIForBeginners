const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: "Title is required", // Error string if title is not provided
        minLrngth: 4,
        maxLength: 150
    },
    body: {
        type: String,
        required: "Body is required", // Error string if body is not provided
        minLrngth: 4,
        maxLength: 2000
    }
});

const model = mongoose.model("Post", postSchema);
module.exports = {
    model
};