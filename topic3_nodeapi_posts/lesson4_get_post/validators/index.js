exports.createPostValidator = (req, res, next) => {
    req.check("title", "Write a title").notEmpty();
    req.check("title", "Title must be between  4 to 150 characters").isLength({
        min:4,
        max:150
    });
    req.check("body", "Write a body").notEmpty();
    req.check("body", "Body must be between  4 to 2000 characters").isLength({
        min:4,
        max:2000
    });

    //check errors
    const errors = req.validationErrors();
    //console.log(errors);
    if(errors){
        const firstError = errors.map((err) => {
            //console.log(err.msg);
            return err.msg
        })[0];
//console.log(firstError);
        return res.status(400).json({
            error:firstError
        });
    }

    //proceed to next middleware
    next();
};