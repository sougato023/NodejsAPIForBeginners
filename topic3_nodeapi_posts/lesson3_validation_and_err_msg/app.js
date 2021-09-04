const express = require("express");
const app = express();
const mongoose = require("mongoose");
const morgan = require("morgan");
const expressValidator = require("express-validator");
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




// middleware : morgan => to see the routes
app.use(morgan('dev'));



app.use(express.urlencoded({extended:true}));
app.use(express.json());// To parse the incoming request with json payloads

app.use(expressValidator());//"express-validator": "^5.3.1" required in package manager
//expressRouter acts as middleware
app.use(expressRouter);
const port = process.env.PORT? process.env.PORT:4000;

app.listen(port, () => {console.log(`A Nodejs API is listening on port: ${port}`);});