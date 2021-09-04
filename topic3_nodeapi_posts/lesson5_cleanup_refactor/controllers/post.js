const Post = require("../models/post").model;

exports.getPostsController = (req, res) => {

    // const allPost = Post.find()
    // .then((posts) => {
    //     return res.status(200).json({
    //         posts
    //     })
    // })
    // .catch((err) => console.log(err));


    const allPost = Post.find().select("_id title body")
    .then((posts) => {
        return res.status(200).json({
            posts
        })
    })
    .catch((err) => console.log(err));
   
    
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

