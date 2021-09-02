const express = require("express");//for core and 3rd party moudles you need to provide the path

const app = express();

// app.get("/about", (req, res) => {
//     res.send("Welcome to express nodejs app");
// }).listen(3000);

// app.get("/home", (req,res) => {
//     res.send("Home");
// });

//better way of writing code
// The above code also works
app.get("/about", (req, res) => {
    res.send("Welcome to express nodejs app");
});

app.get("/home", (req,res) => {
    res.send("Home");
});

app.listen(3000);