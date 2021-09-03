exports.getPostsController = (req, res) => {

    //introduce controllers
    res.json({
        posts:[
            {title: 'First post'},
            {title:'Second post'}
        ]
    });
}
