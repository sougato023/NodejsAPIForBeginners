/*asynchronous programming
nodejs is single threaded non blocking i/o module
even though it is single threaded it is efficient
because it uses non-locking event loop
and keeps the events in a stack
they will be executed one by one without waiting for any one of these to complete
instead they will be executed and completed as the process is running other callbacks

What is the size of event stack?

The total number of event handlers is limited only by v8 and/or the amount of available RAM
*/
const fs = require("fs");
const fileName = "target.txt";

const errorHandler = (err) => console.log(err);
const dataHandler = (data) => {
    console.log(data.toString())
};
//error hadnling is very important in nodejs
//if error is not handled properly then the process will halt and prgram will exit unexpectedly
fs.readFile(fileName, (err, data) => {
    if(err){
        errorHandler(err);
    }else{
        dataHandler(data);
    }

});

console.log("Nodejs in async programming");//this line is printed first as the reading file system takes longer