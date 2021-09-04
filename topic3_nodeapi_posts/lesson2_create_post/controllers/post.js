const Post = require("../models/post").model;

exports.getPostsController = (req, res) => {

    //introduce controllers
    res.json({
        posts:[
            {title: 'First post'},
            {title:'Second post'}
        ]
    });
};

exports.createPost = (req, res) => {
    const post = new Post(req.body);

    post.save( (err, result) => {
        if(err){
            return res.status(400).json({
                error: err
            });
        } else{
           return res.status(200).json({
                post:result
            });
        }
    })

    //console.log("Creating Post: ", req.body);
}

