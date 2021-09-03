const express = require("express");
const app = express();
const morgan = require("morgan");
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
const port = 3000;

app.listen(port, () => {console.log(`A Nodejs API is listening on port: ${port}`);});