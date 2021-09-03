const express = require("express");
const {getPostsController} = require("../controllers/post");

const expressRouter = express.Router();

expressRouter.get("/", getPostsController);


// module.exports = {
//     getPosts:getPosts
// };
exports.expressRouter = expressRouter;