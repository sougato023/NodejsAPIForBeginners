const express = require("express");
const {getPostsController,createPost} = require("../controllers/post");

const expressRouter = express.Router();

expressRouter.get("/", getPostsController);

expressRouter.post("/post", createPost);


// module.exports = {
//     getPosts:getPosts
// };
exports.expressRouter = expressRouter;