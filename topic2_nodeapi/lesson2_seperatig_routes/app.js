const express = require("express");
const app = express();

//bring in routes
const {getPosts} = require("./routes/posts");

//using routes
app.get("/", getPosts);

const port = 3000;

app.listen(port, () => {console.log(`A Nodejs API is listening on port: ${port}`);});