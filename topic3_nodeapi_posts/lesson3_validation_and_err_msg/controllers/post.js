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

    // post.save( (err, result) => {
       
    //        return res.status(200).json({
    //             post:result
    //         });
       
    // })
    post.save()
    .then(result => {
               return res.status(200).json({
                post:result
            });
    })

    //console.log("Creating Post: ", req.body);
}

