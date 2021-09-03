const getPosts = (req, res) => {
    res.send("Welcome to Nodejs server using express");
};

// module.exports = {
//     getPosts:getPosts
// };
exports.getPosts = getPosts;