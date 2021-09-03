const express = require("express");
const app = express();
const mongoose = require("mongoose");
const morgan = require("morgan");
const dotenv = require("dotenv");

dotenv.config();

//db
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("Db connected"));

mongoose.connection.on('error', err => {
    console.log(`DB connection error: ${err.message}`);
});

//bring in routes
const {expressRouter} = require("./routes/posts");

//middleware: my own middleware
const myOwnMiddleWare = (req,res,next) => { 
    console.log(`Middleware applied`);
    next(); // to execute the next middleware
}

const myOwnMiddleWareUisngArguments = (args) => { 
    return (
        (req,res,next) => { 
    console.log(`Middleware applied with argument => ${args}`);
    next(); // to execute the next middleware
    }
    )
}

app.use(myOwnMiddleWare);
// middleware : morgan => to see the routes
app.use(morgan('dev'));

//app.use(myOwnMiddleWareUisngArguments("dev"));
//using routes
//app.get("/", getPosts);
//expressRouter acts as middleware
app.use(expressRouter)
const port = process.env.PORT? process.env.PORT:4000;

app.listen(port, () => {console.log(`A Nodejs API is listening on port: ${port}`);});