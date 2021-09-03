const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("welcome to express");
});

const port = 3000;

app.listen(port, () => {console.log(`A Nodejs API is listening on port: ${port}`);});