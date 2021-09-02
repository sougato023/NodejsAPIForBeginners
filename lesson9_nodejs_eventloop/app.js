//Think of nodejs as a process which never stops
//It keeps on running and does the job as FIFO
//some jobs might take some time like fetching the data
//nodejs using callbak function to return as the job executes for long processing job
//nodejs is single threaded process
//it is based on non blocking input/output system

const fs = require("fs");
const fileName = "target.txt";
fs.watch(fileName, () => {
    console.log(`File Changed`);
});