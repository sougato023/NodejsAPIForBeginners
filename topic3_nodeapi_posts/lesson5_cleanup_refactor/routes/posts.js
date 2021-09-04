const express = require("express");
const {getPostsController, createPost} = require("../controllers/post");
const {createPostValidator} = require("../validators/index"); // no need to provide index as index file is imported by default from a folder

const expressRouter = express.Router();

expressRouter.get("/", getPostsController);

//use createPostValidator as a middleware
expressRouter.post("/post", createPostValidator, createPost);


// module.exports = {
//     getPosts:getPosts
// };
exports.expressRouter = expressRouter;